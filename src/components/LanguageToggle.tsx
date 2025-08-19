'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-green-50 border-b-2 border-blue-200 py-3 px-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto max-w-4xl">
        {/* Language buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button
            onClick={() => setLanguage('hr')}
            className={`flex-1 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
              i18n.language === 'hr' 
                ? 'bg-blue-600 text-white border-2 border-blue-700 shadow-lg' 
                : 'bg-white text-blue-800 border-2 border-blue-300 hover:bg-blue-50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🇭🇷</span>
              <div className="text-center">
                <div className="font-bold">Kliknite ovdje za hrvatski</div>
              </div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => setLanguage('en')}
            className={`flex-1 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
              i18n.language === 'en' 
                ? 'bg-green-600 text-white border-2 border-green-700 shadow-lg' 
                : 'bg-white text-green-800 border-2 border-green-300 hover:bg-green-50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🇺🇸</span>
              <div className="text-center">
                <div className="font-bold">Click here for English</div>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}