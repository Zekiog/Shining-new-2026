import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/luxury_spa_massage_room_with_ambient_lighting.png";
import textureBg from "@assets/generated_images/abstract_golden_waves_texture_for_background.png";

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Spa Ambience"
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm uppercase tracking-widest mb-6 font-sans">
            Welcome to Shining Beauty
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Discover Your <br />
          <span className="italic text-primary-foreground font-light">Inner Radiance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Experience the ultimate luxury spa treatments in Adana. 
          Rejuvenate your body and soul with our exclusive wellness therapies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium min-w-[180px]"
          >
            Book Appointment
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-medium min-w-[180px]"
          >
            View Services
          </Button>
        </motion.div>
      </div>

      {/* Texture Overlay for Luxury Feel */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 opacity-30 pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: `url(${textureBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </section>
  );
}
