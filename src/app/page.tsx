'use client';

import { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';

import LanguageToggle from '../components/LanguageToggle';
import Hero from '../components/Hero';
import WhyHere from '../components/WhyHere';
import OfferUrgency from '../components/OfferUrgency';
import PriceCharts from '../components/PriceCharts';
import RoiCalculator from '../components/RoiCalculator';
import Gallery from '../components/Gallery';
import LocationMap from '../components/LocationMap';
import Faq from '../components/Faq';
import UrgencyStrip from '../components/UrgencyStrip';
import Footer from '../components/Footer';

export default function Home() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [calculatorSection, setCalculatorSection] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setCalculatorSection(document.getElementById('roi-calculator'));
  }, []);

  const openGallery = () => setGalleryOpen(true);
  const closeGallery = () => setGalleryOpen(false);

  const scrollToCalculator = () => {
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      const element = document.getElementById('roi-calculator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <main className="min-h-screen">
        {/* Language Selection - Sticky Header */}
        <LanguageToggle />
        
        {/* Hero Section */}
        <Hero 
          onOpenGallery={openGallery}
          onOpenCalculator={scrollToCalculator}
        />

        {/* Why Here Section */}
        <WhyHere />

        {/* Offer & Urgency */}
        <OfferUrgency />

        {/* Price Context Charts */}
        <PriceCharts />

        {/* ROI Calculator */}
        <div id="roi-calculator">
          <RoiCalculator />
        </div>

        {/* Location Map */}
        <LocationMap />

        {/* FAQ Section */}
        <Faq />

        {/* Urgency Strip */}
        <UrgencyStrip />

        {/* Footer */}
        <Footer />

        {/* Gallery Modal */}
        <Gallery isOpen={galleryOpen} onClose={closeGallery} />
      </main>
    </I18nextProvider>
  );
}
