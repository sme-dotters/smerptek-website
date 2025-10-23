'use client';

import { Calendar } from 'lucide-react';

interface CalendlyButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function CalendlyButton({
  variant = 'primary',
  size = 'md',
  text = 'Schedule a Demo',
  className = '',
}: CalendlyButtonProps) {
  // Replace with actual Calendly link when available
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/smerptek';

  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    ghost: 'hover:bg-white/10 text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const openCalendly = () => {
    // In production, this would open Calendly popup
    // For now, open in new tab
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={openCalendly}
      className={`
        flex items-center gap-2 rounded-lg font-medium transition-all duration-300
        shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      aria-label="Schedule a demo with SMERP TEK"
    >
      <Calendar className="w-5 h-5" />
      {text}
    </button>
  );
}
