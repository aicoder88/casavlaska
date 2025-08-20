"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 px-4 py-4 shadow-sm">
      <div className="container mx-auto max-w-7xl">
        {/* Language buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <motion.button
            onClick={() => setLanguage("hr")}
            className={`elegant-flashing-outline rounded-2xl px-6 py-4 text-lg font-medium transition-all duration-300 active:scale-95 sm:px-10 sm:py-6 sm:text-xl ${
              i18n.language === "hr"
                ? "border-2 border-blue-700 bg-blue-600 text-white shadow-lg"
                : "border-2 border-blue-300 bg-white text-blue-800 hover:bg-blue-50"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ minWidth: "240px" }}
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl sm:text-3xl">🇭🇷</span>
              <div className="text-center">
                <div className="text-base font-semibold sm:text-lg">Hrvatski</div>
                <div className="text-xs opacity-80 sm:text-sm">Kliknite ovdje</div>
              </div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => setLanguage("en")}
            className={`rounded-2xl px-6 py-4 text-lg font-medium transition-all duration-300 active:scale-95 sm:px-10 sm:py-6 sm:text-xl ${
              i18n.language === "en"
                ? "border-2 border-green-700 bg-green-600 text-white shadow-lg"
                : "border-2 border-green-300 bg-white text-green-800 hover:bg-green-50"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ minWidth: "240px" }}
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl sm:text-3xl">🇺🇸</span>
              <div className="text-center">
                <div className="text-base font-semibold sm:text-lg">English</div>
                <div className="text-xs opacity-80 sm:text-sm">Click here</div>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
