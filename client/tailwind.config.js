/* eslint-disable no-undef */
module.exports = {
  // purging does not work for some reason without this
  purge: [
    './public/index.html',
    './src/**/*.tsx',
    './src/**/**/*.tsx',
    './src/**/**/**/*.tsx',
    './src/**/**/**/**/*.tsx'
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
      black: '#000000'
    },
    extend: {
      fontFamily: {
        sans: ['Bliss'],
        serif: ['Abraham']
      },
      minWidth: {
        '320': '320px'
      },
      width: {
        'tb1': '300px',
        'tb2': '500px',
        'tb3': '550px',
        'tb4': '600px'
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
