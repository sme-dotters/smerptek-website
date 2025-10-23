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
        // Premium Dark Theme
        dark: {
          DEFAULT: '#0a0a0f',
          100: '#1a1a24',
          200: '#151520',
          300: '#0f0f18',
          400: '#0a0a0f',
          500: '#050508',
        },
        // Vibrant Gradients
        neon: {
          purple: '#a855f7',
          pink: '#ec4899',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          orange: '#f97316',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'gradient-blue-purple': 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
        'gradient-pink-orange': 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
        'gradient-cyan-blue': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(168, 85, 247, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(236, 72, 153, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(59, 130, 246, 0.3) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(249, 115, 22, 0.3) 0px, transparent 50%), radial-gradient(at 0% 0%, rgba(6, 182, 212, 0.3) 0px, transparent 50%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'rotate-slow': 'rotate 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(168, 85, 247, 0.6)',
        'glow-pink': '0 0 40px rgba(236, 72, 153, 0.6)',
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.6)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.6)',
        'luxury': '0 20px 60px rgba(168, 85, 247, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
