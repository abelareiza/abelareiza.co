module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        satoshi: "'Satoshi', sans-serif",
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("@themesberg/flowbite/plugin")],
};
