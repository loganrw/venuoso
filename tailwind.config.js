/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,sass,ts}",
    "./src/app/**",
  ],
  theme: {
    extend: {
      colors: {
        'v-light-purple': '#71677c',
        'v-purple': '#49184f',
        'v-purple-hover': "#5a2260",
        'v-blue': '#91a6b8',
        'v-rose': '#945d5e',
        'v-tan': '#dda77b'
      },
      fontFamily: {
        'sans': ['"Source Sans 3"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

