'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

export default function Footer() {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = 'tel:+12046204491';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/12046204491?text=Hello%20about%20apartment%20at%20Vlaška%20117', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:drago@casavlaska.com?subject=Inquiry about Vlaška 117';
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Brand & Description */}
              <div className="space-y-4">
                <motion.h3 
                  className="text-2xl font-bold gradient-text"
                  whileHover={{ scale: 1.05 }}
                >
                  CasaVlaška
                </motion.h3>
                <p className="text-white/80 leading-relaxed">
                  {t('common.premiumRealEstate')}
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://maps.google.com/?q=Vlaška+117,+Zagreb,+Croatia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    aria-label={t('common.viewOnGoogleMaps')}
                  >
                    📍
                  </motion.a>
                  <motion.button
                    onClick={handleEmail}
                    className="text-white/60 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    aria-label={t('common.sendEmail')}
                  >
                    ✉️
                  </motion.button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {t('footer.contact')}
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-400">👤</span>
                    <div>
                      <div className="text-white font-medium">{t('footer.name')}</div>
                      <div className="text-white/70 text-sm">{t('common.propertySpecialist')}</div>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={handleCall}
                    className="flex items-center space-x-3 hover:bg-white/10 p-2 rounded-lg transition-colors w-full"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-green-400">📞</span>
                    <div className="text-left">
                      <div className="text-white">+1 204 620-4491 (Lorie)</div>
                      <div className="text-white/60 text-xs">{t('common.ifMustUseCroatian')}</div>
                      <div className="text-white/70 text-sm">{t('common.callAnytime')}</div>
                    </div>
                  </motion.button>
                  
                  <motion.button
                    onClick={handleWhatsApp}
                    className="flex items-center space-x-3 hover:bg-white/10 p-2 rounded-lg transition-colors w-full"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-blue-400">💬</span>
                    <div className="text-left">
                      <div className="text-white">{t('common.whatsapp')}</div>
                      <div className="text-white/70 text-sm">{t('common.instantMessaging')}</div>
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={handleEmail}
                    className="flex items-center space-x-3 hover:bg-white/10 p-2 rounded-lg transition-colors w-full"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-purple-400">✉️</span>
                    <div className="text-left">
                      <div className="text-white">drago@casavlaska.com</div>
                      <div className="text-white/70 text-sm">{t('common.emailInquiry')}</div>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">
                  🏠 {t('common.propertyDetails')}
                </h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">{t('common.address')}</span>
                    <span className="text-white">Vlaška 117, Zagreb</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">{t('common.size')}</span>
                    <span className="text-white">46 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">{t('common.rooms')}</span>
                    <span className="text-white">2 + Kitchen + Bath</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">{t('common.price')}</span>
                    <span className="text-green-400 font-semibold">€159,900</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">{t('common.status')}</span>
                    <span className="text-yellow-400">{t('common.available')}</span>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="pt-4 border-t border-white/20">
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={handleCall}
                      className="flex-1 glass-button py-2 text-xs font-medium bg-green-500/20 hover:bg-green-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      📞 {t('common.call')}
                    </motion.button>
                    <motion.button
                      onClick={handleWhatsApp}
                      className="flex-1 glass-button py-2 text-xs font-medium bg-blue-500/20 hover:bg-blue-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      💬 {t('common.chat')}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="border-t border-white/20 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-white/60 text-sm">
                  {t('footer.disclaimer')}
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <span>🇭🇷 {t('common.zagrebCroatia')}</span>
                  <span>•</span>
                  <span>© 2024 CasaVlaška</span>
                </div>
              </div>
              
              {/* Developer credit */}
              <div className="text-center mt-6 pt-4 border-t border-white/10">
                <motion.p 
                  className="text-white/40 text-xs"
                  whileHover={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {t('common.builtWith')}
                </motion.p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </footer>
  );
}