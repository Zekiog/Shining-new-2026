/**
 * KVKK / GDPR consent manager.
 *
 * Default deny for all storage. Granular: `analytics` and `marketing`
 * (the latter gates Google Ads). Persisted in localStorage so the
 * banner does not re-appear after a decision.
 *
 * Wire to Google Consent Mode v2 in `analytics.ts`. Consent Mode v2
 * signals (`ad_storage`, `analytics_storage`, `ad_user_data`,
 * `ad_personalization`) default to `'denied'` on first paint, so
 * gtag never writes a cookie until the visitor accepts.
 */

const STORAGE_KEY = "shining.consent.v1";

export type ConsentDecision = "accept" | "reject" | "custom";
export type ConsentCategory = "analytics" | "marketing";

export interface ConsentState {
  decision: ConsentDecision;
  categories: Record<ConsentCategory, boolean>;
  /** ISO timestamp of the user's last decision. */
  updatedAt: string;
  /** Schema version — bump when categories or shape changes. */
  version: 1;
}

export const DEFAULT_CONSENT_STATE: ConsentState = {
  decision: "reject",
  categories: { analytics: false, marketing: false },
  updatedAt: new Date(0).toISOString(),
  version: 1,
};

type Listener = (state: ConsentState) => void;
const listeners = new Set<Listener>();
let cached: ConsentState | null = null;

function readFromStorage(): ConsentState {
  if (typeof window === "undefined") return DEFAULT_CONSENT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONSENT_STATE;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.version !== 1) return DEFAULT_CONSENT_STATE;
    if (!parsed.decision || !parsed.categories) return DEFAULT_CONSENT_STATE;
    return {
      decision: parsed.decision,
      categories: {
        analytics: Boolean(parsed.categories.analytics),
        marketing: Boolean(parsed.categories.marketing),
      },
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
      version: 1,
    };
  } catch {
    return DEFAULT_CONSENT_STATE;
  }
}

function writeToStorage(state: ConsentState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* quota or private-mode — fail open for analytics no-op fallback */
  }
}

export function getConsentState(): ConsentState {
  if (cached) return cached;
  cached = readFromStorage();
  return cached;
}

export function setConsentState(next: ConsentState) {
  cached = next;
  writeToStorage(next);
  for (const listener of Array.from(listeners)) listener(next);
}

export function acceptAll(): ConsentState {
  const state: ConsentState = {
    decision: "accept",
    categories: { analytics: true, marketing: true },
    updatedAt: new Date().toISOString(),
    version: 1,
  };
  setConsentState(state);
  return state;
}

export function rejectAll(): ConsentState {
  const state: ConsentState = {
    decision: "reject",
    categories: { analytics: false, marketing: false },
    updatedAt: new Date().toISOString(),
    version: 1,
  };
  setConsentState(state);
  return state;
}

export function setCustomConsent(categories: Partial<Record<ConsentCategory, boolean>>): ConsentState {
  const state: ConsentState = {
    decision: "custom",
    categories: {
      analytics: Boolean(categories.analytics),
      marketing: Boolean(categories.marketing),
    },
    updatedAt: new Date().toISOString(),
    version: 1,
  };
  setConsentState(state);
  return state;
}

export function subscribeConsent(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** True only after the visitor has answered the banner. */
export function hasConsented(): boolean {
  return getConsentState().decision !== DEFAULT_CONSENT_STATE.decision || getConsentState().updatedAt !== DEFAULT_CONSENT_STATE.updatedAt;
}

/** Translate the consent state into Consent Mode v2 signals. */
export function toConsentModeV2(state: ConsentState): Record<string, "granted" | "denied"> {
  return {
    ad_storage: state.categories.marketing ? "granted" : "denied",
    analytics_storage: state.categories.analytics ? "granted" : "denied",
    ad_user_data: state.categories.marketing ? "granted" : "denied",
    ad_personalization: state.categories.marketing ? "granted" : "denied",
  };
}
