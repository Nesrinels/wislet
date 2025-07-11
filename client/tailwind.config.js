/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      'jasmine':{
        100: "#FFDC73",
        50: "rgba(255,220,115,0.5)",
        20: "rgba(255,220,115,0.2)",
      },
      'yellow': "#F2C94C",
      'goldenrod':{
        100: "#D4A017",
        40: "rgba(212,160,23,0.4)",
      },
      'background': "#0B0B0C",
      'seasalt': "#FAFAF8",
      'transparent': 'transparent',
      'black':{
        100: "black",
        50: "rgba(0,0,0,0.5)",
      },
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