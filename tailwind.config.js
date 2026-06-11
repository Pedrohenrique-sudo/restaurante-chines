/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'red-china': '#C41E3A',
        'gold': '#D4A017',
        'jade': '#2E8B57',
        'black-lacquer': '#0A0A0A',
        'cream': '#FFFDD0',
        'soy': '#8B4513',
        'dragon': '#DC143C',
        'lantern': '#FF4500',
        'bamboo': '#4A7C59',
        'porcelain': '#F0F4FF',
        'dark-bg': '#0F0F0F',
        'dark-card': '#1A1A1A',
        'dark-border': '#2A2A2A',
      },
      fontFamily: {
        'display': ['"Noto Serif SC"', 'serif'],
        'body': ['"Noto Sans SC"', 'sans-serif'],
        'decorative': ['"ZCOOL XiaoWei"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'lantern-swing': 'swing 3s ease-in-out infinite',
        'steam': 'steam 4s ease-in-out infinite',
        'chopstick': 'chopstick 2s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '100%': { transform: 'translateY(-40px) scale(1.5)', opacity: '0' },
        },
        chopstick: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-5deg)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 160, 23, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 160, 23, 0.6)' },
        },
      },
      backgroundImage: {
        'chinese-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23D4A01710' stroke-width='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
