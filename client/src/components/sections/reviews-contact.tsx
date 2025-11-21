import { motion } from "framer-motion";
import { Star, Quote, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    author: "Merve Y.",
    rating: 5,
    text: "Head spa deneyimi inanılmazdı! Kokulu yağlar ve masaj teknikleriyle hem zihnim hem de ruhum arındı. Kesinlikle tavsiye ediyorum.",
    service: "Head Spa"
  },
  {
    id: 2,
    author: "Elif K.",
    rating: 5,
    text: "G5 masajı ve lenf drenaj hizmetlerinden çok memnun kaldım. Atmosfer çok huzurlu ve çalışanlar çok profesyonel.",
    service: "Vücut Bakımı"
  },
  {
    id: 3,
    author: "Ayşe D.",
    rating: 5,
    text: "Lazer epilasyon ve karbon peeling işlemleri için geliyorum. Sonuçlar harika, hijyen ve ilgi çok üst düzeyde.",
    service: "Cilt Bakımı"
  }
];

export function ReviewsAndContact() {
  const { t } = useTranslation();

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
                "{review.text}"
              </p>
              <div className="border-t border-border/50 pt-4 flex justify-between items-center">
                <span className="font-serif font-bold text-foreground">{review.author}</span>
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {review.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
            onClick={() => window.open("https://www.google.com/search?q=Shining+Beauty+Wellness+Yorumlar", "_blank")}
          >
            Tüm Yorumları Oku
          </Button>
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
