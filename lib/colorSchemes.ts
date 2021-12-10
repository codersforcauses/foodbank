import { ColorScheme } from 'lib/types'

const primaryScheme: ColorScheme = {
  name: 'primaryScheme',
  bg: 'bg-primary',
  header: 'text-teal',
  text: 'text-white',
  buttonText: 'text-black',
  buttonBg: 'bg-teal'
}

const tealScheme: ColorScheme = {
  name: 'tealScheme',
  bg: 'bg-teal',
  header: 'text-primary',
  text: 'text-black',
  buttonText: 'text-white',
  buttonBg: 'bg-primary'
}

const orangeScheme: ColorScheme = {
  name: 'orangeScheme',
  bg: 'bg-orange',
  header: 'text-primary',
  text: 'text-black',
  buttonText: 'text-white',
  buttonBg: 'bg-primary'
}

export { primaryScheme, tealScheme, orangeScheme }
