/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        '#FFF3EE': 'FFF3EE',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Section.png')",
      },
      screens: {
        'large': '740px',
        'small': '370px',
      }
    },
  },
  plugins: [],
}