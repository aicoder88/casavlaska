"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GlassCard from "./GlassCard";

export default function UrgencyStrip() {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = "tel:+12046204491";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/12046204491?text=I%20want%20to%20see%20apartment%20at%20Vlaška%20117%20today",
      "_blank",
    );
  };

  return (
    <section className="section-spacing-sm relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <GlassCard className="border-2 border-red-400/40 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 p-8">
            <div className="text-center">
              {/* Animated urgency indicator */}
              <motion.div
                className="mb-6 flex justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center space-x-3 rounded-full border border-red-400/50 bg-red-500/30 px-6 py-3">
                  <motion.div
                    className="h-3 w-3 rounded-full bg-red-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-sm font-semibold tracking-wider text-white uppercase">
                    Urgent
                  </span>
                  <motion.div
                    className="h-3 w-3 rounded-full bg-red-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </motion.div>

              <motion.h2
                className="mb-6 text-2xl font-bold text-white md:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t("urgencyStrip.text")}
              </motion.h2>

              {/* Action buttons */}
              <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={handleCall}
                  className="glass-button min-w-[250px] border-green-400/60 bg-gradient-to-r from-green-500/40 to-emerald-500/40 px-8 py-4 text-lg font-bold text-white hover:from-green-500/50 hover:to-emerald-500/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 {t("common.call")} +1 204 620-4491
                </motion.button>

                <motion.button
                  onClick={handleWhatsApp}
                  className="glass-button min-w-[250px] border-blue-400/60 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 px-8 py-4 text-lg font-bold text-white hover:from-blue-500/50 hover:to-cyan-500/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 {t("common.whatsappMessage")}
                </motion.button>
              </motion.div>

              {/* Contact person */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-3 rounded-full bg-white/10 px-6 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-400 font-semibold text-white">
                    D
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-white">Lorie</div>
                    <div className="text-sm text-white/70">
                      {t("common.primaryContact")}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
