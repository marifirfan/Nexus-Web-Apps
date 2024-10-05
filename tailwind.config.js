/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        'blue1': '#2C99FF',
        'blue-text': '#005BB0',
        'blue-black': '#002A51',
      },
      screens: {
        'miniphone' : {'min' : '1px' , 'max': '399px'},
        'phone': {'min': '400px', 'max': '639px'},
        'tablet': {'min': '640px', 'max': '1023px'}, 
        'laptop': {'min': '1024px', 'max': '1279px'}, 
        'desktop': {'min': '1280px'}, 
    }    
    },
  },
  plugins: [],
}

