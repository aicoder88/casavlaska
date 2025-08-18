'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full bg-black/80 backdrop-blur-md border-b-4 border-yellow-400 py-6 px-4 sticky top-0 z-50">
      <div className="container mx-auto max-w-4xl">
        {/* Croatian instruction (bigger) */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-yellow-300 mb-2">
            👇 ODABERITE JEZIK / CHOOSE LANGUAGE 👇
          </h2>
          <p className="text-lg md:text-xl text-white font-bold">
            Kliknite na gumb za svoj jezik • Click button for your language
          </p>
        </motion.div>

        {/* Language buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            onClick={() => setLanguage('hr')}
            className={`flex-1 glass-button px-8 py-6 text-2xl font-black transition-all duration-300 ${
              i18n.language === 'hr' 
                ? 'bg-gradient-to-r from-red-600 to-red-800 border-4 border-red-300 scale-105' 
                : 'trust-button'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-4xl">🇭🇷</span>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white">HRVATSKI</div>
                <div className="text-sm text-white/90">Kliknite ovdje za hrvatski</div>
              </div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => setLanguage('en')}
            className={`flex-1 glass-button px-8 py-6 text-2xl font-black transition-all duration-300 ${
              i18n.language === 'en' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-800 border-4 border-blue-300 scale-105' 
                : 'value-button'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-4xl">🇺🇸</span>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black">ENGLISH</div>
                <div className="text-sm text-black/90">Click here for English</div>
              </div>
            </div>
          </motion.button>
        </div>

        {/* Arrow indicators */}
        <motion.div 
          className="flex justify-between mt-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-3xl">👆</span>
          <span className="text-3xl">👆</span>
        </motion.div>
      </div>
    </div>
  );
}