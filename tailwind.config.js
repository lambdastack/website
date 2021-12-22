const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './content/**/*.{md, html, js}',
    './layouts/**/*.{html, js}',
    './**/*.{md, html, js}'
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
    plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-children')
  ],
}
