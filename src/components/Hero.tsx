'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onOpenGallery: () => void;
  onOpenCalculator: () => void;
}

export default function Hero({ onOpenGallery, onOpenCalculator }: HeroProps) {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = 'tel:+12046204491';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/12046204491?text=I%20want%20to%20see%20Vlaška%20117%20today', '_blank');
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800"></div>
      
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-floating-orb hero-orb-1"></div>
        <div className="hero-floating-orb hero-orb-2"></div>
        <div className="hero-floating-orb hero-orb-3"></div>
        <div className="hero-floating-orb hero-orb-4"></div>
      </div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(245, 158, 11, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
          `
        }}></div>
      </div>

      {/* Main content - edge to edge */}
      <div className="w-full z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="hero-glass-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="center-content"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 hero-gradient-text leading-tight text-center drop-shadow-2xl">
                {t('hero.title')}
              </h1>
              
              <motion.p 
                className="text-2xl md:text-3xl lg:text-4xl hero-subtitle-text mb-12 leading-relaxed text-center max-w-5xl font-bold"
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
                      <h1 key={index} className="text-4xl md:text-5xl font-black text-center mb-6 text-red-400">
                        {paragraph.replace(/# \*\*(.*)\*\*/, '$1')}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith('## **') && paragraph.endsWith('**')) {
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-bold text-center mb-4 text-orange-400">
                        {paragraph.replace(/## \*\*(.*)\*\*/, '$1')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### **') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl md:text-2xl font-bold text-center mb-3 text-yellow-400">
                        {paragraph.replace(/### \*\*(.*)\*\*/, '$1')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="text-lg font-bold mb-3 text-center text-amber-200">
                        {paragraph.replace(/\*\*(.*)\*\*/, '$1')}
                      </p>
                    );
                  }
                  if (paragraph === '---') {
                    return (
                      <div key={index} className="w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6"></div>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <div key={index} className="mb-2"></div>;
                  }
                  return (
                    <p key={index} className="mb-3 text-center text-lg leading-relaxed text-slate-200">
                      {paragraph}
                    </p>
                  );
                })}
              </motion.div>

              {/* Enhanced price highlight banner */}
              <motion.div
                className="hero-price-banner mb-12"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center relative z-10">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                    💎 €159,900 💎
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-amber-200 drop-shadow-lg">
                    ✨ SAVE €60,000+ vs MARKET PRICE! ✨
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
              </motion.div>

              <motion.div 
                className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={handleCall}
                  className="hero-cta-primary min-w-[320px] lg:min-w-[280px]"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">📞 {t('hero.bookViewing')}</span>
                </motion.button>

                <motion.button
                  onClick={onOpenGallery}
                  className="hero-cta-secondary min-w-[320px] lg:min-w-[280px]"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">🖼️ {t('hero.openGallery')}</span>
                </motion.button>

                <motion.button
                  onClick={onOpenCalculator}
                  className="hero-cta-tertiary min-w-[320px] lg:min-w-[280px]"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">📊 {t('hero.calculateROI')}</span>
                </motion.button>
              </motion.div>

              {/* Enhanced quick actions */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  onClick={handleWhatsApp}
                  className="hero-quick-action"
                  whileHover={{ scale: 1.1, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 WhatsApp Now
                </motion.button>
                
                <div className="hidden sm:block w-1 h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                
                <motion.a 
                  href="tel:+12046204491"
                  className="hero-phone-link"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  📱 +1 204 620-4491
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="hero-scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-2 h-4 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="text-center mt-3">
          <span className="text-white/70 text-sm font-medium tracking-wider">SCROLL TO EXPLORE</span>
        </div>
      </motion.div>
    </section>
  );
}