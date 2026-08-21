import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/Elegant_spa_massage_room_for_wellness_services_1763686140859.png";
import textureBg from "@assets/generated_images/abstract_golden_waves_texture_for_background.png";
import { useTranslation } from "react-i18next";
import {
  buildQuickWhatsAppUrl,
  CTA_SOURCE,
  openWhatsApp,
} from "@/lib/booking";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Shining Beauty Spa Ambience"
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-2 px-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs md:text-sm uppercase tracking-[0.2em] mb-6 font-sans shadow-xl">
            {t('hero.welcome')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          {t('hero.title')} <br />
          <span className="italic text-primary-foreground/90 font-light">{t('hero.subtitle')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium min-w-[180px] border-0"
            onClick={() => openWhatsApp(buildQuickWhatsAppUrl(CTA_SOURCE.HERO), CTA_SOURCE.HERO)}
          >
            {t('hero.bookBtn')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/50 text-white bg-transparent hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium min-w-[180px] backdrop-blur-sm"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.servicesBtn')}
          </Button>
        </motion.div>
      </div>

      {/* Texture Overlay for Luxury Feel */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: `url(${textureBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </section>
  );
}
