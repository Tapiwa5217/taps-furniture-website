/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito']
      },
      colors: {
        custom: {
        'primary-brand': '#ab755b',
        'secondary-brand' :'#bc976c',
        'tertiary-brand' :'#7f4e25'
        }
      },
    },
  },
  plugins: [],
}
