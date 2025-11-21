import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        blog: "Blog",
        contact: "Contact",
        bookNow: "Book Now",
        bookAppointment: "Book Appointment"
      },
      hero: {
        welcome: "Luxury Wellness in Adana",
        title: "Shining Beauty",
        subtitle: "& Wellness",
        description: "Experience the ultimate luxury spa treatments in Gazipaşa. Rejuvenate your body and soul with our exclusive wellness therapies.",
        bookBtn: "Book Appointment",
        servicesBtn: "View Services"
      },
      services: {
        title: "Our Services",
        subtitle: "Discover our curated selection of premium treatments designed to enhance your natural beauty and promote deep relaxation.",
        massage: {
          title: "Spa Massage",
          desc: "Traditional and modern massage therapies to relieve stress and tension."
        },
        skincare: {
          title: "Skin Care",
          desc: "Rejuvenating facials and advanced skin treatments for a glowing complexion."
        },
        nails: {
          title: "Nail Art",
          desc: "Premium manicures, pedicures, and custom nail art designs."
        },
        wellness: {
          title: "Body Wellness",
          desc: "Holistic body treatments, scrubs, and detox wraps for total renewal."
        },
        from: "From",
        details: "Details",
        viewAll: "View All Treatments"
      },
      about: {
        tag: "About Us",
        title: "A Sanctuary for Body & Soul",
        p1: "Welcome to Shining Beauty & Wellness, where luxury meets wellness. Located at Gazipaşa Rezidans in Cemalpaşa, we provide world-class spa and beauty services in a serene environment.",
        p2: "Our expert therapists combine ancient techniques with modern skincare innovations to deliver treatments that not only rejuvenate your appearance but also restore your inner balance.",
        staff: {
          title: "Expert Staff",
          desc: "Certified therapists with years of experience."
        },
        products: {
          title: "Premium Products",
          desc: "Using only the finest organic and luxury brands."
        }
      },
      instagram: {
        title: "Follow Our Journey",
        desc: "Join our community on Instagram {{link}} for daily inspiration, beauty tips, and exclusive offers.",
        viewFeed: "View Full Feed"
      },
      info: {
        hours: {
          title: "Opening Hours",
          week: "Mon - Sat: 10:00 - 20:00",
          sunday: "Sunday: Closed"
        },
        location: {
          title: "Location",
          addr1: "Gazipaşa Rezidans, Cemalpaşa",
          addr2: "Seyhan/Adana, Türkiye"
        },
        book: {
          title: "Book Online",
          whatsapp: "WhatsApp Appointment"
        }
      },
      footer: {
        desc: "A sanctuary of tranquility in the heart of Adana. Experience luxury treatments designed to rejuvenate your body and soul.",
        explore: "Explore",
        services: "Services",
        contact: "Contact Us",
        story: "Our Story",
        packages: "Packages",
        giftCards: "Gift Cards",
        rights: "All rights reserved."
      },
      floating: {
        facebook: "Visit Facebook",
        directions: "Get Directions",
        whatsapp: "Chat on WhatsApp"
      }
    }
  },
  tr: {
    translation: {
      nav: {
        home: "Anasayfa",
        services: "Hizmetler",
        about: "Hakkımızda",
        blog: "Blog",
        contact: "İletişim",
        bookNow: "Randevu Al",
        bookAppointment: "Randevu Al"
      },
      hero: {
        welcome: "Adana'da Lüks Wellness Deneyimi",
        title: "Shining Beauty",
        subtitle: "& Wellness",
        description: "Gazipaşa'da en üst düzey lüks spa deneyimini yaşayın. Özel wellness terapilerimizle bedeninizi ve ruhunuzu yenileyin.",
        bookBtn: "Randevu Oluştur",
        servicesBtn: "Hizmetleri İncele"
      },
      services: {
        title: "Hizmetlerimiz",
        subtitle: "Doğal güzelliğinizi ortaya çıkarmak ve derinlemesine rahatlama sağlamak için tasarlanmış özel bakım seçeneklerimizi keşfedin.",
        massage: {
          title: "Spa Masajı",
          desc: "Stres ve gerginliği azaltmak için geleneksel ve modern masaj terapileri."
        },
        skincare: {
          title: "Cilt Bakımı",
          desc: "Işıltılı bir cilt için yenileyici bakımlar ve gelişmiş cilt tedavileri."
        },
        nails: {
          title: "Tırnak Sanatı",
          desc: "Premium manikür, pedikür ve özel tırnak tasarım hizmetleri."
        },
        wellness: {
          title: "Vücut Wellness",
          desc: "Bütünsel vücut bakımları, peelingler ve tam yenilenme için detoks sargıları."
        },
        from: "Başlangıç",
        details: "Detaylar",
        viewAll: "Tüm Hizmetleri Gör"
      },
      about: {
        tag: "Hakkımızda",
        title: "Beden ve Ruh İçin Bir Sığınak",
        p1: "Lüksün wellness ile buluştuğu Shining Beauty & Wellness'a hoş geldiniz. Cemalpaşa Gazipaşa Rezidans'ta, huzurlu bir ortamda dünya standartlarında spa ve güzellik hizmetleri sunuyoruz.",
        p2: "Uzman terapistlerimiz, sadece görünümünüzü yenilemekle kalmayıp aynı zamanda iç dengenizi de geri kazandıran bakımlar sunmak için kadim teknikleri modern cilt bakımı yenilikleriyle birleştiriyor.",
        staff: {
          title: "Uzman Kadro",
          desc: "Yılların deneyimine sahip sertifikalı terapistler."
        },
        products: {
          title: "Premium Ürünler",
          desc: "Sadece en iyi organik ve lüks markalar kullanılır."
        }
      },
      instagram: {
        title: "Yolculuğumuzu Takip Edin",
        desc: "Günlük ilham, güzellik ipuçları ve özel teklifler için Instagram'da {{link}} topluluğumuza katılın.",
        viewFeed: "Tüm Akışı Gör"
      },
      info: {
        hours: {
          title: "Çalışma Saatleri",
          week: "Pzt - Cmt: 10:00 - 20:00",
          sunday: "Pazar: Kapalı"
        },
        location: {
          title: "Konum",
          addr1: "Gazipaşa Rezidans, Cemalpaşa",
          addr2: "Seyhan/Adana, Türkiye"
        },
        book: {
          title: "Online Randevu",
          whatsapp: "WhatsApp Randevu Hattı"
        }
      },
      footer: {
        desc: "Adana'nın kalbinde bir huzur sığınağı. Bedeninizi ve ruhunuzu yenilemek için tasarlanmış lüks bakımları deneyimleyin.",
        explore: "Keşfet",
        services: "Hizmetler",
        contact: "İletişim",
        story: "Hikayemiz",
        packages: "Paketler",
        giftCards: "Hediye Kartları",
        rights: "Tüm hakları saklıdır."
      },
      floating: {
        facebook: "Facebook'ta Ziyaret Et",
        directions: "Yol Tarifi Al",
        whatsapp: "WhatsApp'ta Sohbet Et"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
