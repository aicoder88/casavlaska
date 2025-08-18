import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        title: "🚨 URGENT: Prime Zagreb Apartment Must Sell THIS WEEK",
        subtitle: "Owner Flying Back to Canada - First Reasonable Cash Offer Takes It",
        mainContent: `Listen, I'll be straight with you...
My sister just inherited this apartment after 30 years of waiting. The protected tenant finally moved out, and she needs to liquidate NOW and get back to Canada.

This is NOT a drill. She's on a plane Thursday.

Here's What You're Getting:

46.16m² in the HEART of Zagreb - Vlaška 117, literally 3 minutes from Kvaternikov Square
This isn't some forgotten corner of the city. This is WHERE YOU WANT TO BE.

The Truth? It needs work.

The back room needs plastering (being fixed tomorrow). The bathroom wants updating.

But here's what smart money sees:

✓ HIGH CEILINGS that you can't get in new builds
✓ Original hardwood parquet under your feet
✓ DEAD QUIET - faces the courtyard, insulated by businesses
✓ Two separate rooms plus kitchen and bath
✓ Clear title, NO DEBT, NO PROBLEMS

Let Me Paint You a Picture...
While everyone else is fighting over overpriced "luxury" boxes in Novi Zagreb...
You're sitting in YOUR apartment in the absolute CENTER of the action.
Trams at your doorstep. Cafes around the corner. Universities, shopping, nightlife - it's all HERE.
Investors: You know what Airbnb pays for center locations? This pays for itself in 2 years.
Young Professionals: Stop throwing money at rent. This is YOUR chance.

The Uncomfortable Truth Nobody Wants to Tell You:

Apartments like this - in THIS location - don't come up.
They're passed down through families for generations. Or bought by developers who flip them for 200,000€+.
We're asking 159,900€

But my sister told me: "Just get me a reasonable offer by Thursday. I need to go HOME."
Translation? The first serious buyer with cash or fast financing WINS.

Here's What Happens Next:
Option 1: You hesitate. You "think about it." You miss this. Six months from now you're still looking, kicking yourself when you see what center apartments REALLY cost.
Option 2: You call RIGHT NOW. You see it tomorrow. You make an offer that makes sense.
By Friday, you own prime Zagreb real estate at 20-30% below market.
Which story do you want to tell?

The Clock Is Ticking

She decides THURSDAY.

That's 4 days from now.

No games. No chains. No complications.

Just a Canadian woman who needs to sell her inherited apartment and go home.

Your competition? Almost nobody - the city is empty in August.

But it only takes ONE other smart buyer to steal this from under you.

Make Your Move -
📞 Call NOW: 099 343 3344 (I'm her brother, Drago - her Croatian isn't 100%, but she is a Croatian citizen)

Or message through the platform for immediate response.

Viewings happening NOW through Wednesday only.

Say this: "I want to see the Vlaška apartment TODAY."

Bring your checkbook or proof of funds.

This isn't a negotiation that drags on for weeks. This is a THIS WEEK decision.

P.S. - I'm updating photos tomorrow after the plasterer finishes. But if you wait for pretty pictures, you've already lost. The smart money moves on information, not Instagram posts.

P.P.S. - Cash talks. But we'll work with you if you have financing ready to go. Just BE READY. Thursday is Thursday.
Final Warning: When this is gone, it's GONE. And you'll see it listed again in 6 months for 200,000€+ after someone smart does the renovation. Don't let that someone else get YOUR apartment.`,
        bookViewing: "🚨 CALL NOW: 099 343 3344",
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
        title: "🚨 HITNO: Vrhunski stan u Zagrebu mora se prodati OVAJ TJEDAN",
        subtitle: "Vlasnica leti nazad u Kanadu - Prvi razuman gotovinski ugovor dobiva stan",
        mainContent: `Slušajte, bit ću iskren s vama... Moja sestra je naslijedila ovaj stan nakon 50 godina čekanja. Zaštićeni najmodavac se konačno iselio, a ona mora ODMAH prodati i vratiti se u Kanadu. Prodaje se hitno. Sljedeći četvrtak je u avionu.

Evo što se nudi za ovu cijenu: 46m² u SRCU Zagreba - Vlaška 117, doslovno 3 minute šetnje od Kvaternikova trga. Radi se o top lokaciji u Zagrebu. LOKACIJA NA KOJOJ ŽELITE IMATI STAN.

Istina? Treba uložiti u renovaciju. Stražnja soba treba žbukanje (popravlja se sutra), kupaonica traži obnovu, ali evo što dobijete za svoj novac:

✓ VISOKI STROPOVI koje ne možete dobiti u novogradnji
✓ Originalni tvrdi drveni parket pod nogama
✓ POTPUNA TIŠINA - stan okrenut prema dvorištu, izoliran poslovnim prostorima
✓ Dvije odvojene sobe plus kuhinja i kupaonica
✓ Čista dokumentacija, vlasništvo 1/1, BEZ TERETA na nekretninu, BEZ NEPOTREBNIH PROBLEMA

Dopustite da vam predočim što dobijete za ovu nekretninu. Dok se svi ostali bore za preskupe "luksuzne" limenke u Novom Zagrebu... Sjedite u SVOM stanu u apsolutnom CENTRU grada. Tramvaji pred vratima. Kafići su iza ugla. Sveučilišta, trgovine, noćni život - sve je OVDJE. Investitori: Znate li što Airbnb plaća za centralne lokacije? Ova nekretnina se isplaćuje već unutar 2 godine. Mladi profesionalci: Prestanite bacati novac na stanarine. Ovo je VAŠA prilika.

Surova istina koju vam nitko neće reći: Stanovi poput ovog - na OVOJ lokaciji - se više ne pojavljuju. Prenose se kroz obitelji generacijama. Ili ih kupuju developeri koji ih prodaju za 300.000€+. Tražimo 159.900€ Ali moja sestra mi je rekla: "Samo mi nađi razumnu ponudu do četvrtka. Moram ići KUĆI." Prijevod? Prvi ozbiljan kupac s gotovinom ili brzim financiranjem postaje vlasnik.

Evo što se dalje događa: Opcija 1: Oklijevate. "Razmišljate o tome." Propuštate ovo. Za šest mjeseci još uvijek tražite, grizete se kada vidite koliko stanovi u centru STVARNO koštaju. Opcija 2: Zovete ODMAH. Vidite ga sutra. Dajete ponudu koja ima smisla. Do petka posjedujete vrhunsku zagrebačku nekretninu 20-30% ispod tržišne cijene. Koji ishod želite?

Vrijeme ističe Odluka u četvrtak. To je za 4 dana. Bez igara. Bez suvišnih komplikacija. Samo kanađanka koja treba prodati naslijeđeni stan i ići kući. Vaša konkurencija? Gotovo nitko - grad je prazan u kolovozu. Ali dovoljno je JEDAN pametan kupac da vam ovo ukrade ispred nosa.

Potez: 📞 Zovite ODMAH: 099 343 3344 (Ja sam brat, Drago - njezin hrvatski nije 100%, ali je hrvatica) Ili pošaljite poruku whatsapp, ili kroz platformu za trenutni odgovor.

Razgledavanje se odvija ODMAH do srijede. Recite ovo: "Želim vidjeti stan na Vlaškoj DANAS." Ovo nije pregovaranje koje se vuče tjednima. Ovo je odluka za OVAJ TJEDAN.

P.S. - Ažuriram fotografije sutra nakon što zidar završi. Ali ako čekate lijepe slike, već ste izgubili. Pametni novac se ulaže na provjerene informacije, ne na Instagram objave.

P.P.S. - Gotovina govori. Ali ćemo Vam rado prodati ako imate mogućnost drugog oblika financiranja. Samo BUDITE SPREMNI. Četvrtak je četvrtak.

Završno upozorenje: Kad ovo nestane, NESTAJE ZAUVIJEK. I vidjeti ćete to ponovno na listi za 6 mjeseci za 300.000€+ nakon što netko pametan obavi renovaciju. Nemojte dopustiti da netko drugi kupi VAŠ stan.`,
        bookViewing: "🚨 ZOVITE ODMAH: 099 343 3344",
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