'use client';

import { motion } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  delay?: number;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(({ 
  children, 
  className = '', 
  hover = true,
  animate = true,
  delay = 0
}, ref) => {
  const baseClasses = 'glass-card backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl';
  
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-xl transition-all duration-300' : '';
  
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  if (!animate) {
    return (
      <div ref={ref} className={combinedClasses}>
        {children}
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
      {children}
    </motion.div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;