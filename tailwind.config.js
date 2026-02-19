/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        black: { 950: '#140e0b' },
        gray: { 950: '#BEAEA3' },
        orange: { 550: '#FF6500' },
        brown: { 510: '#D0B8A6', 550: '#BEAEA3', 950: '#5a4e46' },
      },
    },
  },
  plugins: [],
};
