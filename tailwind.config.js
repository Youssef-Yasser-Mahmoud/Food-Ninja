/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily:{
        'Nunito' :['Nunito']
      },
      colors:{
        secondary:{
          100:'#E2E2D5',
          200:'#888883'
        }
      }
    },
  },
  plugins: [],
}

