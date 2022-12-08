/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        bglightblue: '#D1F6F9',
        textblue: '#14A0B6',
        bghover:'#3de0e0'
      },
    },
  },
  plugins: [],
}
