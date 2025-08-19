import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        title: "🚨 URGENT: Vlaška Apartment at Kvaternik Across from Zagreb Bank Selling Day After Tomorrow",
        subtitle: "Sister Flying Back to Canada - Crazy Low Price Due to Rush Sale • Ground Floor Behind Hair Salon • Across from Zagrebačka Banka",
        mainContent: `# **URGENT**

## **Vlaška apartment at Kvaternik across from Zagreb Bank selling day after tomorrow**

---

### **Building permit OK - Earthquake didn't affect the building**

### **100% clean papers - of course, you're welcome to verify everything**

### **Best offer gets the most beautiful part of the city with high ceilings**

---

**Small investment needed for adaptation for premium living**

**Or just live in it as is, and fix little by little**

---

# **46.9 square meters**

---

**Energy certificate will be ready day after tomorrow**

**Crazy price because sister came from Canada to claim the apartment**

**After 40 years of protected tenant exit**

Sister is Croatian, but doesn't want to be in Croatia at all.

Going home soon.

---

# **VERY FAST SALE**

That's why low price (and because of adaptation needed).

Look, that's it.

Like I said, papers are 100% clean.

You can verify everything yourself, naturally.

---

# **CASH PREFERRED**

And naturally, everything through public notary, contracts, etc.

---

## **Make your best offer for your piece of Zagreb's most beautiful neighborhood**

---

# **Call sister Lorie - speak slowly or English**

# **Her WhatsApp: +1-204-620-4491**`,
        bookViewing: "🚨 CALL NOW: 099 343 3344",
        openGallery: "📸 See Photos", 
        calculateROI: "💰 Calculate Profit"
      },
      whyHere: {
        title: "🏆 WHY THIS IS A STEAL",
        points: [
          "💎 High ceilings you can't buy in new builds - RARE!",
          "🪵 Original hardwood floors - AUTHENTIC CHARACTER",
          "😴 Absolute quiet—ground floor, courtyard facing, can't hear tram - PEACEFUL",
          "🏠 Two rooms + kitchen + bath - ground floor behind hair salon - PERFECT LAYOUT",
          "🔧 All utilities work: gas, water, sink & shower, heating - READY TO MOVE IN",
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
      },
      liveViewers: {
        text: "people viewing now"
      }
    }
  },
  hr: {
    translation: {
      hero: {
        title: "🚨 HITNO: Vlaška na Kvaternik preko puta Zagrebačke banke baš se prodaje prekosutra",
        subtitle: "Sestra leti nazad u Kanadu - Luda cijena zbog brzine prodaje • Prizemlje iza frizerskog salona • Preko puta Zagrebačke banke",
        mainContent: `# **HITNO**

## **Vlaška na Kvaternik preko puta Zagrebačke banke baš se prodaje prekosutra**

---

### **Uporabna dozvola OK - Potres nije utjecao na zgradu**

### **100% čisti papiri - naravno, smijete sve provjeriti**

### **Najbolja ponuda dobiva najljepši dio grada s visokim stropovima**

---

**Mora se uložiti malo u adaptaciju za vrhunski život**

**Ili samo živite u njoj kako jest, i popravite malo po malo**

---

# **46,9 kvadrata**

---

**Energetski certifikat će biti gotov prekosutra**

**Luda cijena jer je sestra došla iz Kanade da preuzme stan**

**Nakon 40 godina izlaska zaštićenog najmoprimca**

Sestra je Hrvatica, ali ne želi biti u Hrvatskoj uopće.

Pa ide doma uskoro.

---

# **JAKO BRZO PRODAJA**

Zbog toga niska cijena (i zbog adaptacije).

Evo, to je to.

Kako sam rekao, papiri su 100% čisti.

Možete sve provjeriti sami, naravno.

---

# **GOTOVINA JE PREFERIRANA**

I naravno, sve s javnim bilježnikom, ugovori, itd.

---

## **Stvorite svoju najbolju cijenu za svoj dio najljepšeg kvarta u Zagrebu**

---

# **Zovite sestru Lorie - govorite sporo ili engleski**

# **Njen WhatsApp: +1-204-620-4491**`,
        bookViewing: "🚨 ZOVITE ODMAH: 099 343 3344",
        openGallery: "📸 Pogledajte Slike",
        calculateROI: "💰 Izračunajte Profit"
      },
      whyHere: {
        title: "Zašto Ova Lokacija",
        points: [
          "Visoki stropovi kakvih nema u novogradnji",
          "Originalni tvrdi drveni parket",
          "Potpuna tišina — prizemlje, orijentacija na dvorište, ne čuje se tramvaj",
          "Dvije sobe + kuhinja + kupaonica — prizemlje iza frizerskog salona",
          "Sve instalacije rade: plin, voda, sudoper i tuš, grijanje - SPREMAN ZA USELJENJE",
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
      },
      liveViewers: {
        text: "ljudi trenutno gleda"
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