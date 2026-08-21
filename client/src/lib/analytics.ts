/**
 * GA4 + Google Ads measurement, gated by visitor consent.
 *
 * Configuration is environment-driven:
 *   - VITE_GA4_MEASUREMENT_ID   e.g. "G-XXXXXXXXXX"
 *   - VITE_GADS_CONVERSION_ID   e.g. "AW-XXXXXXXXXX" (optional)
 *
 * When the env var is unset, every call below becomes a silent no-op
 * so the build always succeeds and developers can run locally without
 * leaking events to a real property.
 *
 * Architecture:
 *   1. `initAnalytics()` runs once on app start. It pushes the
 *      Consent Mode v2 default (`denied` everywhere) into the
 *      `dataLayer` BEFORE gtag.js loads — this is required so that
 *      any hits fired before the visitor consents never write cookies.
 *   2. gtag.js is injected ONLY after the visitor accepts at least
 *      the `analytics` category. While analytics is denied, gtag.js
 *      itself never loads (so requests to googletagmanager.com are
 *      not made at all — reduces passive fingerprinting).
 *   3. After every consent change we re-emit the gtag `consent`
 *      command with the latest signals, so the user's preferences
 *      take effect immediately even if they revisit the preferences
 *      page later.
 */

import {
  getConsentState,
  hasConsented,
  subscribeConsent,
  toConsentModeV2,
} from "./consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = (import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined)?.trim();
const ADS_CONVERSION_ID = (import.meta.env.VITE_GADS_CONVERSION_ID as string | undefined)?.trim();

let initialized = false;
let gtagLoaded = false;

const SNIPPET_SOURCE = "https://www.googletagmanager.com/gtag/js";

function ensureDataLayer() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
}

function pushConsent(signal: "default" | "update") {
  if (typeof window === "undefined") return;
  const state = getConsentState();
  window.gtag?.("consent", signal, toConsentModeV2(state));
  if (signal === "update" && state.decision === "accept") {
    window.gtag?.("event", "consent_update", { decision: state.decision });
  }
}

function injectGtag() {
  if (typeof window === "undefined" || gtagLoaded) return;
  if (!MEASUREMENT_ID) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `${SNIPPET_SOURCE}?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  s.crossOrigin = "anonymous";
  document.head.appendChild(s);
  gtagLoaded = true;
}

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  ensureDataLayer();
  // Always push the default deny on first paint, even before the
  // visitor answers the cookie banner. This is the Consent Mode v2
  // requirement.
  pushConsent("default");
  window.gtag?.("js", new Date());
  if (MEASUREMENT_ID) {
    window.gtag?.("config", MEASUREMENT_ID, { send_page_view: false });
  }
  if (ADS_CONVERSION_ID) {
    window.gtag?.("config", ADS_CONVERSION_ID);
  }
  // Load gtag.js + send the first page view once analytics is allowed.
  const state = getConsentState();
  if (state.categories.analytics) {
    injectGtag();
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
  // React to any consent change from the banner.
  subscribeConsent(() => {
    const next = getConsentState();
    if (next.categories.analytics && !gtagLoaded) {
      injectGtag();
      window.gtag?.("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
    pushConsent("update");
  });
}

/**
 * Whether measurement is wired at all. False when the build has no
 * GA4 measurement ID — useful for components that want to skip event
 * tracking entirely instead of pushing no-ops into dataLayer.
 */
export function hasAnalyticsConfigured(): boolean {
  return Boolean(MEASUREMENT_ID);
}

function track(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!MEASUREMENT_ID) return;
  if (!getConsentState().categories.analytics) return;
  if (!hasConsented()) return;
  window.gtag?.("event", eventName, params);
}

// ---------- Domain-specific events ----------

/** THE conversion event: someone clicked a WhatsApp CTA. */
export function trackWhatsAppClick(
  source: string,
  extra?: { service?: string; hasDraft?: boolean; ctaLabel?: string }
) {
  track("whatsapp_click", {
    source,
    service: extra?.service,
    has_draft: extra?.hasDraft ?? false,
    cta_label: extra?.ctaLabel,
  });
}

/** Form lifecycle events — only fired when consent allows analytics. */
export function trackFormEvent(
  stage: "form_view" | "form_submit_attempt" | "form_submit_success" | "honeypot_blocked" | "consent_blocked",
  payload?: { service?: string; validationError?: string }
) {
  track(stage, payload);
}

export function trackServiceSelect(serviceKey: string) {
  track("service_select", { service: serviceKey });
}

export function trackConsentDecision(decision: "accept" | "reject" | "custom") {
  // Note: this fires BEFORE analytics_storage is granted in the
  // "accept" path. gtag still respects Consent Mode v2 — the event
  // is only delivered once the visitor has answered. We do not gate
  // this on `getConsentState()` for that reason.
  if (typeof window === "undefined" || !MEASUREMENT_ID) return;
  window.gtag?.("event", "consent_decision", { decision });
}

export function trackNavClick(label: string, location: string) {
  track("nav_click", { label, location });
}

export function trackOutboundClick(url: string, type: "social" | "maps" | "external") {
  track("outbound_click", { url, type });
}
