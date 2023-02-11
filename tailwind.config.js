/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      vs: "100px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        desirered: "#E63946",
        cadetblue: "#1D3557",
      },
    },
  },
  plugins: [],
};
