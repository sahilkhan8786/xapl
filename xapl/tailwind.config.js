/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#051342',
        secondry: '#2E2E44',
        textPrimary: '#233470',
        textLight: '#34343C',
        textSecondry: '#14446F',
        detailBG: '#19307ED1',
        footerPrimary: '#91ADC5',
        primaryD: '#5D5FEF',
        navInput: '#F9FAFB',
        contentBG: '#F5F6F7',
        contentBorder: '#F8F9FA',
        dashboardMain: '#05004E',
        dashboardSecondry: '#444A6D',


      },
      fontFamily: {
        lato: '"Lato", sans-serif',
        poppins: '"Poppins", sans-serif'
      }

    },
  },
  plugins: [],
}