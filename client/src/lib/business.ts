/**
 * Business identity is locked to Adana, Türkiye.
 * Developer OS language/timezone does not override locale or region.
 * schema.org weekday names (Monday, …) are vocabulary IRIs; do not translate.
 *
 * Address text: Kurtuluş / 64009 / Atakan Apt B Blok.
 * Map pin: lat/lng for OSM "64009. Sokak, Kurtuluş" (street centroid, not a surveyed door).
 * Do NOT pass the bare apartment address string as the Google Maps `q=` — Google resolves
 * that string to the wrong Place ("Andaç Apt", 64006. Sk). Use coordinates + business label.
 * A Google Place ID (when GBP is claimed) should replace this pin later.
 */
const streetAddress =
  "Kurtuluş Mahallesi, 64009 Sokak, Atakan Apartmanı B Blok Kat:1 No:2";

/** Street-centroid from OpenStreetMap Nominatim for 64009. Sokak, Kurtuluş (2026-10-31). */
const latitude = 36.9985456;
const longitude = 35.3190944;

const mapLabel = "Shining Beauty Wellness";

/** Human-readable location for schema / copy; not used as Google Places search text. */
const mapQuery = `${mapLabel}, ${streetAddress}, 01130 Seyhan, Adana, Türkiye`;

/** `lat,lng+(Label)` keeps the pin on 64009 and shows the business name in the embed bubble. */
const mapPinQuery = `${latitude},${longitude}+(${mapLabel})`;

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
  /** Mailbox on shining.icu is offline while the domain is expired. Prefer WhatsApp. */
  email: "",
  priceRange: "\u20ba\u20ba",
  /** Starting prices in TRY (from-price display). Confirm with salon before campaigns. */
  servicePrices: {
    massage: 800,
    skincare: 600,
    nails: 300,
    wellness: 1200,
  },
  description:
    "Adana Seyhan Kurtuluş Mahallesi'nde lüks spa, masaj, cilt bakımı ve wellness hizmetleri. Atakan Apartmanı B Blok, 64009 Sokak.",
  geo: {
    latitude,
    longitude,
  },
  address: {
    streetAddress,
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
    searchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapPinQuery)}`,
    embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(mapPinQuery)}&z=17&hl=tr&output=embed`,
  },
  image: "https://shining-beauty-wellness-kurtulus.netlify.app/og-image.jpg",
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
