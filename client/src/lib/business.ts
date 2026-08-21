export const business = {
  name: "Shining Beauty Wellness",
  legalName: "Shining Beauty Wellness",
  url: "https://shining.icu/",
  telephone: "+90 505 071 95 01",
  telephoneE164: "+905050719501",
  priceRange: "₺₺",
  address: {
    streetAddress: "Gazipasa Rezidans, Cemalpaşa, 60003 Sk Asmakat No:3",
    postalCode: "01120",
    addressLocality: "Seyhan",
    addressRegion: "Adana",
    addressCountry: "TR",
  },
  openingHours: {
    weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
    closedDay: "Sunday",
  },
  /**
   * Verified social profile handles. Single source of truth — update
   * here when the business changes a username, not in every section.
   */
  socials: {
    instagramHandle: "@shining.beauty.wellness",
    instagramUrl: "https://www.instagram.com/shining.beauty.wellness",
  },
} as const;
