import { useCallback } from 'react'

interface svgProps {
  name: string
  className?: string
  viewBox?: string
  fill?: string
  stroke?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

const SolidArrowCircleLeft =
  'M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
const SolidArrowCircleRight =
  'M12 0a12 12 0 100 25 12 12 0 000-25zm1 19v-5H6v-3h7V6l6 6-6 7z'
const SolidCheckCircle =
  'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
const SolidChevronDown =
  'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
const SolidHamburger =
  'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
const SolidEmojiSad =
  'M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z'

const Svg = (props: svgProps) => {
  const svgPath = useCallback(() => {
    switch (props.name) {
      case 'SolidArrowCircleLeft':
        return (
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d={SolidArrowCircleLeft}
          />
        )
      case 'SolidArrowCircleRight':
        return (
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d={SolidArrowCircleRight}
          />
        )
      case 'SolidCheckCircle':
        return (
          <path fillRule='evenodd' clipRule='evenodd' d={SolidCheckCircle} />
        )
      case 'SolidChevronDown':
        return (
          <path fillRule='evenodd' clipRule='evenodd' d={SolidChevronDown} />
        )
      case 'SolidHamburger':
        return <path fillRule='evenodd' clipRule='evenodd' d={SolidHamburger} />
      default:
        return <path fillRule='evenodd' clipRule='evenodd' d={SolidEmojiSad} />
    }
  }, [props.name])

  return (
    <svg xmlns='http://www.w3.org/2000/svg' {...props}>
      {svgPath()}
    </svg>
  )
}

export default Svg
