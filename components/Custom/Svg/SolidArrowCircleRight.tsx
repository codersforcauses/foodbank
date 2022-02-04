import svgProps from './SvgProp'

const SolidArrowCircleRight = (props: svgProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        d='M12 0a12 12 0 100 25 12 12 0 000-25zm1 19v-5H6v-3h7V6l6 6-6 7z'
      />
    </svg>
  )
}

export default SolidArrowCircleRight
