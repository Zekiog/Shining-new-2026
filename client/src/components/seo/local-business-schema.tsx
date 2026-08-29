import { useEffect } from "react";
import { business } from "@/lib/business";

export function LocalBusinessSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": ["BeautySalon", "HealthAndBeautyBusiness", "LocalBusiness"],
      "@id": `${business.url}#business`,
      name: business.name,
      legalName: business.legalName,
      url: business.url,
      telephone: business.telephone,
      priceRange: business.priceRange,
      currenciesAccepted: "TRY",
      paymentAccepted: "Cash, Credit Card",
      inLanguage: "tr-TR",
      description: "Adana Seyhan'da lüks spa, masaj, cilt bakımı ve wellness hizmetleri. Gazipaşa Rezidans'ta profesyonel güzellik deneyimi.",
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.streetAddress,
        postalCode: business.address.postalCode,
        addressLocality: business.address.addressLocality,
        addressRegion: business.address.addressRegion,
        addressCountry: business.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      hasMap: `https://maps.google.com/?q=${business.geo.latitude},${business.geo.longitude}`,
      openingHoursSpecification: business.openingHours.weekdays.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}`,
        opens: business.openingHours.opens,
        closes: business.openingHours.closes,
      })),
      sameAs: [
        business.socials.instagramUrl,
        `https://wa.me/${business.whatsappNumber}`,
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: business.telephone,
        contactType: "customer service",
        availableLanguage: ["Turkish", "tr"],
        areaServed: { "@type": "City", name: "Adana" },
      },
      areaServed: { "@type": "City", name: "Adana" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Güzellik ve Spa Hizmetleri",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spa Masajı", description: "Stres ve gerginliği azaltmak için geleneksel ve modern masaj terapileri." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cilt Bakımı", description: "Işıltılı bir cilt için yenileyici bakımlar ve gelişmiş cilt tedavileri." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manikür & Pedikür", description: "Premium manikür, pedikür ve özel tırnak tasarım hizmetleri." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vücut Wellness", description: "Bütünsel vücut bakımları, peelingler ve detoks sargıları." } },
        ],
      },
    };
    const id = "local-business-schema";
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
  }, []);
  return null;
}
