import svgProps from './SvgProp'

const OutlineHamburger = (props: svgProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  )
}

export default OutlineHamburger
