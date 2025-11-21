import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Flower2, Palette, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Updated with high-quality attached assets
import massageImg from "@assets/Professional_body_treatment_and_wellness_service_1763686140860.png";
import facialImg from "@assets/Professional_facial_treatment_and_skincare_application_1763686140861.png";
import nailsImg from "@assets/Professional_nail_art_service_for_beauty_salon_1763686140861.png";
import wellnessImg from "@assets/Professional_body_care_and_exfoliation_treatment_1763686140860.png";

const services = [
  {
    id: "massage",
    title: "Spa Massage",
    description: "Traditional and modern massage therapies to relieve stress and tension.",
    icon: Flower2,
    image: massageImg,
    price: "From 800₺",
  },
  {
    id: "skincare",
    title: "Skin Care",
    description: "Rejuvenating facials and advanced skin treatments for a glowing complexion.",
    icon: Sparkles,
    image: facialImg,
    price: "From 600₺",
  },
  {
    id: "nails",
    title: "Nail Art",
    description: "Premium manicures, pedicures, and custom nail art designs.",
    icon: Palette,
    image: nailsImg,
    price: "From 300₺",
  },
  {
    id: "wellness",
    title: "Body Wellness",
    description: "Holistic body treatments, scrubs, and detox wraps for total renewal.",
    icon: Heart,
    image: wellnessImg,
    price: "From 1200₺",
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Discover our curated selection of premium treatments designed to enhance your natural beauty and promote deep relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <service.icon className="w-8 h-8 mb-3 text-primary-foreground/90" />
                  <h3 className="text-2xl font-serif font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    <span className="font-medium text-primary-foreground">{service.price}</span>
                    <Button size="sm" variant="secondary" className="rounded-full text-xs h-8">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
            View All Treatments <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
