'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

const walkingTimes = [
  { name: 'kvaternik', icon: '🏛️', time: '3 min' },
  { name: 'tram', icon: '🚋', time: '2 min' },
  { name: 'cafes', icon: '☕', time: '1 min' },
  { name: 'university', icon: '🎓', time: '15 min' },
  { name: 'nightlife', icon: '🌃', time: '5 min' },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('location.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 h-96">
              {/* Static map placeholder - in production, replace with actual map service */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg overflow-hidden">
                {/* Map placeholder */}
                <div className="absolute inset-0 bg-cover bg-center opacity-50" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
                     }}>
                </div>
                
                {/* Location marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="relative"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg relative">
                      <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      Vlaška 117
                    </div>
                  </motion.div>
                </div>

                {/* Neighborhood indicators */}
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-2 rounded-lg text-sm">
                  📍 Zagreb Center
                </div>
                
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded-lg text-sm">
                  🗺️ Interactive Map
                </div>

                {/* Street indicators */}
                <div className="absolute top-1/4 left-1/4 text-white/80 text-xs">
                  Kvaternikov trg →
                </div>
                <div className="absolute bottom-1/4 right-1/4 text-white/80 text-xs">
                  ← City Center
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
              <h3 className="text-xl font-semibold text-white mb-6">
                🚶‍♂️ {t('location.walkingTimes')}
              </h3>
              
              <div className="space-y-4">
                {walkingTimes.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-white/90">
                        {t(`location.${item.name}`)}
                      </span>
                    </div>
                    <span className="text-blue-400 font-semibold">
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Neighborhood highlights */}
            <GlassCard className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <h4 className="text-lg font-semibold text-white mb-4">
                ✨ Neighborhood Highlights
              </h4>
              <div className="space-y-3 text-white/80 text-sm">
                <div className="flex items-start space-x-2">
                  <span>🎭</span>
                  <span>{t('common.walkingNationalTheatre')}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>🛍️</span>
                  <span>{t('common.ilicaStreetNearby')}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>🌳</span>
                  <span>{t('common.marketsWithinReach')}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>🏛️</span>
                  <span>Historic Upper Town (Gornji Grad) 10-minute walk</span>
                </div>
              </div>
            </GlassCard>

            {/* Transport links */}
            <GlassCard className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                🚌 Public Transport
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-xl mb-2">🚋</div>
                  <div className="text-white/90">Tram Lines</div>
                  <div className="text-blue-400">4, 8, 14</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-xl mb-2">🚌</div>
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
            href="https://maps.google.com/?q=Vlaška+117,+Zagreb,+Croatia"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button text-white font-semibold px-8 py-4 inline-flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <span>🗺️</span>
            <span>Open in Google Maps</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}