module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
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
    screens: {
      sm: '640px',
      md: '768px',
      recipe_md: '900px',
      lg: '1024px',
      recipe_lg: '1100px',
      recipe_xl: '1250px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        sans: ['Bliss'],
        serif: ['Abraham']
      },
      width:{
        '128':'28rem'
      },
      keyframes:{
        movement:
        {'0%, 100%':{top:'0'},
        '50%':{top:'10'}
      }
      },
      animation:{
        movement:'movement 1.5s ease-in infinite'
      }
    }
  },
  variants: {
    extend: {}
  }
}
