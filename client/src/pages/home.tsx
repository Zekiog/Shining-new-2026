import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { ReviewsAndContact } from "@/components/sections/reviews-contact";
import { FloatingContact } from "@/components/ui/floating-contact";
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import aboutImg from "@assets/Luxury_spa_treatment_room_for_beauty_salon_website_1763686140860.png";
import detailImg from "@assets/Natural_aromatherapy_products_for_wellness_treatments_1763686140860.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <FloatingContact />
      
      <main>
        <Hero />
        
        <ServicesPreview />

        {/* About/Intro Section */}
        <section id="about" className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-200 relative z-10 shadow-2xl">
                  <img 
                    src={aboutImg} 
                    alt="Shining Beauty Spa Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-300 z-20 border-8 border-background shadow-xl">
                   <img 
                    src={detailImg}
                    alt="Aromatherapy Details" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-primary/30 rounded-full z-0" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:pl-10 pt-10 lg:pt-0"
              >
                <span className="text-primary font-medium tracking-widest uppercase text-sm">{t('about.tag')}</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                  {t('about.title')}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {t('about.p1')}
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {t('about.p2')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Star size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg">{t('about.staff.title')}</h4>
                      <p className="text-muted-foreground text-sm">{t('about.staff.desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg">{t('about.products.title')}</h4>
                      <p className="text-muted-foreground text-sm">{t('about.products.desc')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <InstagramFeed />
        
        <ReviewsAndContact />

      </main>

      <Footer />
    </div>
  );
}
