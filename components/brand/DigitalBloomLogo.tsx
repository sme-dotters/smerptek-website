'use client';

import { motion } from 'framer-motion';

interface DigitalBloomLogoProps {
  size?: 'small' | 'default' | 'large' | 'hero';
  animated?: boolean;
  className?: string;
}

export function DigitalBloomLogo({
  size = 'default',
  animated = true,
  className = ''
}: DigitalBloomLogoProps) {
  const sizes = {
    small: 80,
    default: 160,
    large: 280,
    hero: 500,
  };

  const dimension = sizes[size];

  return (
    <motion.div
      className={`digital-bloom-logo inline-block ${className}`}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.4)) drop-shadow(0 0 35px rgba(255, 0, 255, 0.3))',
      }}
    >
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Main Digital Bloom gradient - cyan to magenta to violet to orange */}
          <linearGradient id="bloomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="1" />
            <stop offset="35%" stopColor="#FF00FF" stopOpacity="1" />
            <stop offset="65%" stopColor="#8A2BE2" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="1" />
          </linearGradient>

          {/* Reverse gradient for variation */}
          <linearGradient id="bloomGradientReverse" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="1" />
            <stop offset="35%" stopColor="#8A2BE2" stopOpacity="1" />
            <stop offset="65%" stopColor="#FF00FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="1" />
          </linearGradient>

          {/* Radial gradient for center glow */}
          <radialGradient id="bloomRadial" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#FF00FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.3" />
          </radialGradient>

          {/* Glow filter for energy effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Stronger glow for particles */}
          <filter id="particleGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Flowing S shape - Digital Bloom */}
        <g filter="url(#glow)">
          {/* Top flowing petal - cyan to magenta */}
          <motion.path
            d="M 250 80 Q 180 60 140 100 Q 100 140 120 200 Q 140 260 200 280 Q 260 300 300 260 Q 340 220 320 160 Q 300 100 250 80 Z"
            fill="url(#bloomGradient)"
            opacity="0.95"
            initial={animated ? { scale: 0.95 } : {}}
            animate={animated ? { scale: [0.95, 1, 0.95] } : {}}
            transition={animated ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : {}}
          />

          {/* Middle connecting spiral - magenta to violet */}
          <motion.path
            d="M 250 260 Q 200 280 180 330 Q 160 380 200 420 Q 240 460 290 440 Q 340 420 360 370 Q 380 320 340 280 Q 300 240 250 260 Z"
            fill="url(#bloomGradientReverse)"
            opacity="0.9"
            initial={animated ? { scale: 1 } : {}}
            animate={animated ? { scale: [1, 1.05, 1] } : {}}
            transition={animated ? { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } : {}}
          />

          {/* Bottom flowing petal - violet to orange */}
          <motion.path
            d="M 250 420 Q 280 440 320 460 Q 360 480 400 460 Q 440 440 440 390 Q 440 340 400 300 Q 360 260 310 280 Q 260 300 250 350 Q 240 400 250 420 Z"
            fill="url(#bloomGradient)"
            opacity="0.95"
            initial={animated ? { scale: 0.95 } : {}}
            animate={animated ? { scale: [0.95, 1, 0.95] } : {}}
            transition={animated ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 } : {}}
          />

          {/* Inner glow core */}
          <motion.circle
            cx="250"
            cy="280"
            r="80"
            fill="url(#bloomRadial)"
            opacity="0.3"
            animate={animated ? { opacity: [0.2, 0.4, 0.2] } : {}}
            transition={animated ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : {}}
          />
        </g>

        {/* Energy particles - floating around the bloom */}
        {animated && (
          <g filter="url(#particleGlow)">
            {/* Cyan particles */}
            <motion.circle
              cx="150"
              cy="120"
              r="4"
              fill="#00FFFF"
              opacity="0.9"
              animate={{
                y: [0, -15, 0],
                opacity: [0.9, 0.4, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.circle
              cx="350"
              cy="150"
              r="3"
              fill="#00FFFF"
              opacity="0.8"
              animate={{
                y: [0, -20, 0],
                x: [0, 5, 0],
                opacity: [0.8, 0.3, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />

            {/* Magenta particles */}
            <motion.circle
              cx="120"
              cy="280"
              r="3.5"
              fill="#FF00FF"
              opacity="0.85"
              animate={{
                y: [0, -12, 0],
                opacity: [0.85, 0.35, 0.85],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              }}
            />
            <motion.circle
              cx="380"
              cy="320"
              r="4"
              fill="#FF00FF"
              opacity="0.9"
              animate={{
                y: [0, -18, 0],
                x: [0, -8, 0],
                opacity: [0.9, 0.4, 0.9],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.2,
              }}
            />

            {/* Violet particles */}
            <motion.circle
              cx="200"
              cy="400"
              r="3"
              fill="#8A2BE2"
              opacity="0.8"
              animate={{
                y: [0, -10, 0],
                opacity: [0.8, 0.3, 0.8],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }}
            />

            {/* Orange particles */}
            <motion.circle
              cx="320"
              cy="450"
              r="3.5"
              fill="#FF8C00"
              opacity="0.9"
              animate={{
                y: [0, -15, 0],
                x: [0, 6, 0],
                opacity: [0.9, 0.4, 0.9],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            />
            <motion.circle
              cx="420"
              cy="400"
              r="4"
              fill="#FF8C00"
              opacity="0.85"
              animate={{
                y: [0, -20, 0],
                opacity: [0.85, 0.35, 0.85],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.7,
              }}
            />

            {/* Additional small particles for richness */}
            <motion.circle
              cx="180"
              cy="200"
              r="2"
              fill="#00FFFF"
              opacity="0.7"
              animate={{
                y: [0, -8, 0],
                opacity: [0.7, 0.2, 0.7],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.8,
              }}
            />
            <motion.circle
              cx="300"
              cy="180"
              r="2.5"
              fill="#FF00FF"
              opacity="0.75"
              animate={{
                y: [0, -12, 0],
                opacity: [0.75, 0.25, 0.75],
              }}
              transition={{
                duration: 3.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2.1,
              }}
            />
          </g>
        )}

        {/* Sparkle effects at key points */}
        {animated && (
          <g opacity="0.6">
            <motion.circle
              cx="250"
              cy="80"
              r="2"
              fill="#FFFFFF"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0,
              }}
            />
            <motion.circle
              cx="400"
              cy="460"
              r="2"
              fill="#FFFFFF"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </g>
        )}
      </svg>
    </motion.div>
  );
}

// Compact version for smaller spaces
export function DigitalBloomMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`inline-block ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="markGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="50%" stopColor="#FF00FF" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
        </defs>
        <path
          d="M 50 10 Q 30 5 20 20 Q 10 35 20 50 Q 30 65 50 70 Q 70 65 80 50 Q 90 35 80 20 Q 70 5 50 10 Z"
          fill="url(#markGradient)"
        />
        <circle cx="50" cy="50" r="15" fill="url(#markGradient)" opacity="0.3" />
      </svg>
    </div>
  );
}

export default DigitalBloomLogo;
