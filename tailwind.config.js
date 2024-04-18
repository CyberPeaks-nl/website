/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      purple: "#7B4B94",
      magenta: "#FF70A6",
      "light-gray": "#E0E0E0",
      "dark-gray": "#1B1B1B",
      white: "#FFFFFF",
    },
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
