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

export const CTA_SOURCE = {
  NAVBAR_DESKTOP: "navbar (desktop CTA)",
  NAVBAR_MOBILE: "navbar (mobil CTA)",
  HERO: "hero (Randevu Oluştur)",
  FOOTER: "footer (WhatsApp ikonu)",
  FLOATING: "floating WhatsApp butonu",
  CONTACT_FORM: "netlify iletişim formu",
  SERVICE_BLOCK: "hizmet kartı",
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

export function buildWhatsAppUrl(draft: BookingDraft): string {
  const en = isEnglish(draft.lang);
  const lines = formatLines([
    en
      ? "Hello Shining Beauty & Wellness 👋"
      : "Merhaba Shining Beauty & Wellness 👋",
    draft.service
      ? en
        ? `Service: ${draft.service}`
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
