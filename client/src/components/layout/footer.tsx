import { Facebook, Instagram, MessageCircle, Phone, MapPin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildQuickWhatsAppUrl, CTA_SOURCE } from "@/lib/booking";
import { trackOutboundClick, trackWhatsAppClick } from "@/lib/analytics";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary/30 pt-20 pb-10 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-primary">
              Shining<span className="text-foreground">Beauty</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/shining.beauty.wellness" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-white hover:bg-gradient-to-tr hover:from-orange-500 hover:to-purple-600 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61572925680179" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-white hover:bg-blue-600 transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={buildQuickWhatsAppUrl(CTA_SOURCE.FOOTER)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick(CTA_SOURCE.FOOTER, { ctaLabel: "footer-icon" });
                  trackOutboundClick("wa.me", "external");
                }}
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-white hover:bg-green-500 transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-foreground">{t('footer.explore')}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block py-1">{t('footer.story')}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors block py-1">{t('footer.services')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block py-1">{t('footer.packages')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block py-1">{t('nav.blog')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block py-1">{t('footer.giftCards')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-foreground">{t('footer.services')}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block py-1">{t('services.massage.title')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block py-1">{t('services.skincare.title')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block py-1">{t('services.nails.title')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block py-1">{t('services.wellness.title')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-foreground">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-muted-foreground group">
                <MapPin size={18} className="mt-1 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <a href="https://maps.app.goo.gl/OrzXqpzLIiSfEoekw" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Gazipaşa Rezidans, Cemalpaşa,<br />60003 Sk Asmakat No:3,<br />01120 Seyhan/Adana, Türkiye
                </a>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground group">
                <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <a href="tel:+905050719501" className="hover:text-primary transition-colors">+90 505 071 95 01</a>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground group">
                <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <a href="mailto:info@shining.icu" className="hover:text-primary transition-colors">info@shining.icu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center text-muted-foreground text-xs">
          <p>&copy; {new Date().getFullYear()} Shining Beauty & Wellness. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
