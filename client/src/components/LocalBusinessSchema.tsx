/**
 * LocalBusinessSchema.tsx
 * Google Rich Results + Yandex Structured Data için
 * BeautySalon + HealthAndBeautyBusiness JSON-LD
 *
 * Kullanım: <LocalBusinessSchema /> bileşenini App.tsx veya Layout içine ekleyin
 */
import { Helmet } from 'react-helmet-async';

const schema = {
  '@context': 'https://schema.org',
  '@type': ['BeautySalon', 'HealthAndBeautyBusiness', 'LocalBusiness'],
  '@id': 'https://shining.icu/#business',
  name: 'Shining Beauty & Wellness',
  alternateName: ['Shining Beauty Wellness', 'Shining Güzellik Merkezi'],
  description:
    'Adana Seyhan Gazipaşa Rezidans\'ta lüks spa, masaj, cilt bakımı, manikür ve pedikür hizmetleri sunan profesyonel güzellik ve wellness merkezi.',
  url: 'https://shining.icu',
  telephone: '+905050719501',
  email: 'info@shining.icu',
  foundingDate: '2023',
  currenciesAccepted: 'TRY',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  priceRange: '₺₺',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gazipaşa Rezidans, Cemalpaşa, 60003 Sk Asmakat No:3',
    addressLocality: 'Seyhan',
    addressRegion: 'Adana',
    postalCode: '01120',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.0053,
    longitude: 35.3213,
  },
  hasMap: 'https://maps.google.com/?q=Shining+Beauty+Wellness+Adana',
  areaServed: [
    { '@type': 'City', name: 'Adana' },
    { '@type': 'AdministrativeArea', name: 'Seyhan' },
    { '@type': 'AdministrativeArea', name: 'Çukurova' },
    { '@type': 'AdministrativeArea', name: 'Yüreğir' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '11:00',
      closes: '17:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+905050719501',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
      contactOption: 'TollFree',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+905050719501',
      contactType: 'reservations',
      availableLanguage: ['Turkish'],
    },
  ],
  sameAs: [
    'https://www.instagram.com/shiningbeautywellness',
    'https://wa.me/905050719501',
  ],
  image: [
    'https://shining.icu/og-image.jpg',
  ],
  logo: {
    '@type': 'ImageObject',
    url: 'https://shining.icu/favicon.png',
    width: 32,
    height: 32,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Güzellik ve Wellness Hizmetleri',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lüks Spa ve Masaj',
          description: 'İsveç masajı, aromaterapi, derin doku masajı ve özel spa paketleri.',
          provider: { '@id': 'https://shining.icu/#business' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Profesyonel Cilt Bakımı',
          description: 'Anti-aging, nemlendirme, peeling ve kişiye özel cilt tedavileri.',
          provider: { '@id': 'https://shining.icu/#business' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Manikür ve Pedikür',
          description: 'Klasik, Fransız ve jel manikür; SPA pedikür hizmetleri.',
          provider: { '@id': 'https://shining.icu/#business' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vücut Bakımı ve Epilasyon',
          description: 'Vücut paketleri, lazer epilasyon alternatifi, ağda ve ipek ışık uygulamaları.',
          provider: { '@id': 'https://shining.icu/#business' },
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};

export function LocalBusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 0)}
      </script>
    </Helmet>
  );
}

export default LocalBusinessSchema;
