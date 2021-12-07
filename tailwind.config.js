module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
      black: '#000000'
    },
    extend: {
      fontFamily: {
        sans: ['Bliss'],
        serif: ['Abraham']
      }
    },
    triangles: {
      // defaults to {}
      up: {
        direction: 'up', // one of 'left', 'right', 'up', 'down', 'left-up', 'left-down', 'right-up', and 'right-down'
        size: '1rem', // defaults to defaultSize
        height: '1em', // defaults to half the size; has no effect on the diagonal directions (e.g. 'left-up')
        color: '#df7400' // defaults to defaultColor
      }
    }
  },
  variants: {
    extend: {},
    triangles: [] // defaults to []
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-triangles')({
      componentPrefix: 'c-', // defaults to 'c-'
      defaultSize: '1em', // defaults to '1em'
      defaultColor: 'currentColor' // defaults to 'currentColor'
    })
  ]
}
