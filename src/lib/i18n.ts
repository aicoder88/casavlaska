import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        title: "Prefinjen stan na Vlaškoj — Kvaternik — preko puta Zagrebačke banke",
        subtitle: "Jedinstvena prilika za stjecanje nekretnine u srcu Zagreba • Prizemlje • Preko puta Zagrebačke banke",
        mainContent: `# **Elegantan stan u srcu Zagreba**

## **Vlaška ulica, Kvaternik — preko puta Zagrebačke banke**

---

### **Zgrada u odličnom stanju — potres nije utjecao na konstrukciju**

### **Svi papiri uredni — dobrodošli ste provjeriti sve dokumenti**

### **Prilika za stjecanje nekretnine u najljepšem dijelu grada**

---

**Mogućnost lagane adaptacije za luksuzan život**

**Ili se uselite odmah i renovirajte postupno**

---

# **46,9 kvadratnih metara**

---

**Energetski certifikat u pripremi**

**Atraktivna cijena zbog brzine prodaje**

**Stan je slobodan nakon dugoročnog najma**

Vlasnica živi u Kanadi i želi završiti prodaju.

Traži pouzdanog kupca za ovaj poseban stan.

---

# **Brza prodaja**

Zbog toga je cijena pristupačna.

Svi dokumenti su pripremljeni.

Možete provjeriti sve detalje.

---

# **Prednost za gotovinsku kupnju**

Sav postupak kroz javnog bilježnika s ugovorima.

---

## **Vaša ponuda za dio najljepšeg kvarta u Zagrebu**

---

# **Kontakt: Lorie — govorite polako ili engleski**

# **WhatsApp: +1 204 620-4491**

*Ako MORATE koristiti hrvatski telefon i nemate WhatsApp, pozovite njenog brata Draga na 099 343 3344*`,
        bookViewing: "Pozovite: +1 204 620-4491",
        openGallery: "Pregledajte fotografije", 
        calculateROI: "Izračunajte povrat"
      },
      whyHere: {
        title: "Zašto je ovaj stan poseban",
        points: [
          "Visoki stropovi rijetko dostupni u novogradnji",
          "Originalni drveni podovi s autentičnim karakterom",
          "Mirna lokacija — prizemlje s pogledom na dvorište, potpuna tišina",
          "Dvije sobe + kuhinja + kupaonica — praktičan i funkcionalan raspored",
          "Sve instalacije su funkcionalne — spreman za useljenje",
          "Čisto vlasništvo (1/1) bez tereta — siguran kupnja"
        ]
      },
      offer: {
        title: "Posebna ponuda",
        urgency: "Vlasnica živi u Kanadi i želi brzu prodaju. Idealno za one koji traže kvalitetnu nekretninu u centru grada.",
        price: "Cijena: €159,900 — izvrsna vrijednost za lokaciju",
        callNow: "Pozovite za razgled",
        whatsApp: "WhatsApp kontakt"
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
      },
      common: {
        belowMarketRate: "Below market rate",
        cleanTitle: "Clean title",
        readyToClose: "Ready to close",
        decisionDeadline: "Decision Deadline: THURSDAY",
        stillHaveQuestions: "Still Have Questions?",
        getInstantAnswers: "Get instant answers about CasaVlaška. Call or message us directly.",
        callNow: "Call Now",
        whatsapp: "WhatsApp",
        whatsappNow: "WhatsApp Now",
        whatsappMessage: "WhatsApp Message",
        chat: "Chat",
        call: "Call",
        primaryContact: "Primary Contact (Canada)",
        propertySpecialist: "Property Specialist",
        callAnytime: "Call anytime",
        instantMessaging: "Instant messaging",
        emailInquiry: "Email inquiry",
        available: "Available",
        expandAll: "Expand All",
        collapseAll: "Collapse All",
        premiumRealEstate: "Premium real estate in Zagreb's historic center. Your gateway to owning a piece of Croatian heritage.",
        propertyDetails: "Property Details",
        address: "Address:",
        size: "Size:",
        rooms: "Rooms:",
        price: "Price:",
        status: "Status:",
        zagrebCroatia: "Zagreb, Croatia",
        builtWith: "Built with ❤️ for quick sales • Powered by Next.js & Glassmorphism",
        scrollToExplore: "SCROLL TO EXPLORE",
        ifMustUseCroatian: "If you MUST use Croatian phone: 099 343 3344 (Drago)",
        netYield: "Net Yield (%)",
        totalInvestment: "Total Investment",
        annualNetIncome: "Annual Net Income",
        netYieldPercent: "Net Yield",
        paybackPeriod: "Payback Period",
        generatedBy: "Generated by CasaVlaška Calculator. For informational purposes only.",
        zagrebCenterAvg: "Zagreb Center Average",
        zagrebCenterAverage: "Zagreb Center Avg",
        failedToLoadPriceData: "Failed to load price data",
        livingRoomAlt: "Living room with high ceilings",
        kitchenAlt: "Modern renovated kitchen",
        bedroomAlt: "Bedroom with courtyard view",
        bathroomAlt: "Modern renovated bathroom",
        exteriorAlt: "Historic building exterior",
        courtyardAlt: "Peaceful inner courtyard",
        closeGallery: "Close gallery",
        previousImage: "Previous image",
        nextImage: "Next image",
        closeLightbox: "Close lightbox",
        viewOnGoogleMaps: "View on Google Maps",
        sendEmail: "Send email"
      }
    }
  },
  hr: {
    translation: {
      hero: {
        title: "Prefinjen stan na Vlaškoj — Kvaternik — preko puta Zagrebačke banke",
        subtitle: "Jedinstvena prilika za stjecanje nekretnine u srcu Zagreba • Prizemlje • Preko puta Zagrebačke banke",
        mainContent: `# **Elegantan stan u srcu Zagreba**

## **Vlaška ulica, Kvaternik — preko puta Zagrebačke banke**

---

### **Zgrada u odličnom stanju — potres nije utjecao na konstrukciju**

### **Svi papiri uredni — dobrodošli ste provjeriti sve dokumente**

### **Prilika za stjecanje nekretnine u najljepšem dijelu grada**

---

**Mogućnost lagane adaptacije za luksuzan život**

**Ili se uselite odmah i renovirajte postupno**

---

# **46,9 kvadratnih metara**

---

**Energetski certifikat u pripremi**

**Atraktivna cijena zbog brzine prodaje**

**Stan je slobodan nakon dugoročnog najma**

Vlasnica živi u Kanadi i želi završiti prodaju.

Traži pouzdanog kupca za ovaj poseban stan.

---

# **Brza prodaja**

Zbog toga je cijena pristupačna.

Svi dokumenti su pripremljeni.

Možete provjeriti sve detalje.

---

# **Prednost za gotovinsku kupnju**

Sav postupak kroz javnog bilježnika s ugovorima.

---

## **Vaša ponuda za dio najljepšeg kvarta u Zagrebu**

---

# **Kontakt: Lorie — govorite polako ili engleski**

# **WhatsApp: +1 204 620-4491**

*Ako MORATE koristiti hrvatski telefon i nemate WhatsApp, pozovite njenog brata Draga na 099 343 3344*`,
        bookViewing: "Pozovite: +1 204 620-4491",
        openGallery: "Pregledajte fotografije",
        calculateROI: "Izračunajte povrat"
      },
      whyHere: {
        title: "Zašto je ovaj stan poseban",
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
        title: "Posebna ponuda",
        urgency: "Vlasnica živi u Kanadi i želi brzu prodaju. Idealno za one koji traže kvalitetnu nekretninu u centru grada.",
        price: "Cijena: €159,900 — izvrsna vrijednost za lokaciju",
        callNow: "Pozovite za razgled",
        whatsApp: "WhatsApp kontakt"
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
      },
      common: {
        belowMarketRate: "Ispod tržišne cijene",
        cleanTitle: "Čisto vlasništvo",
        readyToClose: "Spreman za zatvaranje",
        decisionDeadline: "Rok za odluku: ČETVRTAK",
        stillHaveQuestions: "Još uvijek imate pitanja?",
        getInstantAnswers: "Dobijte brze odgovore o CasaVlaška. Pozovite ili pošaljite poruku direktno.",
        callNow: "Pozovite sada",
        whatsapp: "WhatsApp",
        whatsappNow: "WhatsApp odmah",
        whatsappMessage: "WhatsApp poruka",
        chat: "Chat",
        call: "Pozovi",
        primaryContact: "Glavni kontakt (Kanada)",
        propertySpecialist: "Specijalist nekretnina",
        callAnytime: "Pozovite bilo kada",
        instantMessaging: "Instant poruke",
        emailInquiry: "Email upit",
        available: "Dostupno",
        expandAll: "Proširi sve",
        collapseAll: "Smanji sve",
        premiumRealEstate: "Premium nekretnine u povijesnom centru Zagreba. Vaš pristup vlasništvu dijela hrvatske baštine.",
        propertyDetails: "Detalji nekretnine",
        address: "Adresa:",
        size: "Veličina:",
        rooms: "Sobe:",
        price: "Cijena:",
        status: "Status:",
        zagrebCroatia: "Zagreb, Hrvatska",
        builtWith: "Napravljeno s ❤️ za brzu prodaju • Pokretano Next.js & Glassmorphism",
        scrollToExplore: "SKROLAJTE ZA ISTRAŽIVANJE",
        ifMustUseCroatian: "Ako MORATE koristiti hrvatski telefon: 099 343 3344 (Drago)",
        netYield: "Neto prinos (%)",
        totalInvestment: "Ukupna investicija",
        annualNetIncome: "Godišnji neto prihod",
        netYieldPercent: "Neto prinos",
        paybackPeriod: "Povratno razdoblje",
        generatedBy: "Generirano od CasaVlaška Kalkulatora. Samo u informativne svrhe.",
        zagrebCenterAvg: "Zagreb centar prosjek",
        zagrebCenterAverage: "Zagreb centar prosj.",
        failedToLoadPriceData: "Neuspješno učitavanje podataka o cijenama",
        livingRoomAlt: "Dnevna soba s visokim stropovima",
        kitchenAlt: "Moderna renovirana kuhinja",
        bedroomAlt: "Spavaća soba s pogledom na dvorište",
        bathroomAlt: "Moderna renovirana kupaonica",
        exteriorAlt: "Povijesna vanjština zgrade",
        courtyardAlt: "Mirno unutrašnje dvorište",
        closeGallery: "Zatvorite galeriju",
        previousImage: "Prethodna slika",
        nextImage: "Sljedeća slika",
        closeLightbox: "Zatvorite lightbox",
        viewOnGoogleMaps: "Pogledajte na Google Maps",
        sendEmail: "Pošaljite email"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'hr',
    lng: 'hr',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;