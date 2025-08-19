'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  
  const faqData = t('faq.questions', { returnObjects: true }) as FaqItem[];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const expandAll = () => {
    setOpenItems(new Set(faqData.map((_, index) => index)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="center-content mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('faq.title')}
          </h2>
          
          {/* Expand/Collapse controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={expandAll}
              className="glass-button text-white px-4 py-2 text-sm hover:bg-white/10"
            >
              {t('common.expandAll')}
            </button>
            <button
              onClick={collapseAll}
              className="glass-button text-white px-4 py-2 text-sm hover:bg-white/10"
            >
              {t('common.collapseAll')}
            </button>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset"
                  aria-expanded={openItems.has(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="w-6 h-6 text-white/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-white/20"
                        >
                          <p className="text-white/80 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="center-content mt-16"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              💬 {t('common.stillHaveQuestions')}
            </h3>
            <p className="text-white/80 mb-6">
              {t('common.getInstantAnswers')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+12046204491"
                className="glass-button text-white font-semibold px-6 py-3 bg-green-500/20 hover:bg-green-500/30 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📞</span>
                <span>{t('common.callNow')}</span>
              </motion.a>
              <motion.a
                href="https://wa.me/12046204491?text=I%20have%20questions%20about%20Vlaška%20117"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button text-white font-semibold px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💬</span>
                <span>{t('common.whatsapp')}</span>
              </motion.a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}