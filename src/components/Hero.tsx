"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HeroProps {
  onOpenGallery: () => void;
  onOpenCalculator: () => void;
}

export default function Hero({ onOpenGallery, onOpenCalculator }: HeroProps) {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = "tel:+12046204491";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/12046204491?text=I%20want%20to%20see%20Vlaška%20117%20today",
      "_blank",
    );
  };

  return (
    <section className="w-full space-y-6 md:space-y-8">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/80 to-slate-800/80 backdrop-blur-md"></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="center-content space-y-6 md:space-y-8"
          >
            {/* Direct from owner banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 text-center sm:px-6 sm:py-3"
            >
              <span className="text-sm font-black text-white drop-shadow-lg sm:text-lg md:text-xl">
                {t("common.directFromOwner")}
              </span>
            </motion.div>

            <h1 className="hero-gradient-text text-center text-4xl leading-tight font-black drop-shadow-2xl md:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>

            {/* Clean ownership highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 px-3 py-1.5 text-center sm:px-4 sm:py-2"
            >
              <span className="text-sm font-bold text-white drop-shadow-md sm:text-base md:text-lg">
                🏆 {t("common.cleanOwnership")}
              </span>
            </motion.div>

            <motion.p
              className="hero-subtitle-text max-w-5xl text-center text-2xl leading-relaxed font-bold md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Main sales content */}
            <motion.div
              className="high-contrast-text center-content max-w-5xl text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("hero.mainContent")
                .split("\n")
                .map((paragraph, index) => {
                  // Handle different markdown styles
                  if (
                    paragraph.startsWith("# **") &&
                    paragraph.endsWith("**")
                  ) {
                    return (
                      <h1
                        key={index}
                        className="mb-6 text-center text-4xl font-black text-red-400 md:text-5xl"
                      >
                        {paragraph.replace(/# \*\*(.*)\*\*/, "$1")}
                      </h1>
                    );
                  }
                  if (
                    paragraph.startsWith("## **") &&
                    paragraph.endsWith("**")
                  ) {
                    return (
                      <h2
                        key={index}
                        className="mb-4 text-center text-2xl font-bold text-orange-400 md:text-3xl"
                      >
                        {paragraph.replace(/## \*\*(.*)\*\*/, "$1")}
                      </h2>
                    );
                  }
                  if (
                    paragraph.startsWith("### **") &&
                    paragraph.endsWith("**")
                  ) {
                    return (
                      <h3
                        key={index}
                        className="mb-3 text-center text-xl font-bold text-yellow-400 md:text-2xl"
                      >
                        {paragraph.replace(/### \*\*(.*)\*\*/, "$1")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <p
                        key={index}
                        className="mb-3 text-center text-lg font-bold text-amber-200"
                      >
                        {paragraph.replace(/\*\*(.*)\*\*/, "$1")}
                      </p>
                    );
                  }
                  if (paragraph === "---") {
                    return (
                      <div
                        key={index}
                        className="my-6 h-px w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                      ></div>
                    );
                  }
                  if (paragraph.trim() === "") {
                    return <div key={index} className="mb-2"></div>;
                  }
                  return (
                    <p
                      key={index}
                      className="mb-3 text-center text-lg leading-relaxed text-slate-200"
                    >
                      {paragraph}
                    </p>
                  );
                })}
            </motion.div>

            {/* Enhanced price highlight banner */}
            <motion.div
              className="hero-price-banner"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative z-10 text-center">
                <div className="text-5xl font-black text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
                  €159,900
                </div>
                <div className="text-xl font-bold text-amber-200 drop-shadow-lg md:text-2xl lg:text-3xl">
                  {t("common.saveVsMarketPrice")}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-col items-center justify-center gap-8 md:mt-16 lg:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={handleCall}
                className="hero-cta-primary w-full min-w-[280px] sm:min-w-[320px] lg:min-w-[280px]"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  📞 {t("hero.bookViewing")}
                </span>
              </motion.button>

              <motion.button
                onClick={onOpenGallery}
                className="hero-cta-secondary w-full min-w-[280px] sm:min-w-[320px] lg:min-w-[280px]"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  🖼️ {t("hero.openGallery")}
                </span>
              </motion.button>

              <motion.button
                onClick={onOpenCalculator}
                className="hero-cta-tertiary w-full min-w-[280px] sm:min-w-[320px] lg:min-w-[280px]"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  📊 {t("hero.calculateROI")}
                </span>
              </motion.button>
            </motion.div>

            {/* Enhanced quick actions */}
            <motion.div
              className="flex flex-col items-center justify-center gap-6 sm:flex-row"
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
                💬 {t("common.whatsappNow")}
              </motion.button>

              <div className="hidden h-8 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent sm:block"></div>

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

      {/* Enhanced scroll indicator */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <motion.div
            className="hero-scroll-indicator mx-auto"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="mt-2 h-4 w-2 rounded-full bg-gradient-to-b from-amber-400 to-orange-500"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <div className="mt-3 text-center">
            <span className="text-sm font-medium tracking-wider text-white/70">
              {t("common.scrollToExplore")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
