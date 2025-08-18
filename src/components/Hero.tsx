'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';
import LanguageToggle from './LanguageToggle';

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

      {/* Language toggle - positioned absolutely */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageToggle />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
                {t('hero.title')}
              </h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  onClick={handleCall}
                  className="glass-button text-white font-semibold px-8 py-4 text-lg min-w-[200px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 {t('hero.bookViewing')}
                </motion.button>

                <motion.button
                  onClick={onOpenGallery}
                  className="glass-button text-white font-semibold px-8 py-4 text-lg min-w-[200px] hover:bg-white/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🏠 {t('hero.openGallery')}
                </motion.button>

                <motion.button
                  onClick={onOpenCalculator}
                  className="glass-button text-white font-semibold px-8 py-4 text-lg min-w-[200px] hover:bg-white/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📊 {t('hero.calculateROI')}
                </motion.button>
              </motion.div>

              {/* Quick actions */}
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={handleWhatsApp}
                  className="glass-button text-white px-6 py-2 text-sm bg-green-500/20 hover:bg-green-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 WhatsApp
                </motion.button>
                
                <span className="text-white/60 text-sm">|</span>
                
                <a 
                  href="tel:+385993433344"
                  className="text-white/80 hover:text-white transition-colors text-sm"
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