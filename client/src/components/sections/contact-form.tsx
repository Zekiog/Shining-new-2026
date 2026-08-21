import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";
import {
  buildWhatsAppUrl,
  KNOWN_SERVICES,
  openWhatsApp,
  WHATSAPP_DISPLAY,
  CTA_SOURCE,
} from "@/lib/booking";

/**
 * Contact form -> WhatsApp booking flow.
 *
 * The previous implementation POSTed to `/api/contacts`. That endpoint
 * was removed in `server/routes.ts` because:
 *   1. Netlify static deploys do not run the Express server, so the form
 *      silently failed in production.
 *   2. Even when reachable, it stored visitor PII without an explicit
 *      consent gate.
 *
 * The form now opens WhatsApp Business with a pre-filled message. No
 * PII ever leaves the visitor's browser before they hit "Send" in the
 * WhatsApp app. Bot mitigation is a single hidden honeypot field -- basic
 * but enough for a static site without server-side rate limiting.
 */
export function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Genel randevu talebi",
    preferredTime: "",
    note: "",
    /** Honeypot: hidden from real users, attractive to bots. */
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot: if filled, the visitor is almost certainly a bot.
    // Silently succeed without opening WhatsApp.
    if (formData.website.trim().length > 0) {
      formRef.current?.reset();
      return;
    }

    if (!consent) {
      setError(t("contactForm.consentRequired"));
      return;
    }
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError(t("contactForm.requiredFields"));
      return;
    }

    setIsSubmitting(true);
    try {
      const url = buildWhatsAppUrl({
        source: CTA_SOURCE.CONTACT_FORM,
        service: formData.service,
        name: formData.name,
        phone: formData.phone,
        preferredTime: formData.preferredTime || undefined,
        note: formData.note || undefined,
      });
      openWhatsApp(url);
    } finally {
      requestAnimationFrame(() => {
        setIsSubmitting(false);
        setConsent(false);
        setFormData((prev) => ({
          ...prev,
          name: "",
          phone: "",
          preferredTime: "",
          note: "",
        }));
      });
    }
  };

  return (
    <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 relative">
      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
        {t("contactForm.title")}
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        {t("contactForm.subtitle")}
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        {/* Honeypot: aria-hidden, tabIndex -1, visually hidden. */}
        <div
          aria-hidden="true"
          className="absolute -left-[10000px] w-px h-px overflow-hidden"
        >
          <label>
            Website
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="cf-name"
            className="block text-sm font-medium text-foreground/80 mb-2"
          >
            {t("contactForm.name")} *
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder={t("contactForm.namePlaceholder")}
          />
        </div>

        <div>
          <label
            htmlFor="cf-phone"
            className="block text-sm font-medium text-foreground/80 mb-2"
          >
            {t("contactForm.phone")} *
          </label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            inputMode="tel"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="+90 5XX XXX XX XX"
          />
        </div>

        <div>
          <label
            htmlFor="cf-service"
            className="block text-sm font-medium text-foreground/80 mb-2"
          >
            {t("contactForm.service")}
          </label>
          <select
            id="cf-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {KNOWN_SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="cf-time"
            className="block text-sm font-medium text-foreground/80 mb-2"
          >
            {t("contactForm.preferredTime")}
          </label>
          <input
            id="cf-time"
            type="text"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            autoComplete="off"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder={t("contactForm.preferredTimePlaceholder")}
          />
        </div>

        <div>
          <label
            htmlFor="cf-note"
            className="block text-sm font-medium text-foreground/80 mb-2"
          >
            {t("contactForm.note")}
          </label>
          <textarea
            id="cf-note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            placeholder={t("contactForm.notePlaceholder")}
          />
        </div>

        <label className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary/50"
            required
          />
          <span>{t("contactForm.consent")}</span>
        </label>

        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
        >
          {isSubmitting
            ? t("contactForm.submitting")
            : t("contactForm.submit")}
        </Button>
      </form>

      <div className="mt-8 pt-8 border-t border-border/50 space-y-4">
        <a
          href={`tel:${WHATSAPP_DISPLAY.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
        >
          <Phone className="w-5 h-5 text-primary" />
          {WHATSAPP_DISPLAY}
        </a>
        <a
          href="mailto:info@shining.icu"
          className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
        >
          <Mail className="w-5 h-5 text-primary" />
          info@shining.icu
        </a>
        <a
          href={buildWhatsAppUrl({ source: CTA_SOURCE.FOOTER })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
        >
          <MessageSquare className="w-5 h-5 text-primary" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}