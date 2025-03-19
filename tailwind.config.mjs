/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        passionOne: ['Passion One', 'sans-serif'],
        corbel: ['Corbel', 'sans-serif'],
        fw: ['Font Awesome Pro'],
        fwb: ['Font Awesome Brands'],
        jockey: ['Jockey One', 'sans-serif']
      },
      textShadow: {
        display: '0 4px 4px rgba(0, 0, 0, 0.25)'
      },
      boxShadow: {
        runningLine: '0px 0px 20px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      )
    })
  ]
}
