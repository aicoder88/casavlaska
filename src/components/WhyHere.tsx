"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import GlassCard from "./GlassCard";

const icons = ["🏛️", "🪵", "🤫", "🏠", "📋"];

export default function WhyHere() {
  const { t } = useTranslation();
  const points = t("whyHere.points", { returnObjects: true }) as string[];

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-8 md:px-8 lg:px-12">
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

      {/* Property Showcase Images */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="center-content mt-16"
      >
        <h3 className="gradient-text mb-8 text-2xl font-bold md:text-3xl">
          {t("common.seeInside")}
        </h3>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <GlassCard className="overflow-hidden p-0">
              <div className="relative h-64">
                <Image
                  src="/IMG_2345.JPG"
                  alt="Interior apartment view"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white">
                    {t("common.spaciousInterior")}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <GlassCard className="overflow-hidden p-0">
              <div className="relative h-64">
                <Image
                  src="/IMG_2441.JPG"
                  alt="Well-lit living area"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white">
                    {t("common.brightLiving")}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group md:col-span-2 lg:col-span-1"
          >
            <GlassCard className="overflow-hidden p-0">
              <div className="relative h-64">
                <Image
                  src="/IMG_2443.JPG"
                  alt="Complete apartment overview"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white">
                    {t("common.readyToMove")}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>

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
