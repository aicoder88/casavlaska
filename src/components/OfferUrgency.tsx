'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

export default function OfferUrgency() {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = 'tel:+385993433344';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/385993433344?text=Želim%20vidjeti%20stan%20na%20Vlaškoj%20117', '_blank');
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 border-2 border-yellow-400/30">
            <div className="text-center">
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

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {t('offer.title')}
              </h2>

              <div className="space-y-6 mb-8">
                <motion.p 
                  className="text-lg md:text-xl text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t('offer.urgency')}
                </motion.p>

                <motion.div
                  className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
                    💰 {t('offer.price')}
                  </div>
                  <div className="text-white/80 text-sm">
                    Below market rate • Clean title • Ready to close
                  </div>
                </motion.div>
              </div>

              {/* Action buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={handleCall}
                  className="glass-button text-white font-bold px-8 py-4 text-lg min-w-[200px] bg-gradient-to-r from-green-500/30 to-emerald-500/30 hover:from-green-500/40 hover:to-emerald-500/40 border-green-400/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 {t('offer.callNow')}
                </motion.button>

                <motion.button
                  onClick={handleWhatsApp}
                  className="glass-button text-white font-bold px-8 py-4 text-lg min-w-[200px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 hover:from-blue-500/40 hover:to-cyan-500/40 border-blue-400/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 {t('offer.whatsApp')}
                </motion.button>
              </motion.div>

              {/* Countdown or urgency indicator */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-400/30">
                  <motion.span 
                    className="w-3 h-3 bg-red-400 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-white font-medium text-sm">
                    Decision Deadline: Thursday
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