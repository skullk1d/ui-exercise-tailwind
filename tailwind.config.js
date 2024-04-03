const { blackA, violet, mauve } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...violet,
        ...mauve,
      },
    },
  },
  plugins: [],
};
