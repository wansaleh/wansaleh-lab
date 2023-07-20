import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['Boska', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.zinc,
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwindcss-easing'),

    plugin(function ({ addVariant }) {
      addVariant('firefox', '@supports (-moz-appearance: none)');
      addVariant('safari', '@supports (background: -webkit-named-image(i))');
      addVariant('chrome', '@supports (-webkit-app-region: inherit)');
    }),
  ],
} satisfies Config;
