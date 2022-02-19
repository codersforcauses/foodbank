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
      animation: {
        vibrate: 'vibrate 1s ease-in-out 1',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '5%, 25%, 45%, 65%, 85%': { transform: 'translateX(2rem)' },
          '15%, 35%, 55%, 75%, 95%': { transform: 'translateX(-2rem)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      }
    }
  },

  variants: {
    margin: ['responsive', 'hover'],

    extend: {}
  },

  plugins: [require('tailwind-scrollbar-hide')]
}
