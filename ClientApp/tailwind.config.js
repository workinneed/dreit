/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{js,html}", "./src/**/*.{js,jsx,html}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      transitionProperty: {
        height: "height",
        width: "width",
      },
      colors: {
        gold: "#BEAD8F",
      },
      fontFamily: {
        primary: "chamberi",
        cbold: "chamberi-bold",
      },
    },
  },
  plugins: [],
};
