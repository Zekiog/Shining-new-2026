import { useEffect } from "react";
import { business } from "@/lib/business";

export function LocalBusinessSchema() {
  useEffect(() => {
    const sameAs = [
      business.socials.instagramUrl,
      business.socials.facebookUrl,
      `https://wa.me/${business.whatsappNumber}`,
    ].filter(Boolean);

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
      paymentAccepted: "Cash, Credit Card",
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
      openingHoursSpecification: business.openingHours.weekdays.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}`,
        opens: business.openingHours.opens,
        closes: business.openingHours.closes,
      })),
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
        name: "Beauty and Spa Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Spa Massage",
              description: "Traditional and modern massage therapies to relieve stress and tension.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Skin Care",
              description: "Rejuvenating facials and advanced skin treatments for a glowing complexion.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Manicure & Pedicure",
              description: "Premium manicures, pedicures, and custom nail art.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Body Wellness",
              description: "Holistic body treatments, peels, and detox wraps.",
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
