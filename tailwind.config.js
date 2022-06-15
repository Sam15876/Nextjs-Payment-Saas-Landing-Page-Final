/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AFC2BB',
        secondary: '#FF521C'
      }
    },
  },
  plugins: [],
}
