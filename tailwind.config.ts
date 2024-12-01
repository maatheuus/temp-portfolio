import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fenix: ['Fenix', 'serif'],
        chivo: ['Chivo', 'serif'],
        alice: ['Alice', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          black: '#110B11',
          white: '#EEF4ED',
          grey: '#737373',
        },
        second: {
          yellow: '#FFBA08',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
