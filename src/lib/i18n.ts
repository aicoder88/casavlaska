import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        title: "🔥 STEAL THIS DEAL! CasaVlaška — Vlaška 117",
        subtitle: "46m² UNRENOVATED BARGAIN! High ceilings, original character. 3 min to Kvaternik. OTHERS SELLING FOR €4,000-5,000/m²!",
        bookViewing: "🚨 GRAB THIS DEAL NOW",
        openGallery: "📸 See Photos", 
        calculateROI: "💰 Calculate Profit"
      },
      whyHere: {
        title: "🏆 WHY THIS IS A STEAL",
        points: [
          "💎 High ceilings you can't buy in new builds - RARE!",
          "🪵 Original hardwood floors - AUTHENTIC CHARACTER",
          "😴 Absolute quiet—courtyard facing - PEACEFUL",
          "🏠 Two rooms + kitchen + bath - PERFECT LAYOUT", 
          "📋 Clean title (1/1), no encumbrances - READY TO BUY"
        ]
      },
      offer: {
        title: "🚨 URGENT SALE",
        urgency: "🇨🇦 Seller flying back to Canada! DECISION BY THURSDAY! Cash or fast financing gets this STEAL!",
        price: "💰 ONLY €159,900 — SAVE €60,000+ vs similar properties!",
        callNow: "📞 CALL NOW",
        whatsApp: "💬 WhatsApp"
      },
      priceContext: {
        title: "💎 INCREDIBLE VALUE COMPARISON",
        cityTrend: "📈 Zagreb Center Price Trend",
        comparison: "🏆 Kvaternik / Vlaška vs City Average", 
        compsTitle: "🔥 THIS LISTING IS €60,000+ BELOW MARKET! GRAB IT NOW!"
      },
      calculator: {
        title: "ROI / Profit Calculator",
        purchasePrice: "Purchase Price (€)",
        renovationBudget: "Renovation Budget (€)",
        holdingCosts: "Holding/Closing Costs (%)",
        strategy: "Strategy",
        airbnb: "Airbnb",
        longTerm: "Long-Term Rent",
        nightlyRate: "Nightly Rate (€)",
        occupancy: "Occupancy (%)",
        cleaningCost: "Cleaning cost per stay (€)",
        platformFee: "Platform fee (%)",
        monthlyRent: "Monthly Rent (€)",
        vacancy: "Vacancy (%)",
        totalCost: "Total All-In Cost",
        grossYield: "Gross Yield (%)",
        netYield: "Net Yield (%)",
        cashOnCash: "Cash-on-Cash (%)",
        payback: "Payback (years)",
        getRoiPdf: "Get ROI PDF"
      },
      gallery: {
        title: "Gallery"
      },
      location: {
        title: "Location",
        walkingTimes: "Walking Times",
        kvaternik: "Kvaternik Square: 3 min",
        tram: "Tram Stop: 2 min",
        cafes: "Cafes & Restaurants: 1 min",
        university: "University: 15 min",
        nightlife: "Nightlife: 5 min"
      },
      urgencyStrip: {
        text: "Showings: today through Wednesday. Say: 'I want to see Vlaška 117 today.'"
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "What's included in the sale?",
            answer: "The apartment comes furnished with original hardwood floors, renovated kitchen and bathroom, and all fixtures. Clean title 1/1 with no encumbrances."
          },
          {
            question: "What renovation work is needed?",
            answer: "The apartment is move-in ready. Optional cosmetic updates could include fresh paint and modern lighting fixtures."
          },
          {
            question: "How quickly can we close?",
            answer: "With cash or pre-approved financing, we can close within 30 days. All paperwork is ready for immediate transfer."
          },
          {
            question: "What are the monthly costs?",
            answer: "Monthly maintenance fees are approximately €50. Property taxes are included in the asking price calculation."
          }
        ]
      },
      footer: {
        contact: "Contact",
        name: "Drago",
        disclaimer: "Information deemed reliable; buyer to verify."
      }
    }
  },
  hr: {
    translation: {
      hero: {
        title: "🔥 UKRADITE OVAJ POSAO! CasaVlaška — Vlaška 117",
        subtitle: "46m² NERENOVIRANA POGODNOST! Visoki stropovi, originalni karakter. 3 min do Kvaternikovog. OSTALI PRODAJU ZA €4,000-5,000/m²!",
        bookViewing: "🚨 ZGRABITE OVAJ POSAO SADA",
        openGallery: "📸 Pogledajte Slike",
        calculateROI: "💰 Izračunajte Profit"
      },
      whyHere: {
        title: "Zašto Ova Lokacija",
        points: [
          "Visoki stropovi kakvih nema u novogradnji",
          "Originalni tvrdi drveni parket",
          "Potpuna tišina — orijentacija na dvorište",
          "Dvije sobe + kuhinja + kupaonica",
          "Čisto vlasništvo 1/1, bez tereta"
        ]
      },
      offer: {
        title: "Ponuda",
        urgency: "Prodaja hitna. Odluka u četvrtak. Gotovina ili brzo financiranje.",
        price: "Tražimo 159.900 € — ili najbolju ponudu do četvrtka.",
        callNow: "Pozovi Sada",
        whatsApp: "WhatsApp"
      },
      priceContext: {
        title: "Kontekst Cijene",
        cityTrend: "Trend Cijena Zagreb Centar",
        comparison: "Kvaternik / Vlaška vs Prosjek Grada",
        compsTitle: "Ovaj stan je cijenom postavljen za brzu prodaju."
      },
      calculator: {
        title: "ROI / Kalkulator Profita",
        purchasePrice: "Kupovna Cijena (€)",
        renovationBudget: "Budžet za Renovaciju (€)",
        holdingCosts: "Troškovi Držanja/Zatvaranja (%)",
        strategy: "Strategija",
        airbnb: "Airbnb",
        longTerm: "Dugoročni Najam",
        nightlyRate: "Noćna Cijena (€)",
        occupancy: "Popunjenost (%)",
        cleaningCost: "Trošak čišćenja po boravku (€)",
        platformFee: "Naknada platforme (%)",
        monthlyRent: "Mjesečna Najamnina (€)",
        vacancy: "Prazan Stanje (%)",
        totalCost: "Ukupni Trošak",
        grossYield: "Bruto Prinos (%)",
        netYield: "Neto Prinos (%)",
        cashOnCash: "Gotovina na Gotovinу (%)",
        payback: "Povrat (godine)",
        getRoiPdf: "Preuzmi ROI PDF"
      },
      gallery: {
        title: "Galerija"
      },
      location: {
        title: "Lokacija",
        walkingTimes: "Vremena Hodanja",
        kvaternik: "Kvaternikov Trg: 3 min",
        tram: "Tramvajska Stanica: 2 min",
        cafes: "Kafići i Restorani: 1 min",
        university: "Univerzitet: 15 min",
        nightlife: "Noćni Život: 5 min"
      },
      urgencyStrip: {
        text: "Razgledavanja: odmah do srijede. Recite: 'Želim vidjeti Vlašku 117 danas.'"
      },
      faq: {
        title: "Često Postavljana Pitanja",
        questions: [
          {
            question: "Što je uključeno u prodaju?",
            answer: "Stan dolazi namješten s originalnim drvenim podovima, renoviranom kuhinjom i kupaonicom, te svim uređajima. Čisto vlasništvo 1/1 bez tereta."
          },
          {
            question: "Koji renovacijski radovi su potrebni?",
            answer: "Stan je spreman za useljenje. Opcionalna kozmetička poboljšanja mogu uključivati novo bojanje i moderne svjetiljke."
          },
          {
            question: "Koliko brzo možemo zatvoriti prodaju?",
            answer: "S gotovinom ili odobrenim financiranjem, možemo zatvoriti u roku od 30 dana. Sva dokumentacija je spremna za trenutni transfer."
          },
          {
            question: "Koji su mjesečni troškovi?",
            answer: "Mjesečne troškove održavanja su otprilike 50 €. Porezi na nekretnine su uključeni u kalkulaciju tražene cijene."
          }
        ]
      },
      footer: {
        contact: "Kontakt",
        name: "Drago",
        disclaimer: "Informacije smatrane pouzdanima; kupac treba provjeriti."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;