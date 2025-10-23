'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface FadeInWhenVisibleProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

export function FadeInWhenVisible({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
  className = '',
}: FadeInWhenVisibleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const directionOffsets = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionOffsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children animation
interface StaggeredFadeInProps {
  children: ReactNode;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function StaggeredFadeIn({
  children,
  staggerDelay = 0.1,
  direction = 'up',
  className = '',
}: StaggeredFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const directionOffsets = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  const offset = directionOffsets[direction];

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

// Scale in animation
export function ScaleInWhenVisible({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = '',
}: Omit<FadeInWhenVisibleProps, 'direction'>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide and fade combination
export function SlideInWhenVisible({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  distance = 100,
  once = true,
  className = '',
}: FadeInWhenVisibleProps & { distance?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const directionOffsets = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionOffsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Reveal with growing line
export function RevealWithLine({
  children,
  delay = 0,
  once = true,
  className = '',
}: Omit<FadeInWhenVisibleProps, 'direction' | 'duration'>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Animated line */}
      <motion.div
        className="absolute left-0 top-0 h-full w-1 bg-gradient-bloom"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        style={{ transformOrigin: 'top' }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: delay + 0.2, ease: 'easeOut' }}
        className="pl-6"
      >
        {children}
      </motion.div>
    </div>
  );
}

// Typewriter effect
export function TypewriterText({
  text,
  delay = 0,
  speed = 0.05,
  once = true,
  className = '',
}: {
  text: string;
  delay?: number;
  speed?: number;
  once?: boolean;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.1,
            delay: delay + index * speed,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Glowing border reveal
export function GlowBorderReveal({
  children,
  delay = 0,
  once = true,
  className = '',
}: Omit<FadeInWhenVisibleProps, 'direction' | 'duration'>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-xl ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'linear-gradient(135deg, #00FFFF, #FF00FF, #8A2BE2, #FF8C00)',
          padding: '2px',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <div className="w-full h-full bg-bg-surface rounded-xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default FadeInWhenVisible;
