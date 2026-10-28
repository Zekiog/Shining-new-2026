import { useEffect } from "react";
import { business } from "@/lib/business";

export function LocalBusinessSchema() {
  useEffect(() => {
    const sameAs = [
      business.socials.instagramUrl,
      business.socials.facebookUrl,
      `https://wa.me/${business.whatsappNumber}`,
    ].filter(Boolean);

    const openHours = business.openingHours.weekdays.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day}`,
      opens: business.openingHours.opens,
      closes: business.openingHours.closes,
    }));

    const closedSunday = {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${business.openingHours.closedDay}`,
      opens: "00:00",
      closes: "00:00",
    };

    const schema = {
      "@context": "https://schema.org",
      "@type": ["BeautySalon", "HealthAndBeautyBusiness", "LocalBusiness"],
      "@id": `${business.url}#business`,
      name: business.name,
      legalName: business.legalName,
      url: business.url,
      image: business.image,
      telephone: business.telephone,
      priceRange: business.priceRange,
      currenciesAccepted: business.currency,
      paymentAccepted: "Nakit, Kredi Kartı",
      inLanguage: [business.locale, "en"],
      description: business.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.streetAddress,
        postalCode: business.address.postalCode,
        addressLocality: business.address.addressLocality,
        addressRegion: business.address.addressRegion,
        addressCountry: business.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      hasMap: business.maps.searchUrl,
      openingHoursSpecification: [...openHours, closedSunday],
      sameAs,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: business.telephone,
        contactType: "customer service",
        availableLanguage: [business.locale, "en"],
        areaServed: [
          { "@type": "City", name: "Adana" },
          { "@type": "Country", name: "Türkiye" },
        ],
      },
      areaServed: [
        { "@type": "City", name: "Adana" },
        { "@type": "AdministrativeArea", name: "Adana", identifier: business.regionCode },
        { "@type": "Country", name: "Türkiye" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Güzellik ve Spa Hizmetleri",
        itemListElement: [
          {
            "@type": "Offer",
            priceCurrency: business.currency,
            price: String(business.servicePrices.massage),
            itemOffered: {
              "@type": "Service",
              name: "Spa Masajı",
              description:
                "Stres ve gerginliği azaltmak için geleneksel ve modern masaj terapileri.",
            },
          },
          {
            "@type": "Offer",
            priceCurrency: business.currency,
            price: String(business.servicePrices.skincare),
            itemOffered: {
              "@type": "Service",
              name: "Cilt Bakımı",
              description:
                "Işıltılı bir cilt için yenileyici bakımlar ve gelişmiş cilt tedavileri.",
            },
          },
          {
            "@type": "Offer",
            priceCurrency: business.currency,
            price: String(business.servicePrices.nails),
            itemOffered: {
              "@type": "Service",
              name: "Manikür ve Pedikür",
              description: "Premium manikür, pedikür ve özel tırnak tasarımı.",
            },
          },
          {
            "@type": "Offer",
            priceCurrency: business.currency,
            price: String(business.servicePrices.wellness),
            itemOffered: {
              "@type": "Service",
              name: "Vücut Wellness",
              description: "Bütünsel vücut bakımları, peelingler ve detoks sargıları.",
            },
          },
        ],
      },
    };

    if (business.email) {
      Object.assign(schema, { email: business.email });
    }

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
