import { motion } from "framer-motion";
import { Quote, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact-form";
import { business } from "@/lib/business";

/**
 * Illustrative atelier notes — not live Google reviews.
 * Named authors require written KVKK consent before presenting as verified guests.
 * "Read reviews" opens a Google search; Place ID is not wired.
 */

interface AtelierNote {
  id: number;
  key: "merve" | "elif" | "ayse";
}

const atelierNotes: AtelierNote[] = [
  { id: 1, key: "merve" },
  { id: 2, key: "elif" },
  { id: 3, key: "ayse" },
];

export function ReviewsAndContact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
            {t("reviews.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            {t("reviews.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("reviews.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {atelierNotes.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 w-10 h-10" />
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                &ldquo;{t(`reviews.${note.key}.text`)}&rdquo;
              </p>
              <div className="border-t border-border/50 pt-4 flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{t("reviews.illustrative")}</span>
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t(`reviews.${note.key}.service`)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
            onClick={() =>
              window.open(
                "https://www.google.com/search?q=Shining+Beauty+Wellness+Adana+Yorumlar",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            {t("reviews.readAll")}
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {t("reviews.contactTitle")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("reviews.contactSubtitle")}
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

      <div className="container mx-auto px-4 pb-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/60 bg-secondary/20 p-6 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-primary">
            {t("info.location.title")}
          </p>
          <p className="mb-3 text-xs text-muted-foreground">
            {t("info.hours.week")} · {t("info.hours.sunday")}
          </p>
          <a
            href={business.maps.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start justify-center gap-2 text-foreground hover:text-primary transition-colors"
            data-testid="map-address-banner"
          >
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <span className="text-left font-serif text-lg leading-relaxed">
              {business.address.lines[0]}
              <br />
              {business.address.lines[1]}
              <br />
              {business.address.lines[2]}
            </span>
          </a>
        </div>
      </div>

      <div className="w-full h-[500px] relative group">
        <iframe
          src={business.maps.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.2)" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title={t("reviews.mapTitle")}
        />
      </div>
    </section>
  );
}
