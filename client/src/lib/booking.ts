/**
 * Merkezi WhatsApp randevu yardımcısı.
 * Tek doğrulanmış numara, kaynak etiketleri, Türkçe/İngilizce mesaj gövdesi.
 */

import { trackWhatsAppClick } from "./analytics";
import { business } from "./business";

export const WHATSAPP_NUMBER_E164 = business.whatsappNumber;
export const WHATSAPP_DISPLAY = business.telephone;

export const KNOWN_SERVICES = [
  "Genel randevu talebi",
  "Masaj",
  "Cilt bakımı",
  "Tırnak bakımı",
  "Wellness",
] as const;

export type KnownService = (typeof KNOWN_SERVICES)[number];

const SERVICE_LABEL_EN: Record<KnownService, string> = {
  "Genel randevu talebi": "General appointment request",
  Masaj: "Massage",
  "Cilt bakımı": "Skin care",
  "Tırnak bakımı": "Nail care",
  Wellness: "Wellness",
};

/** Stable English source keys for analytics / WhatsApp body. */
export const CTA_SOURCE = {
  NAVBAR_DESKTOP: "navbar-desktop",
  NAVBAR_MOBILE: "navbar-mobile",
  HERO: "hero",
  FOOTER: "footer",
  FLOATING: "floating",
  CONTACT_FORM: "contact-form",
  SERVICE_BLOCK: "service-card",
  SERVICE_VIEW_ALL: "services-view-all",
} as const;

export type CtaSource = (typeof CTA_SOURCE)[keyof typeof CTA_SOURCE];

export interface BookingDraft {
  source: CtaSource;
  service?: string;
  name?: string;
  phone?: string;
  preferredTime?: string;
  note?: string;
  /** Visitor UI language. Defaults to Turkish. */
  lang?: string;
}

const formatLines = (lines: Array<string | undefined | false>): string =>
  lines.filter((l): l is string => Boolean(l && l.trim().length > 0)).join("\n");

function isEnglish(lang?: string): boolean {
  return Boolean(lang && lang.toLowerCase().startsWith("en"));
}

function formatServiceLabel(service: string, en: boolean): string {
  if (!en) return service;
  if (service in SERVICE_LABEL_EN) {
    return SERVICE_LABEL_EN[service as KnownService];
  }
  return service;
}

export function buildWhatsAppUrl(draft: BookingDraft): string {
  const en = isEnglish(draft.lang);
  const lines = formatLines([
    en
      ? "Hello Shining Beauty & Wellness 👋"
      : "Merhaba Shining Beauty & Wellness 👋",
    draft.service
      ? en
        ? `Service: ${formatServiceLabel(draft.service, true)}`
        : `Hizmet: ${draft.service}`
      : undefined,
    draft.name
      ? en
        ? `Name: ${draft.name}`
        : `Ad Soyad: ${draft.name}`
      : undefined,
    draft.phone
      ? en
        ? `Phone: ${draft.phone}`
        : `Telefon: ${draft.phone}`
      : undefined,
    draft.preferredTime
      ? en
        ? `Preferred time: ${draft.preferredTime}`
        : `Tercih edilen zaman: ${draft.preferredTime}`
      : undefined,
    draft.note
      ? en
        ? `Note: ${draft.note}`
        : `Not: ${draft.note}`
      : undefined,
    en ? `Source: ${draft.source}` : `Kaynak: ${draft.source}`,
  ]);

  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(lines)}`;
}

export function buildQuickWhatsAppUrl(
  source: CtaSource,
  extra?: string,
  lang?: string,
): string {
  const en = isEnglish(lang);
  const lines = formatLines([
    en
      ? "Hello Shining Beauty & Wellness 👋"
      : "Merhaba Shining Beauty & Wellness 👋",
    en ? `Source: ${source}` : `Kaynak: ${source}`,
    extra,
  ]);
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(lines)}`;
}

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
