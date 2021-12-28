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
        'dark-grey': '#3E3E3E',
        'primary-blue': '#3245B3',
        'primary-orange': '#FF8167',
        'island': '#F8EDDA',
        'pearl': '#FCF8ED',
      },
    },
  },
  plugins: [],
}