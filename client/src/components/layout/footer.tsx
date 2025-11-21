import { Facebook, Instagram, MessageCircle, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-primary">
              Shining<span className="text-foreground">Beauty</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A sanctuary of tranquility in the heart of Adana. Experience luxury treatments designed to rejuvenate your body and soul.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Packages</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Massage Therapy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facial Treatments</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Nail Care</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Body Scrubs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wellness Packages</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={20} className="mt-1 shrink-0 text-primary" />
                <span>Turgut Özal Blv. No:123,<br />Çukurova/Adana, Turkey</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={20} className="text-primary" />
                <span>+90 (555) 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={20} className="text-primary" />
                <span>info@shiningbeauty.icu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Shining Beauty Spa & Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
