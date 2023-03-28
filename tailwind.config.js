/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primario': '#46B6B8',
        'secundario': '#A4DBDC',
        'oscuro': '#245E5F',
        'primarioOscuro': '#378F90',
        'botonOscuro': '#142C2C',
        'botonClaro': '#407070',
      },
      fontFamily: {
        sans: ['Signika', 'sans-serif'],
      },
    }
  },
  plugins: [],
};