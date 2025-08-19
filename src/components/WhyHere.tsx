'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

const icons = ['🏛️', '🪵', '🤫', '🏠', '📋'];

export default function WhyHere() {
  const { t } = useTranslation();
  const points = t('whyHere.points', { returnObjects: true }) as string[];

  return (
    <section className="relative w-full max-w-[900px] mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="center-content mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
            {t('whyHere.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full group">
                <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
                  <motion.div
                    className="text-4xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {icons[index]}
                  </motion.div>
                  
                  <p className="high-contrast-text leading-relaxed font-bold text-lg">
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
          className="mt-16 center-content"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-green-500/20 to-gold-500/20 center-content">
            <motion.div
              className="flex items-center justify-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl">⭐</span>
              <h3 className="text-2xl font-black trust-text">
                PRIME ZAGREB LOCATION
              </h3>
              <span className="text-3xl">⭐</span>
            </motion.div>
            <p className="high-contrast-text leading-relaxed text-lg font-bold">
              {t('common.primeLocationDescription')}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}