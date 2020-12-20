/* eslint-disable no-undef */
module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#671e75',
      blue: '#00acd0',
      orange: '#df7400',
      teal: '#47d5cd',
      red: '#e8352e',
      'dark-grey': '#2c2e35',
      grey: '#83847a',
      'light-grey': '#cecfcb',
      white: '#ffffff',
      black: '#000000',
      purple: '#662577'
    },
    extend: {
      fontFamily: {
        sans: ['Bliss'],
        serif: ['Abraham']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
