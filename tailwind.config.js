module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#671e75',
      blue: '#00acd0',
      orange: '#df7400',
      teal: '#47d5cd',
      red: '#e8352e',
      grey: {
        light: '#cecfcb',
        DEFAULT: '#83847a',
        dark: '#2c2e35'
      },
      white: '#ffffff',
      black: '#000000',
      green: '#9dcd5a'
    },
    extend: {
      fontFamily: {
        sans: ['Bliss'],
        serif: ['Abraham']
      },
      width:{
        '128':'28rem'
      },
      keyframe:{
        movement:
        {'0%, 100%':{top:'0'},
        '50%':{top:'10%'}
      }
      },
      animation:{
        movement:'movement 1.5s ease-in infinite'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
