"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GlassCard from "./GlassCard";

export default function Footer() {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = "tel:+12046204491";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/12046204491?text=Hello%20about%20apartment%20at%20Vlaška%20117",
      "_blank",
    );
  };

  const handleEmail = () => {
    window.location.href = "tel:+12046204491";
  };

  return (
    <footer className="section-spacing relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Brand & Description */}
              <div className="space-y-4">
                <motion.h3
                  className="gradient-text text-2xl font-bold"
                  whileHover={{ scale: 1.05 }}
                >
                  CasaVlaška
                </motion.h3>
                <p className="leading-relaxed text-white/80">
                  {t("common.premiumRealEstate")}
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://maps.google.com/?q=Vlaška+117,+Zagreb,+Croatia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition-colors hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    aria-label={t("common.viewOnGoogleMaps")}
                  >
                    📍
                  </motion.a>
                  <motion.button
                    onClick={handleEmail}
                    className="text-white/60 transition-colors hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    aria-label={t("common.sendEmail")}
                  >
                    ✉️
                  </motion.button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  {t("footer.contact")}
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-400">👤</span>
                    <div>
                      <div className="font-medium text-white">
                        {t("footer.name")}
                      </div>
                      <div className="text-sm text-white/70">
                        {t("common.propertySpecialist")}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleCall}
                    className="flex w-full items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-white/10"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-green-400">📞</span>
                    <div className="text-left">
                      <div className="text-white">+1 204 620-4491 (Lorie)</div>
                      <div className="text-xs text-white/60">
                        {t("common.ifMustUseCroatian")}
                      </div>
                      <div className="text-sm text-white/70">
                        {t("common.callAnytime")}
                      </div>
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={handleWhatsApp}
                    className="flex w-full items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-white/10"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-blue-400">💬</span>
                    <div className="text-left">
                      <div className="text-white">{t("common.whatsapp")}</div>
                      <div className="text-sm text-white/70">
                        {t("common.instantMessaging")}
                      </div>
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={handleEmail}
                    className="flex w-full items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-white/10"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-purple-400">📹</span>
                    <div className="text-left">
                      <div className="text-white">{t("common.faceTime")}</div>
                      <div className="text-sm text-white/70">
                        {t("common.videoCallAvailable")}
                      </div>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-4">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  🏠 {t("common.propertyDetails")}
                </h4>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">{t("common.address")}</span>
                    <span className="text-white">Vlaška 117, Zagreb</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">{t("common.size")}</span>
                    <span className="text-white">46 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">{t("common.rooms")}</span>
                    <span className="text-white">{t("common.roomLayout")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">{t("common.price")}</span>
                    <span className="font-semibold text-green-400">
                      €159,900
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">{t("common.status")}</span>
                    <span className="text-yellow-400">
                      {t("common.available")}
                    </span>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={handleCall}
                      className="glass-button flex-1 bg-green-500/20 py-2 text-xs font-medium hover:bg-green-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      📞 {t("common.call")}
                    </motion.button>
                    <motion.button
                      onClick={handleWhatsApp}
                      className="glass-button flex-1 bg-blue-500/20 py-2 text-xs font-medium hover:bg-blue-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      💬 {t("common.chat")}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="mt-8 border-t border-white/20 pt-8">
              <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                <div className="text-sm text-white/60">
                  {t("footer.disclaimer")}
                </div>

                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <span>🇭🇷 {t("common.zagrebCroatia")}</span>
                  <span>•</span>
                  <span>© August 2025 CasaVlaška</span>
                </div>
              </div>

              {/* Developer credit */}
              <div className="mt-6 border-t border-white/10 pt-4 text-center">
                <motion.p
                  className="text-xs text-white/40"
                  whileHover={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {t("common.builtWith")}
                </motion.p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </footer>
  );
}
