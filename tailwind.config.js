/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './public/index.html',
],
  theme: {
    extend: {
      fontFamily: {
        moderat: ["Moderat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
