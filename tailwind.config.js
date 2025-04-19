/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        bColor: '#F9FAFC',
        secondary: '#BFC6D4',
        active: '#E2EBF3',
        focus: '#BBDEFB'
      },
      fontFamily: {
         montserrat: ['Montserrat', 'sans-serif'],
      }
    }
  }
};
