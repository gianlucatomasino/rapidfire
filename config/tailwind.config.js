/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.hbs', './app/index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
