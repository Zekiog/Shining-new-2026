import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      
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
                <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-200 relative z-10">
                   {/* Using one of the generated images as a placeholder for About image */}
                  <img 
                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
                    alt="Spa Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-300 z-20 border-8 border-background shadow-xl">
                   <img 
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
                    alt="Massage Detail" 
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
                <span className="text-primary font-medium tracking-widest uppercase text-sm">About Us</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                  A Sanctuary for Body & Soul
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Welcome to Shining Beauty, where luxury meets wellness. Established in the heart of Adana, we are dedicated to providing world-class spa and beauty services in a serene environment.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our expert therapists combine ancient techniques with modern skincare innovations to deliver treatments that not only rejuvenate your appearance but also restore your inner balance.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Star size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg">Expert Staff</h4>
                      <p className="text-muted-foreground text-sm">Certified therapists with years of experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg">Premium Products</h4>
                      <p className="text-muted-foreground text-sm">Using only the finest organic and luxury brands.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
              <div className="flex flex-col items-center text-center p-4">
                <Clock size={40} className="mb-4 opacity-80" />
                <h3 className="text-xl font-serif font-semibold mb-2">Opening Hours</h3>
                <p className="opacity-90">Mon - Sat: 10:00 - 20:00</p>
                <p className="opacity-90">Sunday: Closed</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <MapPin size={40} className="mb-4 opacity-80" />
                <h3 className="text-xl font-serif font-semibold mb-2">Location</h3>
                <p className="opacity-90">Turgut Özal Blv. No:123</p>
                <p className="opacity-90">Çukurova, Adana</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Star size={40} className="mb-4 opacity-80" />
                <h3 className="text-xl font-serif font-semibold mb-2">Book Online</h3>
                <p className="opacity-90">Easy scheduling for</p>
                <p className="opacity-90">all appointments</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
