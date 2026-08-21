/**
 * Centralized WhatsApp booking helper.
 *
 * Single source of truth for the business WhatsApp number and the
 * URL/messages used by every CTA on the site. The previous code scattered
 * `https://wa.me/905050719501` across 5 files with no source tagging.
 *
 * Why this exists:
 *  - Confirm a single verified phone number (E.164, no spaces, no plus).
 *  - Standardize how each CTA labels itself in the WhatsApp chat
 *    ("Kaynak: shining.icu iletişim formu", "Kaynak: navbar", etc.).
 *  - URL-encode messages safely (Turkish characters, emoji, line breaks).
 *  - Keep booking flow a pure client-side redirect -> zero backend load,
 *    zero spam surface, zero PII storage.
 *  - Emit `whatsapp_click` GA4 events with the source label so the
 *    business can attribute conversions in the analytics dashboard.
 */

import { trackWhatsAppClick } from "./analytics";

export const WHATSAPP_NUMBER_E164 = "905050719501";
export const WHATSAPP_DISPLAY = "+90 505 071 95 01";

/** Allowed values for the optional `service` field in `BookingDraft`. */
export const KNOWN_SERVICES = [
  "Genel randevu talebi",
  "Masaj",
  "Cilt bakımı",
  "Tırnak bakımı",
  "Wellness",
] as const;

export type KnownService = (typeof KNOWN_SERVICES)[number];

/**
 * Source labels that will be attached to the WhatsApp message so the
 * business can see where the click originated.
 */
export const CTA_SOURCE = {
  NAVBAR_DESKTOP: "navbar (desktop CTA)",
  NAVBAR_MOBILE: "navbar (mobil CTA)",
  HERO: "hero (Randevu Oluştur)",
  FOOTER: "footer (WhatsApp ikonu)",
  FLOATING: "floating WhatsApp butonu",
  CONTACT_FORM: "shining.icu iletişim formu",
  SERVICE_BLOCK: "hizmet kartı",
} as const;

export type CtaSource = (typeof CTA_SOURCE)[keyof typeof CTA_SOURCE];

export interface BookingDraft {
  /** Where the click originated. */
  source: CtaSource;
  /** Optional service the visitor is interested in. */
  service?: string;
  /** Optional visitor-supplied data, only filled by the contact form. */
  name?: string;
  phone?: string;
  preferredTime?: string;
  note?: string;
}

const formatLines = (lines: Array<string | undefined | false>): string =>
  lines.filter((l): l is string => Boolean(l && l.trim().length > 0)).join("\n");

/**
 * Build a complete, URL-safe WhatsApp `wa.me` URL for the business.
 *
 * Usage:
 *   buildWhatsAppUrl({ source: CTA_SOURCE.NAVBAR_DESKTOP })
 *   buildWhatsAppUrl({
 *     source: CTA_SOURCE.CONTACT_FORM,
 *     service: "Masaj",
 *     name: "Ayşe",
 *     phone: "+90 555 ...",
 *     preferredTime: "Salı 16:00",
 *     note: "Aromaterapi tercih ediyorum",
 *   })
 */
export function buildWhatsAppUrl(draft: BookingDraft): string {
  const lines = formatLines([
    `Merhaba Shining Beauty & Wellness 👋`,
    draft.service ? `Hizmet: ${draft.service}` : undefined,
    draft.name ? `Ad Soyad: ${draft.name}` : undefined,
    draft.phone ? `Telefon: ${draft.phone}` : undefined,
    draft.preferredTime ? `Tercih edilen zaman: ${draft.preferredTime}` : undefined,
    draft.note ? `Not: ${draft.note}` : undefined,
    `Kaynak: ${draft.source}`,
  ]);

  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(lines)}`;
}

/**
 * Convenience for non-form CTAs (nav, hero, footer, floating). Builds a
 * short message with just the source tag.
 */
export function buildQuickWhatsAppUrl(source: CtaSource, extra?: string): string {
  const lines = formatLines([
    `Merhaba Shining Beauty & Wellness 👋`,
    `Kaynak: ${source}`,
    extra,
  ]);
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(lines)}`;
}

/**
 * Open a WhatsApp URL in a new tab with `noopener` + `noreferrer`.
 *
 * Falls back to direct navigation if popups are blocked.
 *
 * `source` should be a `CtaSource` (or any stable string) and is
 * forwarded to GA4 as the `source` parameter of the `whatsapp_click`
 * conversion event. No-op when consent is denied or GA4 is not
 * configured.
 */
export function openWhatsApp(url: string, source?: CtaSource): void {
  if (typeof window === "undefined") return;
  trackWhatsAppClick(source ?? "direct", {
    ctaLabel: source,
  });
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) {
    window.location.href = url;
  }
}