'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

const icons = ['🏛️', '🪵', '🤫', '🏠', '📋'];

export default function WhyHere() {
  const { t } = useTranslation();
  const points = t('whyHere.points', { returnObjects: true }) as string[];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
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
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className="text-4xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {icons[index]}
                  </motion.div>
                  
                  <p className="text-white/90 leading-relaxed font-medium">
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
          className="mt-16 text-center"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <motion.div
              className="flex items-center justify-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl">⭐</span>
              <h3 className="text-xl font-semibold text-white">
                Prime Zagreb Location
              </h3>
              <span className="text-3xl">⭐</span>
            </motion.div>
            <p className="text-white/80 leading-relaxed">
              Located in the heart of Zagreb&apos;s cultural district, just steps from Kvaternik Square. 
              Walk to cafes, restaurants, and public transport. This is urban living at its finest.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}