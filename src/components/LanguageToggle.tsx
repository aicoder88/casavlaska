'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200 py-4 px-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto max-w-5xl">
        {/* Language buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => setLanguage('hr')}
            className={`px-10 py-6 rounded-2xl text-xl font-medium transition-all duration-300 elegant-flashing-outline ${
              i18n.language === 'hr' 
                ? 'bg-blue-600 text-white border-2 border-blue-700 shadow-lg' 
                : 'bg-white text-blue-800 border-2 border-blue-300 hover:bg-blue-50'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ minWidth: '280px' }}
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-3xl">🇭🇷</span>
              <div className="text-center">
                <div className="font-semibold text-lg">Hrvatski</div>
                <div className="text-sm opacity-80">Kliknite ovdje</div>
              </div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => setLanguage('en')}
            className={`px-8 py-5 rounded-xl text-lg font-medium transition-all duration-300 ${
              i18n.language === 'en' 
                ? 'bg-green-600 text-white border-2 border-green-700 shadow-lg' 
                : 'bg-white text-green-800 border-2 border-green-300 hover:bg-green-50'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ minWidth: '220px' }}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🇺🇸</span>
              <div className="text-center">
                <div className="font-semibold">English</div>
                <div className="text-sm opacity-80">Click here</div>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}