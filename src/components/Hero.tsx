'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

interface HeroProps {
  onOpenGallery: () => void;
  onOpenCalculator: () => void;
}

export default function Hero({ onOpenGallery, onOpenCalculator }: HeroProps) {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = 'tel:+385993433344';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/385993433344?text=Želim%20vidjeti%20stan%20na%20Vlaškoj%20117', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating background blobs */}
      <div className="floating-blob"></div>
      <div className="floating-blob"></div>
      <div className="floating-blob"></div>
      
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>


      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="center-content backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="center-content"
            >
              <h1 className="text-3xl md:text-5xl font-black mb-6 gradient-text leading-tight text-center">
                {t('hero.title')}
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl high-contrast-text mb-8 leading-relaxed text-center max-w-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* Main sales content */}
              <motion.div 
                className="high-contrast-text mb-10 leading-relaxed text-left max-w-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('hero.mainContent').split('\n').map((paragraph, index) => {
                  // Handle different markdown styles
                  if (paragraph.startsWith('# **') && paragraph.endsWith('**')) {
                    return (
                      <h1 key={index} className="text-4xl md:text-5xl font-black text-center mb-6 text-red-500">
                        {paragraph.replace(/# \*\*(.*)\*\*/, '$1')}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith('## **') && paragraph.endsWith('**')) {
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-bold text-center mb-4 text-orange-500">
                        {paragraph.replace(/## \*\*(.*)\*\*/, '$1')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### **') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl md:text-2xl font-bold text-center mb-3 text-yellow-600">
                        {paragraph.replace(/### \*\*(.*)\*\*/, '$1')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="text-lg font-bold mb-3 text-center">
                        {paragraph.replace(/\*\*(.*)\*\*/, '$1')}
                      </p>
                    );
                  }
                  if (paragraph === '---') {
                    return (
                      <div key={index} className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent my-6"></div>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <div key={index} className="mb-2"></div>;
                  }
                  return (
                    <p key={index} className="mb-3 text-center text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </motion.div>

              {/* Price highlight banner */}
              <motion.div
                className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 p-6 rounded-2xl mb-8 border-4 border-yellow-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    💰 ONLY €159,900 💰
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white">
                    🔥 SAVE €60,000+ vs MARKET PRICE! 🔥
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={handleCall}
                  className="urgency-button glass-button px-10 py-5 text-xl font-black min-w-[280px]"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.bookViewing')}
                </motion.button>

                <motion.button
                  onClick={onOpenGallery}
                  className="trust-button glass-button px-10 py-5 text-xl font-black min-w-[280px]"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.openGallery')}
                </motion.button>

                <motion.button
                  onClick={onOpenCalculator}
                  className="value-button glass-button px-10 py-5 text-xl font-black min-w-[280px]"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.calculateROI')}
                </motion.button>
              </motion.div>

              {/* Quick actions */}
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center center-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={handleWhatsApp}
                  className="trust-button glass-button px-8 py-3 text-lg font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 WhatsApp Now
                </motion.button>
                
                <span className="high-contrast-text text-lg font-bold">|</span>
                
                <a 
                  href="tel:+385993433344"
                  className="high-contrast-text hover:text-yellow-300 transition-colors text-lg font-bold"
                >
                  📱 +385 99 343 3344
                </a>
              </motion.div>
            </motion.div>
          </GlassCard>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}