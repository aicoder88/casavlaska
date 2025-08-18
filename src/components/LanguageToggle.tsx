'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <GlassCard className="inline-flex items-center p-2" hover={false}>
      <motion.button
        onClick={toggleLanguage}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">
          {i18n.language === 'en' ? '🇺🇸' : '🇭🇷'}
        </span>
        <span className="text-sm font-medium">
          {i18n.language === 'en' ? 'EN' : 'HR'}
        </span>
      </motion.button>
    </GlassCard>
  );
}