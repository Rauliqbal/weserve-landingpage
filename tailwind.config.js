/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
        'clash-display': ['Clash Display', 'sans-serif']
      },
      container: {
        center: true,
        screens: {
          xl: '1130px'
        }
      },
      colors: {
        primary: "#640EF1",
        secondary: '#5D5D7C',
        black: '#080C2E'
      }
    },
  },
  plugins: [],
}

