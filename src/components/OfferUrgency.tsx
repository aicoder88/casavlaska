"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import GlassCard from "./GlassCard";

export default function OfferUrgency() {
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
    <section className="relative mx-auto w-full max-w-7xl px-4 py-8 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <GlassCard className="border-4 border-yellow-400/50 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20 p-8 md:p-12">
          <div className="center-content">
            {/* Alert icon */}
            <motion.div
              className="mb-6 text-6xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🚨
            </motion.div>

            <h2 className="urgency-text mb-6 text-4xl font-black md:text-5xl">
              {t("offer.title")}
            </h2>

            <div className="center-content mb-8 space-y-6">
              <motion.p
                className="high-contrast-text text-xl leading-relaxed font-bold md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t("offer.urgency")}
              </motion.p>

              {/* Property image to break up urgency text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="my-8"
              >
                <GlassCard className="overflow-hidden p-0">
                  <div className="relative h-64 md:h-80 min-h-[16rem] bg-yellow-500 overflow-hidden">
                    <Image
                      src="/IMG_2397.JPG"
                      alt="Interior apartment details"
                      width={600}
                      height={320}
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        console.error('Failed to load image:', e.currentTarget.src);
                      }}
                      onLoad={() => console.log('Image loaded successfully:', '/IMG_2397.JPG')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-lg font-bold text-white md:text-xl">
                        {t("common.spaciousInterior")} • {t("common.readyToMove")}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                className="from-gold-500/30 rounded-2xl border-4 border-yellow-400/50 bg-gradient-to-r to-yellow-500/30 p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="price-text mb-4 text-3xl font-black md:text-4xl">
                  💰 {t("offer.price")}
                </div>
                <div className="high-contrast-text center-content text-lg font-bold">
                  {t("common.belowMarketRate")} • {t("common.cleanTitle")} •{" "}
                  {t("common.readyToClose")}
                </div>
              </motion.div>
            </div>

            {/* Action buttons */}
            <motion.div
              className="center-content flex flex-col items-center justify-center gap-6 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={handleCall}
                className="urgency-button glass-button min-w-[250px] px-10 py-5 text-xl font-black"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 {t("offer.callNow")}
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                className="trust-button glass-button min-w-[250px] px-10 py-5 text-xl font-black"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 {t("offer.whatsApp")}
              </motion.button>
            </motion.div>

            {/* Countdown or urgency indicator */}
            <motion.div
              className="center-content mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-3 rounded-full border-4 border-red-400/60 bg-red-500/40 px-6 py-4">
                <motion.span
                  className="h-4 w-4 rounded-full bg-red-300"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="high-contrast-text text-lg font-black">
                  ⏰ {t("common.decisionDeadline")} ⏰
                </span>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
