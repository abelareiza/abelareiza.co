module.exports = {
  mode: 'jit',
  purge: ["./**/*.html"],
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'mono': ['Space Mono', 'monospace'],
    },
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