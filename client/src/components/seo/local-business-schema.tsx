import { business } from "@/lib/business";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "LocalBusiness"],
    "@id": `${business.url}#business`,
    name: business.name,
    url: business.url,
    telephone: business.telephoneE164,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      ...business.address,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: business.openingHours.weekdays,
        opens: business.openingHours.opens,
        closes: business.openingHours.closes,
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
