const { yellow } = require("@mui/material/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abril: ['"Abril Fatface"', "cursive"],
      },
      colors: {
        text_Colors: {
          yellow: "#FFF500",
          blue: "#72D9F9",
        },
      },
    },
  },
  plugins: [],
};
