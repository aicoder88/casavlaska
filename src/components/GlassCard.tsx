"use client";

import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  delay?: number;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { children, className = "", hover = true, animate = true, delay = 0 },
    ref,
  ) => {
    const hoverClasses = hover
      ? "hover:scale-105 hover:shadow-xl transition-all duration-300"
      : "";

    const combinedClasses = `relative rounded-2xl p-6 md:p-8 border overflow-hidden ${hoverClasses} ${className}`;

    const content = (
      <>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md dark:bg-slate-900/40"></div>
        <div className="relative z-10">{children}</div>
      </>
    );

    if (!animate) {
      return (
        <div ref={ref} className={combinedClasses}>
          {content}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={combinedClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      >
        {content}
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
