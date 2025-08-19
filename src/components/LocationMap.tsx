"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GlassCard from "./GlassCard";

const walkingTimes = [
  { name: "zagrebackaBanka", icon: "🏦", time: "15 sec" },
  { name: "kvaternik", icon: "🏛️", time: "3 min" },
  { name: "tram", icon: "🚋", time: "2 min" },
  { name: "cafes", icon: "☕", time: "1 min" },
  { name: "university", icon: "🎓", time: "15 min" },
  { name: "nightlife", icon: "🌃", time: "5 min" },
];

export default function LocationMap() {
  const { t } = useTranslation();

  return (
    <section className="section-spacing relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="center-content mb-16"
        >
          <h2 className="gradient-text mb-6 text-4xl font-bold md:text-5xl">
            {t("location.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-96 p-2">
              {/* Google Maps Street View Embed */}
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1692891567284!6m8!1m7!1sCAoSLEFGMVFpcE5fWmpjVEc5a3FRRWQ2TGZZOExvY1d4bmVEX0YyTWVNM2x6SGhu!2m2!1d45.8140573!2d15.9828851!3f239.79!4f5.15!5f0.7820865974627469"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Vlaška 117 Street View - Zagreb Bank across the street"
                ></iframe>

                {/* Overlay indicators */}
                <div className="absolute top-4 left-4 rounded-lg bg-black/80 px-3 py-2 text-xs text-white backdrop-blur-sm">
                  📍 Vlaška 117 • 🏦 Zagreb Bank Across
                </div>

                <div className="absolute right-4 bottom-4 rounded-lg bg-black/80 px-3 py-2 text-xs text-white backdrop-blur-sm">
                  🗺️ Street View
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Walking Times */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlassCard className="p-6">
              <h3 className="mb-6 text-xl font-semibold text-white">
                🚶‍♂️ {t("location.walkingTimes")}
              </h3>

              <div className="space-y-4">
                {walkingTimes.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between rounded-lg bg-white/5 p-4 transition-colors hover:bg-white/10"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-white/90">
                        {t(`location.${item.name}`)}
                      </span>
                    </div>
                    <span className="font-semibold text-blue-400">
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Neighborhood highlights */}
            <GlassCard className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6">
              <h4 className="mb-4 text-lg font-semibold text-white">
                ✨ Neighborhood Highlights
              </h4>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-start space-x-2">
                  <span>🎭</span>
                  <span>{t("common.walkingNationalTheatre")}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>🛍️</span>
                  <span>{t("common.ilicaStreetNearby")}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>🌳</span>
                  <span>{t("common.marketsWithinReach")}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>🏛️</span>
                  <span>Historic Upper Town (Gornji Grad) 10-minute walk</span>
                </div>
              </div>
            </GlassCard>

            {/* Transport links */}
            <GlassCard className="p-6">
              <h4 className="mb-4 text-lg font-semibold text-white">
                🚌 Public Transport
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-white/5 p-3 text-center">
                  <div className="mb-2 text-xl">🚋</div>
                  <div className="text-white/90">Tram Lines</div>
                  <div className="text-blue-400">4, 8, 14</div>
                </div>
                <div className="rounded-lg bg-white/5 p-3 text-center">
                  <div className="mb-2 text-xl">🚌</div>
                  <div className="text-white/90">Bus Lines</div>
                  <div className="text-blue-400">Multiple</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Google Maps Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="center-content mt-12"
        >
          <a
            href="https://maps.app.goo.gl/52VUxcdC19k8BFZPA"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center space-x-2 px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
          >
            <span>🗺️</span>
            <span>Open in Google Maps</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
