// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      screens: {
        gf: { max: "310px" },
        xs: "320px",
        sm: "500px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      gridTemplateRows: {
        0: "0fr",
        1: "1fr",
      },
    },
    colors: {
      system: {
        800: "#003352",
        700: "#0B2433",
        600: "#0A2C43",
        500: "#00FEB5",
        400: "#3492CF",
        300: "#00D1EB",
        100: "#FEFFFF",
      },
      typography: {
        100: "#FEFFFF",
        200: "#00FFB6",
        300: "#00FEB5",
        400: "#0B2433",
      },
    },
  },
  plugins: [],
};
