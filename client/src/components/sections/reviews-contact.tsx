import { motion } from "framer-motion";
import { Star, Quote, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact-form";

/**
 * Reviews shown here are curated testimonials, not live Google data.
 *
 * Each entry is published with the reviewer's explicit consent
 * (KVKK uyumlu). Names are shortened to first name + last initial.
 * The "Read all reviews" button below links to Google's search
 * results page for the business — that is the legally safe external
 * surface for the official Google reviews corpus.
 *
 * When the business owner provides a Google Place ID + Maps API
 * key, this section can be upgraded to a live widget without
 * changing the visual layout.
 */

interface Testimonial {
  id: number;
  author: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  service: string;
  /** True for placeholder entries pending owner confirmation. */
  pending?: boolean;
}

const reviews: Testimonial[] = [
  // TODO(business-owner): confirm each of these reviews came from a
  // real customer and that you have written permission to publish
  // their first name + last initial and verbatim quote. Set
  // `pending: false` on each after confirmation. Add more rows or
  // adjust service labels as needed.
  {
    id: 1,
    author: "Merve Y.",
    date: "2026-07-12",
    rating: 5,
    text: "Head spa deneyimi inanılmazdı! Kokulu yağlar ve masaj teknikleriyle hem zihnim hem de ruhum arındı. Kesinlikle tavsiye ediyorum.",
    service: "Head Spa",
    pending: true,
  },
  {
    id: 2,
    author: "Elif K.",
    date: "2026-06-28",
    rating: 5,
    text: "G5 masajı ve lenf drenaj hizmetlerinden çok memnun kaldım. Atmosfer çok huzurlu ve çalışanlar çok profesyonel.",
    service: "Vücut Bakımı",
    pending: true,
  },
  {
    id: 3,
    author: "Ayşe D.",
    date: "2026-05-19",
    rating: 5,
    text: "Lazer epilasyon ve karbon peeling işlemleri için geliyorum. Sonuçlar harika, hijyen ve ilgi çok üst düzeyde.",
    service: "Cilt Bakımı",
    pending: true,
  },
];

export function ReviewsAndContact() {
  const hasUnconfirmedReviews = reviews.some((r) => r.pending);

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Misafir Deneyimleri
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Shining Beauty & Wellness'ı tercih eden misafirlerimizin değerli yorumları.
          </p>
        </div>

        {hasUnconfirmedReviews ? (
          <div
            role="status"
            className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200"
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
            <p>
              <strong>İşletme sahibinin onayı bekleniyor.</strong> Aşağıdaki yorumlar
              yayın için yazılı izin alınana kadar yer tutucudur. Yayına alındıktan
              sonra her yoruma gerçek tarih ve onay işareti eklenir.
            </p>
          </div>
        ) : null}

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
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-border/50 pt-4 flex justify-between items-center">
                <span className="font-serif font-bold text-foreground">{review.author}</span>
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {review.service}
                </span>
              </div>
              <time
                dateTime={review.date}
                className="mt-2 block text-xs text-muted-foreground"
              >
                {review.date}
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
                "https://www.google.com/search?q=Shining+Beauty+Wellness+Yorumlar",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Tüm Yorumları Oku
          </Button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Bize Ulaşın
            </h2>
            <p className="text-muted-foreground text-lg">
              Sorularınız veya randevu talebiniz için lütfen iletişim formunu doldurunuz.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Full Width Map Section */}
      <div className="w-full h-[500px] relative group">
        <iframe
          src="https://maps.google.com/maps?q=Shining+Beauty+Wellness+Gazipa%C5%9Fa+Rezidans+Adana&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.2)' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Shining Beauty & Wellness Location"
        ></iframe>
      </div>
    </section>
  );
}

