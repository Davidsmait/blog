const { addIconSelectors } = require('@iconify/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: withOpacity('--accent'),
        'accent-bg': withOpacity('--accent-bg'),
        'accent-secondary': withOpacity('--accent-secondary'),
        'accent-glow': withOpacity('--accent-glow')
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        display: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Instrument Serif', ...defaultTheme.fontFamily.serif]
      },
      letterSpacing: {
        'tighter-brand': '-0.04em',
        'tight-brand': '-0.02em'
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px'
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)'
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), addIconSelectors(['tabler'])],
  darkMode: ['selector', '[data-mode="dark"]']
}
