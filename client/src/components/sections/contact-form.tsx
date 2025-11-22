import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t('nav.contact') + " başarıyla gönderildi!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Hata! Lütfen tekrar deneyiniz.");
      }
    } catch (error) {
      toast.error("Bağlantı hatası!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50">
      <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
        {t('nav.contact')}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground/80 mb-2">
            İsim
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Adınız"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground/80 mb-2">
            E-posta
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground/80 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="+90 505 071 95 01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground/80 mb-2">
            Mesaj
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            placeholder="Mesajınız..."
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
        >
          {isLoading ? "Gönderiliyor..." : "Gönder"}
        </Button>
      </form>

      <div className="mt-8 pt-8 border-t border-border/50 space-y-4">
        <a href="tel:+905050719501" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
          <Phone className="w-5 h-5 text-primary" />
          +90 505 071 95 01
        </a>
        <a href="mailto:info@shining.icu" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
          <Mail className="w-5 h-5 text-primary" />
          info@shining.icu
        </a>
        <a href="https://wa.me/905050719501" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
          <MessageSquare className="w-5 h-5 text-primary" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
