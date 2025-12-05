import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      colors: {
        forest: {
          50: '#f2fdf4',
          100: '#e1fbe6',
          200: '#c3f5cd',
          300: '#92eaac',
          400: '#56d685',
          500: '#2fb563',
          600: '#20914d',
          700: '#1d7441',
          800: '#1a5d38',
          900: '#164c30',
          950: '#082a19',
        },
        stone: {
          850: '#1c1917',
        },
        sand: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
        },
      },
    },
  },
  plugins: [],
};

export default config;


