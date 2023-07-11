/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    colors: {
      'main': '#ca8a03',
      'mainDarker': '#a16207',
      'mainLighter': '#eab308',
      'mainVeryLighter': '#facc15',
      'mainUltraLighter': '#ebc834',
      'black': 'black',
      'white': 'white',
      'green':  'rgb(22 163 74)',
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        cardBox: "0 0 5px 5px rgba(189,155,25,1), 0 0 5px 5px rgba(60,60,60,1)",
        boxMain: "0 0 2px 2px rgba(0,0,0,0.3)",
      },
      plugins: [],
    },
  },
};

