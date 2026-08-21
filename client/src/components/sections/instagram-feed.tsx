import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { business } from "@/lib/business";

// Using the new high-quality attached assets for the "feed"
import img1 from "@assets/Luxury_spa_treatment_room_for_beauty_salon_website_1763686140860.png";
import img2 from "@assets/Professional_nail_art_service_for_beauty_salon_1763686140861.png";
import img3 from "@assets/Professional_facial_treatment_and_skincare_application_1763686140861.png";
import img4 from "@assets/Natural_aromatherapy_products_for_wellness_treatments_1763686140860.png";
import img5 from "@assets/Professional_body_care_and_exfoliation_treatment_1763686140860.png";
import img6 from "@assets/Professional_body_treatment_and_wellness_service_1763686140860.png";

const feedItems = [
  { id: 1, img: img1, alt: "Luxury Spa Interior" },
  { id: 2, img: img2, alt: "Elegant Nail Art" },
  { id: 3, img: img3, alt: "Relaxing Facial" },
  { id: 4, img: img4, alt: "Aromatherapy Essentials" },
  { id: 5, img: img5, alt: "Body Care Treatment" },
  { id: 6, img: img6, alt: "Massage Therapy" },
];

export function InstagramFeed() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full mb-4 text-pink-600 dark:text-pink-400">
            <Instagram size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {t('instagram.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {/* Using simple interpolation for the link since Trans component might be overkill for this mockup speed */}
            {t('instagram.desc').replace('{{link}}', '')} <a href={business.socials.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">{business.socials.instagramHandle}</a>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {feedItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={business.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            onClick={() => window.open(business.socials.instagramUrl, "_blank", "noopener,noreferrer")}
          >
            {t('instagram.viewFeed')}
          </Button>
        </div>
      </div>
    </section>
  );
}
