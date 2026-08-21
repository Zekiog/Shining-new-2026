import { Link } from "wouter";
import { Moon, Sun, Menu, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";
import {
  buildQuickWhatsAppUrl,
  CTA_SOURCE,
  openWhatsApp,
} from "@/lib/booking";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { t, i18n } = useTranslation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme toggle
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.blog'), href: "#blog" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tighter">
            Shining<span className="text-foreground">Beauty</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-2 pl-4 border-l border-foreground/10">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full hover:bg-primary/10 text-foreground w-10 h-10 font-medium"
            >
              {i18n.language === 'en' ? 'TR' : 'EN'}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10 text-foreground"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
          </div>

          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            onClick={() => openWhatsApp(buildQuickWhatsAppUrl(CTA_SOURCE.NAVBAR_DESKTOP), CTA_SOURCE.NAVBAR_DESKTOP)}
          >
            {t('nav.bookNow')}
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full text-sm font-bold"
          >
            {i18n.language === 'en' ? 'TR' : 'EN'}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l border-border">
              <div className="flex flex-col space-y-8 mt-12 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-serif font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  className="w-full bg-primary text-primary-foreground rounded-full mt-4"
                  onClick={() => openWhatsApp(buildQuickWhatsAppUrl(CTA_SOURCE.NAVBAR_MOBILE), CTA_SOURCE.NAVBAR_MOBILE)}
                >
                  {t('nav.bookAppointment')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
