import React from 'react'

export interface ArrowProps {
  direction: 'left' | 'right'
  onClick: () => void
  disabled: boolean
  className: string
}

const leftSvg = (
  <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
)
const rightSvg = <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />

const Arrow: React.FC<ArrowProps> = ({
  direction,
  onClick,
  disabled,
  className
}) => {
  const svg = direction === 'left' ? leftSvg : rightSvg
  return (
    <svg
      onClick={onClick}
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {svg}
    </svg>
  )
}

export default Arrow
