/**
 * İşletme kimliği Adana, Türkiye'ye sabitlenir.
 * Geliştirici makinesinin ülkesi dil, saat dilimi, para birimi veya bölge seçmez.
 * schema.org gün adları (Monday, …) sözlük IRI'sidir; çevrilmez.
 *
 * Konum: 64009 Sokak sokak merkezi, Seyhan.
 * Enlem/boylam kapı ölçümü değildir (haritamap.com, 36.998608 / 35.319351).
 * Posta kodu Kurtuluş Mahallesi için 01130'dur.
 */
const mapQuery =
  "Kurtuluş Mahallesi, 64009 Sokak, Atakan Apartmanı B Blok Kat 1 No 2, Seyhan, Adana, Türkiye";

export const business = {
  name: "Shining Beauty Wellness",
  legalName: "Shining Beauty Wellness",
  url: "https://shining-beauty-wellness-kurtulus.netlify.app/",
  locale: "tr-TR",
  htmlLang: "tr",
  ogLocale: "tr_TR",
  timeZone: "Europe/Istanbul",
  currency: "TRY",
  countryCode: "TR",
  regionCode: "TR-01",
  telephone: "+90 505 071 95 01",
  telephoneE164: "+905050719501",
  whatsappNumber: "905050719501",
  email: "info@shining.icu",
  priceRange: "\u20ba\u20ba",
  description:
    "Adana Seyhan Kurtuluş Mahallesi'nde lüks spa, masaj, cilt bakımı ve wellness hizmetleri. Atakan Apartmanı B Blok, 64009 Sokak.",
  geo: {
    latitude: 36.998608,
    longitude: 35.319351,
  },
  address: {
    streetAddress:
      "Kurtuluş Mahallesi, 64009 Sokak, Atakan Apartmanı B Blok Kat:1 No:2",
    postalCode: "01130",
    addressLocality: "Seyhan",
    addressRegion: "Adana",
    addressCountry: "TR",
    countryName: "Türkiye",
    lines: [
      "Kurtuluş Mahallesi, 64009 Sokak",
      "Atakan Apartmanı B Blok Kat:1 No:2",
      "01130 Seyhan/Adana, Türkiye",
    ],
  },
  mapQuery,
  maps: {
    searchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
    embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=17&hl=tr&output=embed`,
  },
  openingHours: {
    weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:00",
    closedDay: "Sunday",
  },
  socials: {
    instagramHandle: "@shining.beauty.wellness",
    instagramUrl: "https://www.instagram.com/shining.beauty.wellness",
    facebookUrl: "https://www.facebook.com/profile.php?id=61572925680179",
  },
} as const;
