/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['"Montserrat"', 'sans-serif'], // Pastikan ada fallback font
      },
      colors: {
        'blue1': '#2C99FF',
        'blue-text': '#005BB0',
        'blue-black': '#002A51',
      },
    },
  },
  plugins: [],
}

