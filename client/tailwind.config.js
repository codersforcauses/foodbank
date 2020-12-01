module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#671e75',
      blue: '#00acd0',
      orange: '#df7400',
      teal: '#47d5cd',
      'dark-grey': '#2c2e35',
      'light-grey': '#cecfcb',
      white: '#ffffff',
      black: '#000000'
      // greenish-dark-grey: #83847A
      // greenish-light-grey: #C6C6BC
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
