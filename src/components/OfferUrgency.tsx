'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

export default function OfferUrgency() {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = 'tel:+12046204491';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/12046204491?text=I%20want%20to%20see%20Vlaška%20117%20today', '_blank');
  };

  return (
    <section className="section-spacing relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20 border-4 border-yellow-400/50">
            <div className="center-content">
              {/* Alert icon */}
              <motion.div
                className="text-6xl mb-6"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚨
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 urgency-text">
                {t('offer.title')}
              </h2>

              <div className="space-y-6 mb-8 center-content">
                <motion.p 
                  className="text-xl md:text-2xl high-contrast-text leading-relaxed font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t('offer.urgency')}
                </motion.p>

                <motion.div
                  className="bg-gradient-to-r from-gold-500/30 to-yellow-500/30 p-8 rounded-2xl backdrop-blur-sm border-4 border-yellow-400/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-black price-text mb-4">
                    💰 {t('offer.price')}
                  </div>
                  <div className="high-contrast-text text-lg font-bold center-content">
                    {t('common.belowMarketRate')} • {t('common.cleanTitle')} • {t('common.readyToClose')}
                  </div>
                </motion.div>
              </div>

              {/* Action buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center center-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={handleCall}
                  className="urgency-button glass-button px-10 py-5 text-xl font-black min-w-[250px]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 {t('offer.callNow')}
                </motion.button>

                <motion.button
                  onClick={handleWhatsApp}
                  className="trust-button glass-button px-10 py-5 text-xl font-black min-w-[250px]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 {t('offer.whatsApp')}
                </motion.button>
              </motion.div>

              {/* Countdown or urgency indicator */}
              <motion.div
                className="mt-8 center-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-3 bg-red-500/40 px-6 py-4 rounded-full border-4 border-red-400/60">
                  <motion.span 
                    className="w-4 h-4 bg-red-300 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="high-contrast-text font-black text-lg">
                    ⏰ {t('common.decisionDeadline')} ⏰
                  </span>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}