import theme from './theme'
import '../src/index.css'

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme
  },
  options: {
    storySort: {
      order: ['Branding', 'Component', 'Page']
    }
  },
  backgrounds: {
    default: 'Light Grey',
    values: [
      {
        name: 'Primary',
        value: '#671e75'
      },
      {
        name: 'Orange',
        value: '#df7400'
      },
      {
        name: 'Teal',
        value: '#47d5cd'
      },
      {
        name: 'Blue',
        value: '#00acd0'
      },
      {
        name: 'Dark Grey',
        value: '#2c2e35'
      },
      {
        name: 'Grey',
        value: '#83847a'
      },
      {
        name: 'Light Grey',
        value: '#cecfcb'
      },
      {
        name: 'White',
        value: '#ffffff'
      }
    ]
  }
}

export const decorators = [Story => <Story />]
