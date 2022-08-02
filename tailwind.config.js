/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
      }),
      colors: {
        // white: "#ffffff",
        // black: "#000000",
        pink1: '#FF7C98',
        pink2: '#E01883',
        navy1: '#224289',
        beige1: '#F9F8F7',
        brown1: '#918984',
        brown2: '#726454',
        white: '#FEFEFE',
        gray: '#CDCCD5',
        gray2: '#7E7E81',
        black1: '#2F231C',
        black2: '#321C15',
      },
    },
  },
  plugins: [],
};