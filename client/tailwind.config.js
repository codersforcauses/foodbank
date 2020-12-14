/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme')

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
      'dark-grey': '#2c2e35',
      grey: '#83847a',
      'light-grey': '#cecfcb',
      white: '#ffffff',
      black: '#000000'
    },
    extend: {
      fontFamily: {
        sans: ['Bliss', ...defaultTheme.fontFamily.sans],
        serif: ['Abraham', ...defaultTheme.fontFamily.serif]
      },
      boxShadow: {
        primary: 'inset -1px -4px 0px 1px #4c1656',
        blue: 'inset -1px -4px 0px 1px #008ca9',
        orange: 'inset -1px -4px 0px 1px #b86000',
        teal: 'inset -1px -4px 0px 1px #2dc7bf'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
