/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      dominant: '#2C016D',
      complementary: '#E4E4E4',
      accent: '#D7AD0D',
      black: '#010101',
    },
  },
  plugins: [],
};
