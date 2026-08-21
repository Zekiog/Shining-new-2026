import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  acceptAll,
  getConsentState,
  hasConsented,
  rejectAll,
  setCustomConsent,
  subscribeConsent,
} from "@/lib/consent";
import { trackConsentDecision } from "@/lib/analytics";

/**
 * KVKK-compliant cookie banner.
 *
 * - Hidden as soon as the visitor makes a decision (accept / reject /
 *   customize) — the decision is persisted in localStorage by
 *   `consent.ts`.
 * - Default deny: nothing is loaded or measured until the visitor
 *   accepts. The banner shows on every fresh visit until then.
 * - Fully usable from keyboard: the focus order is
 *   title → description → customize toggle → save preferences →
 *   reject → accept all.
 */
export function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setVisible(!hasConsented());
    return subscribeConsent(() => {
      setVisible(false);
    });
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookieBanner.title")}
      data-testid="cookie-banner"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:p-6 dark:border-stone-700 dark:bg-stone-900/95">
        <h2 className="text-base font-semibold text-stone-900 sm:text-lg dark:text-stone-50">
          {t("cookieBanner.title")}
        </h2>
        <p className="mt-2 text-sm text-stone-600 sm:text-base dark:text-stone-300">
          {t("cookieBanner.description")}
        </p>

        {showCustomize ? (
          <fieldset className="mt-4 space-y-2 rounded-lg border border-stone-200 p-3 dark:border-stone-700">
            <legend className="sr-only">{t("cookieBanner.customizeLegend")}</legend>
            <label className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-200">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-stone-300"
                data-testid="consent-analytics"
              />
              <span>
                <span className="block font-medium">{t("cookieBanner.analyticsLabel")}</span>
                <span className="block text-xs text-stone-500 dark:text-stone-400">
                  {t("cookieBanner.analyticsHint")}
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-200">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-stone-300"
                data-testid="consent-marketing"
              />
              <span>
                <span className="block font-medium">{t("cookieBanner.marketingLabel")}</span>
                <span className="block text-xs text-stone-500 dark:text-stone-400">
                  {t("cookieBanner.marketingHint")}
                </span>
              </span>
            </label>
          </fieldset>
        ) : null}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (showCustomize) {
                setCustomConsent({ analytics, marketing });
                trackConsentDecision("custom");
              } else {
                setShowCustomize(true);
              }
            }}
            className="rounded-lg border border-stone-300 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800"
            data-testid="cookie-customize"
          >
            {showCustomize ? t("cookieBanner.savePreferences") : t("cookieBanner.customize")}
          </button>
          <button
            type="button"
            onClick={() => {
              rejectAll();
              trackConsentDecision("reject");
            }}
            className="rounded-lg border border-stone-300 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800"
            data-testid="cookie-reject"
          >
            {t("cookieBanner.reject")}
          </button>
          <button
            type="button"
            onClick={() => {
              acceptAll();
              trackConsentDecision("accept");
            }}
            className="ml-auto rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200"
            data-testid="cookie-accept"
          >
            {t("cookieBanner.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Floating "Privacy preferences" button to reopen the banner. */
export function CookieSettingsButton({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs text-stone-500 underline-offset-2 hover:underline dark:text-stone-400"
    >
      {t("cookieBanner.settings")}
    </button>
  );
}

/** Helper exposed for tests / programmatic re-prompt. */
export function reopenBanner() {
  // The banner listens to consent changes via subscribeConsent and
  // hides on next state. To "re-open", we temporarily clear storage
  // (caller is responsible for re-setting).
  if (typeof window === "undefined") return;
  window.localStorage.removeItem("shining.consent.v1");
  // Force a custom event so subscribers can re-evaluate.
  window.dispatchEvent(new CustomEvent("shining:reopen-consent"));
}
