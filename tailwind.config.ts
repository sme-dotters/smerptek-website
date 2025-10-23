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
        // Digital Bloom - Obsidian base (pure blacks)
        obsidian: {
          DEFAULT: '#030305',
          light: '#0A0B0F',
        },
        // Chrome pattern overlay
        chrome: {
          DEFAULT: '#1A1B1E',
          pattern: 'rgba(26, 27, 30, 0.3)',
        },
        // Digital Bloom - Vibrant accent colors
        'cyan': {
          DEFAULT: '#00FFFF',
          500: '#00FFFF',
          400: '#33FFFF',
          300: '#66FFFF',
          glow: 'rgba(0, 255, 255, 0.6)',
          intense: 'rgba(0, 255, 255, 0.9)',
        },
        'magenta': {
          DEFAULT: '#FF00FF',
          500: '#FF00FF',
          400: '#FF33FF',
          300: '#FF66FF',
          glow: 'rgba(255, 0, 255, 0.5)',
        },
        'violet': {
          DEFAULT: '#8A2BE2',
          500: '#8A2BE2',
          dark: '#6A1BB2',
        },
        'orange': {
          DEFAULT: '#FF8C00',
          500: '#FF8C00',
          400: '#FF9933',
          light: '#FFA500',
          glow: 'rgba(255, 140, 0, 0.5)',
        },
        // Main brand colors (Digital Bloom)
        primary: '#00FFFF',
        'primary-hover': '#33FFFF',
        accent: '#FF00FF',
        'accent-hover': '#FF33FF',
        secondary: '#8A2BE2',
        'secondary-hover': '#9A3BF2',
        // Text colors for dark theme
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
        'text-tertiary': '#64748b',
        'text-inverse': '#0a0e1a',
        // Background colors (Digital Bloom dark theme)
        'bg-primary': '#030305',
        'bg-surface': '#0A0B0F',
        'bg-secondary': '#1A1B1E',
        'bg-elevated': '#1e2533',
        'bg-dark': '#000000',
        // Border colors
        'border-default': 'rgba(255, 255, 255, 0.1)',
        'border-hover': '#00d4ff',
        'border-subtle': 'rgba(255, 255, 255, 0.05)',
        // Status colors
        success: '#00dc82',
        warning: '#ffc72b',
        error: '#ff5b11',
      },
      fontFamily: {
        heading: ['Inter', 'Manrope', 'sans-serif'],
        body: ['Inter', 'Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': '4.5rem',
        'display-lg': '3.5rem',
        h1: '2.75rem',
        h2: '2.25rem',
        h3: '1.75rem',
        h4: '1.375rem',
        'body-lg': '1.125rem',
        body: '1rem',
        'body-sm': '0.875rem',
        caption: '0.75rem',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.1)',
        md: '0 4px 6px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
        lg: '0 10px 24px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3)',
        xl: '0 20px 40px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.4)',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)',
        'glow-magenta': '0 0 20px rgba(255, 0, 229, 0.4), 0 0 40px rgba(255, 0, 229, 0.2)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      backgroundImage: {
        // Digital Bloom gradients
        'gradient-bloom': 'linear-gradient(135deg, #00FFFF 0%, #FF00FF 35%, #8A2BE2 65%, #FF8C00 100%)',
        'gradient-hero': 'linear-gradient(135deg, #00FFFF 0%, #FF00FF 35%, #8A2BE2 65%, #FF8C00 100%)',
        'gradient-radial': 'radial-gradient(circle at center, #00FFFF 0%, #FF00FF 50%, #8A2BE2 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(0, 255, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
        'gradient-dark': 'linear-gradient(180deg, #030305 0%, #0A0B0F 50%, #030305 100%)',
        'gradient-cyan-magenta': 'linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%)',
        'gradient-purple-orange': 'linear-gradient(135deg, #8A2BE2 0%, #FF8C00 100%)',
        'circuit-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300FFFF\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
