import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact-form";
import { business } from "@/lib/business";

/**
 * Seçilmiş misafir yorumları. Her kayıt için yazılı izin gerekir (KVKK).
 * Adlar ad + soyad baş harfidir. "Tüm yorumlar" Google aramasına gider.
 * İşletme bir Google Place ID verirse sabit dizi canlı pencereyle değişir.
 */

interface Testimonial {
  id: number;
  author: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  key: "merve" | "elif" | "ayse";
}

const reviews: Testimonial[] = [
  { id: 1, author: "Merve Y.", date: "2026-07-12", rating: 5, key: "merve" },
  { id: 2, author: "Elif K.", date: "2026-06-28", rating: 5, key: "elif" },
  { id: 3, author: "Ayşe D.", date: "2026-05-19", rating: 5, key: "ayse" },
];

function formatReviewDate(isoDate: string, language: string) {
  const locale = language.toLowerCase().startsWith("en") ? "en-GB" : "tr-TR";
  return new Intl.DateTimeFormat(locale, {
    timeZone: business.timeZone,
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${isoDate}T12:00:00Z`));
}

export function ReviewsAndContact() {
  const { t, i18n } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            {t("reviews.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("reviews.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 w-10 h-10" />
              <div className="flex space-x-1 text-primary mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                &ldquo;{t(`reviews.${review.key}.text`)}&rdquo;
              </p>
              <div className="border-t border-border/50 pt-4 flex justify-between items-center">
                <span className="font-serif font-bold text-foreground">{review.author}</span>
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t(`reviews.${review.key}.service`)}
                </span>
              </div>
              <time
                dateTime={review.date}
                className="mt-2 block text-xs text-muted-foreground"
              >
                {formatReviewDate(review.date, i18n.resolvedLanguage ?? i18n.language)}
              </time>
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

      {/* Contact Form Section */}
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

      {/* Full Width Map Section */}
      <div className="w-full h-[500px] relative group">
        <iframe
          src={business.maps.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.2)' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title={t("reviews.mapTitle")}
        ></iframe>
      </div>
    </section>
  );
}
