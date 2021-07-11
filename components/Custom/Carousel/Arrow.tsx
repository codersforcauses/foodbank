export interface ArrowProps {
  direction: 'left' | 'right'
  disabled?: boolean
  className: string
  onClick: () => void
}

const leftSvg =
  'M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'
const rightSvg = 'M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z'

const Arrow = ({ direction, disabled, ...props }: ArrowProps) => {
  const path = direction === 'left' ? leftSvg : rightSvg
  return (
    <button {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d={path} />
      </svg>
    </button>
  )
}

export default Arrow
