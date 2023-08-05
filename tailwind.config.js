/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",],
  theme: {
    extend: {
    fontFamily: {
      raleway: ['Raleway'],
      handwritten: ['Architects Daughter'],
      primary: ['Tourney'],
    },
    },
  },
  plugins: [],
}

