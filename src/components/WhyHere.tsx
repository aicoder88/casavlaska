"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GlassCard from "./GlassCard";

const icons = ["🏛️", "🪵", "🤫", "🏠", "📋"];

export default function WhyHere() {
  const { t } = useTranslation();
  const points = t("whyHere.points", { returnObjects: true }) as string[];

  return (
    <section className="relative mx-auto w-full max-w-[900px] p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="center-content mb-16"
      >
        <h2 className="gradient-text mb-6 text-4xl font-black md:text-5xl">
          {t("whyHere.title")}
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="group h-full p-6">
              <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                <motion.div
                  className="mb-2 text-4xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {icons[index]}
                </motion.div>

                <p className="high-contrast-text text-lg leading-relaxed font-bold">
                  {point}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Additional highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="center-content mt-16"
      >
        <GlassCard className="to-gold-500/20 center-content mx-auto max-w-2xl bg-gradient-to-r from-green-500/20 p-8">
          <motion.div
            className="mb-4 flex items-center justify-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl">⭐</span>
            <h3 className="trust-text text-2xl font-black">
              {t("common.primeZagrebLocation")}
            </h3>
            <span className="text-3xl">⭐</span>
          </motion.div>
          <p className="high-contrast-text text-lg leading-relaxed font-bold">
            {t("common.primeLocationDescription")}
          </p>
        </GlassCard>
      </motion.div>
    </section>
  );
}
