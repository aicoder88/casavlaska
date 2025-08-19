"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function LiveViewers() {
  const { t } = useTranslation();
  const [viewers, setViewers] = useState(63);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setViewers((prev) => {
          const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
          const newValue = prev + change;
          return Math.max(50, Math.min(70, newValue));
        });
      },
      2000 + Math.random() * 3000,
    ); // 2-5 seconds

    const hideTimer = setTimeout(
      () => {
        const shouldHide = Math.random() < 0.15; // 15% chance to hide temporarily
        if (shouldHide) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 3000 + Math.random() * 5000); // Hide for 3-8 seconds
        }
      },
      10000 + Math.random() * 20000,
    ); // Start checking after 10-30 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 z-50"
        >
          <div className="glass-card rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-2 w-2 rounded-full bg-green-400"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              <motion.span
                key={viewers}
                initial={{ scale: 1.2, color: "#22c55e" }}
                animate={{ scale: 1, color: "#ffffff" }}
                transition={{ duration: 0.3 }}
                className="text-sm font-medium text-white"
              >
                {viewers}
              </motion.span>
              <span className="text-sm text-white/80">
                {t("liveViewers.text")}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
