/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
      colors: {
        'primary': '#132786',
        'secondary': '#FBCC03',
      },
    },
  },
  plugins: [],
}
