'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.div
      className={`
        relative group
        bg-bg-surface/50 border border-border-chrome rounded-2xl p-8
        transition-all duration-300 ease-in-out
        hover:border-accent hover:shadow-glow
        backdrop-blur-sm
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-accent shadow-chrome"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white text-2xl">
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Compact variant for smaller spaces
export function FeatureCardCompact({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.div
      className={`
        flex items-start gap-4 p-6
        bg-bg-surface/50 border border-border-chrome rounded-xl
        hover:border-accent hover:shadow-glow
        transition-all duration-300
        backdrop-blur-sm
        ${className}
      `}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ x: 4 }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center text-white text-xl shadow-chrome">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-semibold mb-2 text-text-primary">
          {title}
        </h4>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;
