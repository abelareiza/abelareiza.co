module.exports = {
  mode: 'jit',
  purge: ["./public/**/*.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#444444',
        'monarch-blue': '#4E68D2',
        'primary-orange': '#ED864F',
        'island': '#F8EDDA',
        'pearl': '#FCF8ED',
      },
    },
  },
  plugins: [],
}
