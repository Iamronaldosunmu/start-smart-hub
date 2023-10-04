/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			inter: ["Inter", "sans-serif"],
			DMSans: ["DM Sans", "sans-serif"],
		},
    extend: {
      backgroundColor:{
        '#FFF3EE': 'FFF3EE',
        'custom-purple': '#331B3B',
        'hover-custom-purple': "#6e3a65"
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Section.png')",
        'EventImage': "url('src/assets/event.png')",
        'ServiceGrid': "url('src/assets/img1.png')",
      },
      screens: {
        'large': '740px',
        'small': '370px',
      },
      colors: {
        'custom-purple': "#331B3B",
        'billing-purple': '#9E77ED'
      },


    },
  },
  plugins: [],
}