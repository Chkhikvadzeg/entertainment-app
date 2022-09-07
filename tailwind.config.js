/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1440px'
    },
    extend: {
      colors: {
        'mainRed': '#FC4747',
        'darkBlue': '#10141E',
        'grayishBlue': '#5A698F',
        'semiDarkBlue': '#161D2F',
      },
    },
  },
  plugins: [
    require("tailwindcss-hyphens")
  ]
}
