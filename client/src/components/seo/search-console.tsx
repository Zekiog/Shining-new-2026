import { useEffect } from "react";

/**
 * Google Search Console doğrulama meta etiketi.
 *
 * `VITE_GOOGLE_SITE_VERIFICATION` doluysa etiketi enjekte eder.
 * Yoksa hiçbir şey eklemez.
 *
 * Canlı host: https://shining-beauty-wellness-kurtulus.netlify.app/
 * Sitemap: https://shining-beauty-wellness-kurtulus.netlify.app/sitemap.xml
 */
export function SearchConsoleVerification() {
  const token = (import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined)?.trim();

  useEffect(() => {
    if (!token || typeof document === "undefined") return;
    const existing = document.querySelector('meta[name="google-site-verification"]');
    if (existing) {
      existing.setAttribute("content", token);
      return;
    }
    const meta = document.createElement("meta");
    meta.name = "google-site-verification";
    meta.content = token;
    document.head.appendChild(meta);
  }, [token]);

  return null;
}
