/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      purple: "#7B4B94",
      magenta: "#FF70A6",
      "light-gray": "#CDD3CE",
      "dark-gray": "#1b1b1b",
      white: "#FFFFFF",
    },
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
