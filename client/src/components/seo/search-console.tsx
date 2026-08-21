import { useEffect } from "react";

/**
 * Google Search Console verification meta tag.
 *
 * Reads the verification token from `VITE_GOOGLE_SITE_VERIFICATION`.
 * When the env var is unset (dev builds, unconfigured production), no
 * tag is injected — the Search Console verification step is a one-off
 * per-site action and lives entirely in the business owner's hands.
 *
 * Two ways to provide the token:
 *   1. Recommended: HTML meta tag method. Paste the `content="..."`
 *      value Google shows you into the Netlify env var.
 *   2. Alternative: HTML file upload. Drop the file Google gives you
 *      into `public/` and it is served at `https://shining.icu/<name>.html`.
 *
 * After deploying with the token in place:
 *   - Visit https://search.google.com/search-console
 *   - Property: "URL prefix" -> https://shining.icu
 *   - Verification -> HTML tag -> click Verify
 *   - Sitemaps -> paste https://shining.icu/sitemap.xml -> Submit
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

