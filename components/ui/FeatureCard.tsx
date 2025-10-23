'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  glowColor?: 'purple' | 'magenta' | 'blue' | 'cyan' | 'brand';
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  glowColor = 'brand',
  className = '',
}: FeatureCardProps) {
  const glowClasses = {
    purple: 'hover:shadow-glow-purple',
    magenta: 'hover:shadow-glow-magenta',
    blue: 'hover:shadow-glow-blue',
    cyan: 'hover:shadow-glow-cyan',
    brand: 'hover:shadow-glow-purple',
  };

  const borderGlowClasses = {
    purple: 'hover:border-brand-purple',
    magenta: 'hover:border-brand-magenta',
    blue: 'hover:border-brand-blue',
    cyan: 'hover:border-brand-cyan',
    brand: 'hover:border-brand-purple',
  };

  const iconGradients = {
    purple: 'bg-gradient-purple-magenta',
    magenta: 'bg-gradient-purple-magenta',
    blue: 'bg-gradient-blue-cyan',
    cyan: 'bg-gradient-blue-cyan',
    brand: 'bg-gradient-brand',
  };

  return (
    <motion.div
      className={`
        relative group
        bg-bg-secondary border border-border-default rounded-2xl p-6 sm:p-8
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
      <div className="absolute inset-0 rounded-2xl bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`mb-4 sm:mb-6 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${iconGradients[glowColor]} shadow-lg`}
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white text-2xl sm:text-3xl">
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold mb-3 sm:mb-4 text-text-primary group-hover:text-brand-purple transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-tr-2xl">
        <div className={`absolute top-0 right-0 w-full h-full ${iconGradients[glowColor]} opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform rotate-45 translate-x-8 -translate-y-8`} />
      </div>
    </motion.div>
  );
}

// Compact variant for smaller spaces
export function FeatureCardCompact({
  icon,
  title,
  description,
  glowColor = 'purple',
  className = '',
}: FeatureCardProps) {
  const iconGradients = {
    purple: 'bg-gradient-purple-magenta',
    magenta: 'bg-gradient-purple-magenta',
    blue: 'bg-gradient-blue-cyan',
    cyan: 'bg-gradient-blue-cyan',
    brand: 'bg-gradient-brand',
  };

  return (
    <motion.div
      className={`
        flex items-start gap-3 sm:gap-4 p-4 sm:p-6
        bg-bg-secondary border border-border-subtle rounded-xl
        hover:border-brand-${glowColor} hover:shadow-glow-${glowColor}
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
      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${iconGradients[glowColor]} flex items-center justify-center text-white text-lg sm:text-xl shadow-lg`}>
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-base sm:text-lg font-heading font-semibold mb-1 sm:mb-2 text-text-primary">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
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
  glowColor = 'brand',
  className = '',
}: Omit<FeatureCardProps, 'description'>) {
  const iconGradients = {
    purple: 'bg-gradient-purple-magenta',
    magenta: 'bg-gradient-purple-magenta',
    blue: 'bg-gradient-blue-cyan',
    cyan: 'bg-gradient-blue-cyan',
    brand: 'bg-gradient-brand',
  };

  return (
    <motion.div
      className={`
        flex flex-col items-center text-center p-4 sm:p-6
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
          w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${iconGradients[glowColor]}
          flex items-center justify-center text-white text-3xl sm:text-4xl mb-3 sm:mb-4 shadow-lg
        `}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h4 className="text-base sm:text-lg font-heading font-semibold text-text-primary">
        {title}
      </h4>
    </motion.div>
  );
}

export default FeatureCard;
