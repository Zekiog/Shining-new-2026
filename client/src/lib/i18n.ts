import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/** Ziyaretçi dili çerezi. Tarayıcı veya işletim sistemi dili okunmaz. */
const LOCALE_COOKIE = "shining_dil";

function applyDocumentLocale(language: string) {
  if (typeof document === "undefined") return;
  const english = language.toLowerCase().startsWith("en");
  document.documentElement.lang = english ? "en" : "tr";
  document.documentElement.dir = "ltr";
}

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        blog: "Blog",
        contact: "Contact",
        instagram: "Instagram",
        bookNow: "Book Now",
        bookAppointment: "Book Appointment"
      },
      hero: {
        welcome: "Luxury Wellness in Adana",
        title: "Shining Beauty",
        subtitle: "& Wellness",
        description: "Experience luxury spa treatments in Kurtuluş, Seyhan. Rejuvenate your body and soul with our exclusive wellness therapies.",
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
        p1: "Welcome to Shining Beauty & Wellness, where luxury meets wellness. In Kurtuluş, Seyhan, at Atakan Apartmanı on 64009 Sokak, we provide spa and beauty services in a calm setting.",
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
        title: "Atelier atmosphere",
        desc: "A curated gallery of our spa mood — open Instagram for the live profile.",
        viewFeed: "Open Instagram"
      },
      gallery: {
        spa: "Luxury spa treatment room",
        nails: "Nail art service",
        facial: "Facial skincare treatment",
        aroma: "Aromatherapy products",
        body: "Body care treatment",
        massage: "Massage therapy"
      },
      info: {
        hours: {
          title: "Opening Hours",
          week: "Mon - Sat: 10:00 - 20:00",
          sunday: "Sunday: Closed"
        },
        location: {
          title: "Location",
          addr1: "Kurtuluş Mahallesi, 64009 Sokak",
          addr2: "Atakan Apartmanı B Blok Kat:1 No:2, 01130 Seyhan/Adana",
          openMaps: "Open in Google Maps"
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
      },
      contactForm: {
        title: "Book via WhatsApp",
        subtitle: "Fill in the form below. We'll open WhatsApp with your details pre-filled so you just hit Send.",
        name: "Name",
        namePlaceholder: "Your full name",
        phone: "Phone",
        service: "Service",
        preferredTime: "Preferred date & time",
        preferredTimePlaceholder: "e.g. Tuesday 16:00",
        note: "Notes (optional)",
        notePlaceholder: "Allergies, preferences, therapist requests...",
        consent: "I agree that my information will be shared via WhatsApp to handle this appointment request.",
        consentRequired: "Please accept the consent checkbox to continue.",
        requiredFields: "Name and phone are required.",
        submitting: "Opening WhatsApp...",
        submit: "Send booking request via WhatsApp",
        services: {
          general: "General appointment request",
          massage: "Massage",
          skin: "Skin care",
          nails: "Nail care",
          wellness: "Wellness"
        }
      },
      cookieBanner: {
        title: "Cookies & analytics",
        description: "We use cookies only after you consent. Analytics cookies help us understand which treatments people search for so we can improve the site. You can change this any time.",
        customize: "Customize",
        customizeLegend: "Cookie categories",
        savePreferences: "Save preferences",
        reject: "Reject all",
        accept: "Accept all",
        settings: "Privacy preferences",
        analyticsLabel: "Analytics",
        analyticsHint: "Anonymous usage data via Google Analytics (page views, WhatsApp button clicks).",
        marketingLabel: "Marketing",
        marketingHint: "Personalized ads and remarketing via Google Ads."
      },
      reviews: {
        eyebrow: "Atelier notes",
        title: "What we hear in the salon",
        subtitle: "Illustrative notes about our treatments — not a live Google review feed. Search Google for public guest reviews.",
        illustrative: "Illustrative note",
        readAll: "Search Google reviews",
        contactTitle: "Contact us",
        contactSubtitle: "For questions or an appointment request, please fill in the form.",
        mapTitle: "Shining Beauty Wellness location, Kurtuluş, Seyhan",
        merve: {
          text: "The head spa was incredible. The scented oils and massage techniques cleared both my mind and my spirit. I definitely recommend it.",
          service: "Head spa"
        },
        elif: {
          text: "I was very pleased with the G5 massage and lymphatic drainage. The atmosphere is calm and the staff are professional.",
          service: "Body treatment"
        },
        ayse: {
          text: "I come for laser hair removal and carbon peeling. The results are excellent, and the hygiene and attention are outstanding.",
          service: "Skin care"
        }
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
        instagram: "Instagram",
        bookNow: "Randevu Al",
        bookAppointment: "Randevu Al"
      },
      hero: {
        welcome: "Adana'da Lüks Wellness Deneyimi",
        title: "Shining Beauty",
        subtitle: "& Wellness",
        description: "Kurtuluş, Seyhan'da en üst düzey lüks spa deneyimini yaşayın. Özel wellness terapilerimizle bedeninizi ve ruhunuzu yenileyin.",
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
        p1: "Lüksün wellness ile buluştuğu Shining Beauty & Wellness'a hoş geldiniz. Seyhan Kurtuluş Mahallesi'nde, 64009 Sokak'taki Atakan Apartmanı'nda spa ve güzellik hizmeti sunuyoruz.",
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
        title: "Atölye atmosferi",
        desc: "Salonumuzun ruhunu yansıtan seçilmiş görseller — canlı profil için Instagram’ı açın.",
        viewFeed: "Instagram’ı Aç"
      },
      gallery: {
        spa: "Lüks spa tedavi odası",
        nails: "Tırnak sanatı hizmeti",
        facial: "Yüz bakımı",
        aroma: "Aromaterapi ürünleri",
        body: "Vücut bakımı",
        massage: "Masaj terapisi"
      },
      info: {
        hours: {
          title: "Çalışma Saatleri",
          week: "Pzt - Cmt: 10:00 - 20:00",
          sunday: "Pazar: Kapalı"
        },
        location: {
          title: "Konum",
          addr1: "Kurtuluş Mahallesi, 64009 Sokak",
          addr2: "Atakan Apartmanı B Blok Kat:1 No:2, 01130 Seyhan/Adana",
          openMaps: "Google Haritalar’da aç"
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
      },
      contactForm: {
        title: "WhatsApp'tan Randevu Talebi",
        subtitle: "Aşağıdaki formu doldurun; bilgileriniz WhatsApp'a hazır mesaj olarak gönderilecek, siz sadece Gönder'e basacaksınız.",
        name: "Ad Soyad",
        namePlaceholder: "Adınız ve soyadınız",
        phone: "Telefon",
        service: "Hizmet",
        preferredTime: "Tercih edilen tarih ve saat",
        preferredTimePlaceholder: "örn. Salı 16:00",
        note: "Not (opsiyonel)",
        notePlaceholder: "Alerjiler, tercihler, terapist isteği...",
        consent: "Bilgilerimin randevu talebim için WhatsApp üzerinden paylaşılmasını kabul ediyorum.",
        consentRequired: "Devam etmek için onay kutusunu işaretleyin.",
        requiredFields: "Ad ve telefon zorunludur.",
        submitting: "WhatsApp açılıyor...",
        submit: "WhatsApp'tan Randevu Talebi Oluştur",
        services: {
          general: "Genel randevu talebi",
          massage: "Masaj",
          skin: "Cilt bakımı",
          nails: "Tırnak bakımı",
          wellness: "Wellness"
        }
      },
      cookieBanner: {
        title: "Çerezler ve analitik",
        description: "Çerezleri yalnızca sizin onayınızla kullanıyoruz. Analitik çerezleri ziyaretçilerin hangi hizmetleri aradığını anlamamıza ve siteyi iyileştirmemize yardımcı olur. Bu kararı istediğiniz zaman değiştirebilirsiniz.",
        customize: "Özelleştir",
        customizeLegend: "Çerez kategorileri",
        savePreferences: "Tercihleri kaydet",
        reject: "Tümünü reddet",
        accept: "Tümünü kabul et",
        settings: "Gizlilik tercihleri",
        analyticsLabel: "Analitik",
        analyticsHint: "Google Analytics üzerinden anonim kullanım verileri (sayfa görüntüleme, WhatsApp buton tıklamaları).",
        marketingLabel: "Pazarlama",
        marketingHint: "Google Ads üzerinden kişiselleştirilmiş reklamlar ve yeniden pazarlama."
      },
      reviews: {
        eyebrow: "Atölye notları",
        title: "Salonda duyduklarımız",
        subtitle: "Hizmetlerimize dair örnek notlar — canlı Google yorum akışı değildir. Kamuya açık yorumlar için Google’da arayın.",
        illustrative: "Örnek not",
        readAll: "Google’da yorum ara",
        contactTitle: "Bize Ulaşın",
        contactSubtitle: "Sorularınız veya randevu talebiniz için lütfen iletişim formunu doldurunuz.",
        mapTitle: "Shining Beauty Wellness konumu, Kurtuluş, Seyhan",
        merve: {
          text: "Head spa deneyimi inanılmazdı! Kokulu yağlar ve masaj teknikleriyle hem zihnim hem de ruhum arındı. Kesinlikle tavsiye ediyorum.",
          service: "Head Spa"
        },
        elif: {
          text: "G5 masajı ve lenf drenaj hizmetlerinden çok memnun kaldım. Atmosfer çok huzurlu ve çalışanlar çok profesyonel.",
          service: "Vücut Bakımı"
        },
        ayse: {
          text: "Lazer epilasyon ve karbon peeling işlemleri için geliyorum. Sonuçlar harika, hijyen ve ilgi çok üst düzeyde.",
          service: "Cilt Bakımı"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "tr",
    supportedLngs: ["tr", "en"],
    nonExplicitSupportedLngs: false,
    load: "languageOnly",
    detection: {
      // navigator yok: Norveç'teki bir makine nb/no veya en dayatamaz.
      // Sıra: açık ?lang=, sonra ziyaretçi çerezi, sonra <html lang="tr">.
      order: ["querystring", "cookie", "htmlTag"],
      lookupQuerystring: "lang",
      lookupCookie: LOCALE_COOKIE,
      caches: ["cookie"],
      cookieMinutes: 60 * 24 * 365,
    },
    interpolation: {
      escapeValue: false,
    },
  });

applyDocumentLocale(i18n.resolvedLanguage ?? "tr");
i18n.on("languageChanged", applyDocumentLocale);

export default i18n;
