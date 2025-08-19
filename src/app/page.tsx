"use client";

import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";

import LanguageToggle from "../components/LanguageToggle";
import Hero from "../components/Hero";
import WhyHere from "../components/WhyHere";
import OfferUrgency from "../components/OfferUrgency";
import PriceCharts from "../components/PriceCharts";
import RoiCalculator from "../components/RoiCalculator";
import Gallery from "../components/Gallery";
import LocationMap from "../components/LocationMap";
import Faq from "../components/Faq";
import UrgencyStrip from "../components/UrgencyStrip";
import Footer from "../components/Footer";
import LiveViewers from "../components/LiveViewers";

export default function Home() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [calculatorSection, setCalculatorSection] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setCalculatorSection(document.getElementById("roi-calculator"));
  }, []);

  const openGallery = () => setGalleryOpen(true);
  const closeGallery = () => setGalleryOpen(false);

  const scrollToCalculator = () => {
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    } else {
      const element = document.getElementById("roi-calculator");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className="container mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-12">
        <div className="flex w-full flex-col items-center space-y-10 md:space-y-14">
        {/* Language Selection */}
        <LanguageToggle />

        {/* Hero Section */}
        <Hero
          onOpenGallery={openGallery}
          onOpenCalculator={scrollToCalculator}
        />

        {/* Main Sections */}
        <WhyHere />

        <OfferUrgency />

        <PriceCharts />

        <div id="roi-calculator">
          <RoiCalculator />
        </div>

        <LocationMap />

        <Faq />

        <UrgencyStrip />

        <Footer />

        {/* Gallery Modal */}
        <Gallery isOpen={galleryOpen} onClose={closeGallery} />

        {/* Live Viewers Counter */}
        <LiveViewers />
        </div>
      </div>
    </I18nextProvider>
  );
}
