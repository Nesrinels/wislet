/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      'yellow': "#F2C94C",
      'goldenrod': "#D4A017",
      'goldenrod-40': 'rgba(212,160,23,0.4)',
      'background': "#0B0B0C",
      'seasalt': "#FAFAF8",
      'transparent': 'transparent',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
       fontFamily: {
        nohemi: ['Nohemi', 'sans-serif'],
      },
    }
  },
  plugins: [],
}