// Safe analytics wrapper for Shining Beauty
// - Never blocks app render
// - No-ops silently when GA4 not configured or errors occur
// - Consent-gated: only loads gtag.js after explicit analytics consent

export type ConsentCategory = "analytics" | "marketing";

let consentState: Record<ConsentCategory, boolean> = {
  analytics: false,
  marketing: false,
};

let gtagLoaded = false;
/** True only after script injection starts (or GA4 is confirmed absent). */
let gtagLoadAttempted = false;
let consentDefaultsPushed = false;

function safeGtag(...args: any[]) {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (!w.gtag) {
    if (!w.gtagq) w.gtagq = [];
    w.gtagq.push(args);
    return;
  }
  try {
    w.gtag(...args);
  } catch {
    /* Silent fail: never crash the app */
  }
}

function pushConsentDefaults(w: any) {
  if (consentDefaultsPushed) return;
  consentDefaultsPushed = true;
  if (!w.dataLayer) w.dataLayer = [];
  w.dataLayer.push({
    event: "consent",
    event_model: {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    },
  });
}

function loadGtagScript(measurementId: string) {
  if (typeof window === "undefined") return;
  if (gtagLoaded || gtagLoadAttempted) return;
  gtagLoadAttempted = true;

  const w = window as any;
  if (w.gtag) {
    gtagLoaded = true;
    return;
  }

  try {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.onerror = () => {
      /* Silent fail */
    };
    script.onload = () => {
      gtagLoaded = true;
      safeGtag("js", new Date());
      safeGtag("config", measurementId, {
        send_page_view: true,
      });
      if (w.gtagq) {
        w.gtagq.forEach((qargs: any[]) => safeGtag(...qargs));
        w.gtagq = [];
      }
    };
    document.head.appendChild(script);
  } catch {
    /* Silent fail */
  }
}

export function initAnalytics() {
  if (typeof window === "undefined") return;
  const w = window as any;

  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined;
  if (!measurementId) {
    gtagLoadAttempted = true;
    return;
  }

  try {
    pushConsentDefaults(w);
    if (!consentState.analytics) {
      // Wait for updateConsent — do not mark load attempted yet
      return;
    }
    loadGtagScript(measurementId);
  } catch {
    /* Silent fail */
  }
}

export function updateConsent(categories: Partial<Record<ConsentCategory, boolean>>) {
  consentState = { ...consentState, ...categories };
  if (typeof window === "undefined") return;
  const w = window as any;

  try {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "consent",
      event_model: {
        ad_storage: consentState.marketing ? "granted" : "denied",
        analytics_storage: consentState.analytics ? "granted" : "denied",
        ad_user_data: consentState.marketing ? "granted" : "denied",
        ad_personalization: consentState.marketing ? "granted" : "denied",
        wait_for_update: 500,
      },
    });

    if (consentState.analytics && !gtagLoaded) {
      const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined;
      if (measurementId) {
        loadGtagScript(measurementId);
      }
    }
  } catch {
    /* Silent fail */
  }
}

export function trackWhatsAppClick(source: string, extra?: Record<string, any>) {
  if (!consentState.analytics) return;
  safeGtag("event", "whatsapp_click", {
    event_category: "conversion",
    event_label: source,
    ...extra,
  });
}

export function trackOutboundClick(destination: string, linkType?: string) {
  if (!consentState.analytics) return;
  safeGtag("event", "outbound_click", {
    event_category: "engagement",
    event_label: destination,
    link_type: linkType,
  });
}

export function trackFormEvent(stage: string, payload?: Record<string, any>) {
  if (!consentState.analytics) return;
  safeGtag("event", "form_event", {
    event_category: "engagement",
    event_label: stage,
    ...payload,
  });
}

export function trackServiceSelect(service: string) {
  if (!consentState.analytics) return;
  safeGtag("event", "service_select", {
    event_category: "engagement",
    event_label: service,
  });
}

export function trackConsentDecision(category: ConsentCategory, granted: boolean) {
  if (!consentState.analytics && !consentState.marketing) return;
  safeGtag("event", "consent_update", {
    event_category: "consent",
    event_label: `${category}:${granted ? "granted" : "denied"}`,
  });
}
