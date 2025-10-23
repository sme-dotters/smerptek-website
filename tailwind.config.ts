import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Chrome Dark Blue Theme - Professional & Bold
        chrome: {
          DEFAULT: '#0a1628',
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d8ff',
          300: '#a4bdff',
          400: '#8199ff',
          500: '#6172ff',
          600: '#4a4ff5',
          700: '#3d3ed8',
          800: '#3133ae',
          900: '#2d3189',
          950: '#0a1628', // Main chrome dark
        },
        // Metallic accents
        steel: {
          DEFAULT: '#94a3b8',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Accent color - Single refined accent
        accent: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        // Text colors
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'text-muted': '#94a3b8',
        'text-dark': '#64748b',
        // Background colors - Chrome dark theme
        'bg-primary': '#020617',
        'bg-secondary': '#0a1628',
        'bg-surface': '#0f1729',
        'bg-elevated': '#141d2e',
        'bg-chrome': '#0a1628',
        // Border colors - Subtle chrome
        'border-chrome': 'rgba(148, 163, 184, 0.1)',
        'border-steel': 'rgba(148, 163, 184, 0.2)',
        'border-accent': 'rgba(59, 130, 246, 0.3)',
        // Status colors - Minimal
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        h2: ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.5)',
        'chrome': '0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'chrome-lg': '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-chrome': 'linear-gradient(135deg, #0a1628 0%, #1e293b 100%)',
        'gradient-steel': 'linear-gradient(135deg, #475569 0%, #1e293b 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'gradient-radial-accent': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        'starfield': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"%3E%3Ccircle cx=\"20\" cy=\"30\" r=\"0.5\" fill=\"%23fff\" opacity=\"0.8\"/%3E%3Ccircle cx=\"60\" cy=\"15\" r=\"0.3\" fill=\"%23fff\" opacity=\"0.6\"/%3E%3Ccircle cx=\"80\" cy=\"70\" r=\"0.4\" fill=\"%23fff\" opacity=\"0.7\"/%3E%3Ccircle cx=\"30\" cy=\"80\" r=\"0.3\" fill=\"%23fff\" opacity=\"0.5\"/%3E%3Ccircle cx=\"90\" cy=\"40\" r=\"0.5\" fill=\"%23fff\" opacity=\"0.8\"/%3E%3C/svg%3E')",
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
