import type { Express } from "express";
import { createServer, type Server } from "http";

/**
 * Randevu akışı WhatsApp'a taşındı.
 *
 * Ziyaretçi formu sunucuda saklanmaz. Form, `client/src/lib/booking.ts`
 * üzerinden `https://wa.me/<işletme-numarası>` bağlantısını hazır mesajla açar.
 * Böylece:
 *
 *   - Açık rıza olmadan kişisel veri tutulmaz (KVKK).
 *   - Netlify statik yayında çalışmayan `/api/contacts` yüzeyi kalkar
 *     (üretimde Express süreci yoktur).
 *   - İletişim ve randevu uçlarındaki enjeksiyon, spam ve kazıma yüzeyi daralır.
 *
 * Sunucu tarafı kayıt yeniden gerekirse uçlar `netlify/functions/` altına
 * taşınır; bu dosyaya geri konmaz. Dosya, `server/index.ts` içindeki
 * `registerRoutes` sözleşmesini boş da olsa ayakta tutar.
 */
export async function registerRoutes(app: Express): Promise<Server> {
  // Intentionally no API routes. See file header.
  return createServer(app);
}
