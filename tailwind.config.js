module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        merriweather: "'Merriweather Sans', sans-serif",
      },
    },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
