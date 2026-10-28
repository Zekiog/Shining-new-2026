# Shining Beauty Wellness

Adana, Türkiye’deki **Shining Beauty Wellness** için pazarlama ve WhatsApp randevu sitesi. React istemci (`client/`) ile Express API (`server/`) aynı depoda durur.

**Canlı site:** https://shining-beauty-wellness-kurtulus.netlify.app  

`shining.icu` Hostinger’da süresi dolmuş durumda; Hostinger yenilemesi yapılmıyor. DNS hâlâ `ns1/ns2.dns-expired.com` ve TXT `This domain is expired at Hostinger!` — Cloudflare nameserver’larında değil. Cloudflare paneli bu alan adını yetkili yönetemez. Kanonik adres Netlify hostudur.

## Kimlik

Sitenin kanonik kimliği işletmenin bulunduğu yerdir. Geliştirici makinesinin ülkesi, tarayıcı dili veya saat dilimi bu kimliği değiştirmez.

| Alan | Değer |
|---|---|
| Pazar | Adana, Türkiye |
| Birincil dil | `tr-TR` |
| İkinci dil | `en` — yalnız `?lang=en` veya üst menüdeki dil düğmesi |
| Saat dilimi | `Europe/Istanbul` |
| Para birimi | `TRY` |
| Ülke | `TR` |
| İl kodu | `TR-01` |
| Kaynak | `client/src/lib/business.ts` |

Norveççe bir proje dili yoktur. `nb`, `nn` ve `no` desteklenmez; tarayıcı bu dilleri bildirirse sayfa Türkçe kalır.

Sokak kaydı `client/src/lib/business.ts` içindedir. Güncel adres: Kurtuluş Mahallesi, 64009 Sokak, Atakan Apartmanı B Blok Kat:1 No:2, 01130 Seyhan/Adana. Harita pini sokak merkezidir; kapı ayrıca ölçülmemiştir.

## Ne işe yarar

- Hizmet, fiyat, ekip ve iletişim sayfaları
- WhatsApp derin bağlantısı ile randevu (birincil dönüşüm)
- Yerel işletme yapılandırılmış verisi, Open Graph ve `hreflang`
- Ziyaretçi metinleri Türkçe; İngilizce yedek paket `client/src/lib/i18n.ts` içindedir

## Yığın

| Katman | Seçim |
|---|---|
| Arayüz | React, TypeScript, Vite |
| Bileşenler | Radix UI, Tailwind CSS |
| Sunucu | Node.js, Express (TypeScript, ESM) |
| Barındırma | Vercel veya Netlify |

## Dizin

```
.
├── client/           # React SPA
├── server/           # Express
├── attached_assets/
├── components.json   # shadcn/ui kaydı
├── vercel.json
├── netlify.toml
└── package.json
```

## Yerel çalıştırma

```bash
npm install
npm run dev            # API ve Vite birlikte; varsayılan port 5000
npm run dev:client     # yalnız istemci
npm run build
npm run start
npm run check          # tsc
```

macOS’ta 5000 portu AirPlay (ControlCenter) tarafından tutulabilir. O durumda:

```bash
PORT=5173 npm run dev
```

## Dil seçimi

Algılama sırası `client/src/lib/i18n.ts` içindedir:

1. Sorgu: `?lang=tr` veya `?lang=en`
2. Çerez: `shining_dil`
3. `client/index.html` içindeki `<html lang="tr">`

`navigator.language` ve `localStorage` okunmaz. İngilizceyi seçen ziyaretçinin çerezi bir yıl durur; çerez yoksa dil Türkçedir.

## Dağıtım

- **Vercel** — `vercel.json`: `/api/*` Express’e, kalanı Vite çıktısına.
- **Netlify** — `netlify.toml`: aynı ayrım, Functions düzeniyle.

Depoyu seçilen sağlayıcıya bağlamak yeterlidir. Üretimde randevu verisi sunucuda tutulmaz; form WhatsApp bağlantısı açar.

## Lisans

[MIT](./LICENSE)
