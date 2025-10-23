'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  glowColor?: 'cyan' | 'magenta' | 'violet' | 'orange' | 'bloom';
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  glowColor = 'bloom',
  className = '',
}: FeatureCardProps) {
  const glowClasses = {
    cyan: 'hover:shadow-glow-cyan',
    magenta: 'hover:shadow-glow-magenta',
    violet: 'hover:shadow-glow-purple',
    orange: 'hover:shadow-glow-orange',
    bloom: 'hover-glow-bloom',
  };

  const borderGlowClasses = {
    cyan: 'hover:border-cyan',
    magenta: 'hover:border-magenta',
    violet: 'hover:border-violet',
    orange: 'hover:border-orange',
    bloom: 'hover:border-primary',
  };

  return (
    <motion.div
      className={`
        relative group
        bg-bg-surface border border-border-default rounded-xl p-8
        transition-all duration-300 ease-in-out
        ${glowClasses[glowColor]}
        ${borderGlowClasses[glowColor]}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-bloom"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white text-3xl">
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold mb-4 text-text-primary group-hover:text-gradient-bloom transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-bloom opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform rotate-45 translate-x-8 -translate-y-8" />
      </div>
    </motion.div>
  );
}

// Compact variant for smaller spaces
export function FeatureCardCompact({
  icon,
  title,
  description,
  glowColor = 'cyan',
  className = '',
}: FeatureCardProps) {
  return (
    <motion.div
      className={`
        flex items-start gap-4 p-6
        bg-bg-surface border border-border-subtle rounded-lg
        hover:border-${glowColor} hover:shadow-glow-${glowColor}
        transition-all duration-300
        ${className}
      `}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ x: 8 }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-bloom flex items-center justify-center text-white text-xl">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-heading font-semibold mb-2 text-text-primary">
          {title}
        </h4>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Icon-only variant for feature grids
export function FeatureIcon({
  icon,
  title,
  glowColor = 'bloom',
  className = '',
}: Omit<FeatureCardProps, 'description'>) {
  return (
    <motion.div
      className={`
        flex flex-col items-center text-center p-6
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Icon with glow */}
      <motion.div
        className={`
          w-20 h-20 rounded-xl bg-gradient-bloom
          flex items-center justify-center text-white text-4xl mb-4
          glow-${glowColor}
        `}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h4 className="text-lg font-heading font-semibold text-text-primary">
        {title}
      </h4>
    </motion.div>
  );
}

export default FeatureCard;
