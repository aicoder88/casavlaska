"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import GlassCard from "./GlassCard";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqData = t("faq.questions", { returnObjects: true }) as FaqItem[];

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
            {t("faq.title")}
          </h2>

          {/* Expand/Collapse controls */}
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={expandAll}
              className="glass-button px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              {t("common.expandAll")}
            </button>
            <button
              onClick={collapseAll}
              className="glass-button px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              {t("common.collapseAll")}
            </button>
          </div>
        </motion.div>

        <div className="mx-auto max-w-4xl">
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
                  className="w-full p-6 text-left focus:ring-2 focus:ring-blue-400 focus:outline-none focus:ring-inset"
                  aria-expanded={openItems.has(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="pr-4 text-lg font-semibold text-white">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="h-6 w-6 text-white/70"
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
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-white/20 pt-4"
                        >
                          <p className="leading-relaxed text-white/80">
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
          <GlassCard className="mx-auto max-w-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8">
            <h3 className="mb-4 text-xl font-semibold text-white">
              💬 {t("common.stillHaveQuestions")}
            </h3>
            <p className="mb-6 text-white/80">
              {t("common.getInstantAnswers")}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href="tel:+12046204491"
                className="glass-button inline-flex items-center justify-center space-x-2 bg-green-500/20 px-6 py-3 font-semibold text-white hover:bg-green-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📞</span>
                <span>{t("common.callNow")}</span>
              </motion.a>
              <motion.a
                href="https://wa.me/12046204491?text=I%20have%20questions%20about%20Vlaška%20117"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button inline-flex items-center justify-center space-x-2 bg-blue-500/20 px-6 py-3 font-semibold text-white hover:bg-blue-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💬</span>
                <span>{t("common.whatsapp")}</span>
              </motion.a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
