import React from 'react'
import { Location } from '../../../lib/types'

interface Props {
  name: Location
  width: number
  height: number
  transform: string
  image: string
  className: string
  onClick: (area: Location) => void
}

const SVGLocationGroup: React.FC<Props> = ({
  name,
  width,
  height,
  transform,
  image,
  className,
  onClick
}: Props) => {
  return (
    <g id={name} onClick={() => onClick(name)}>
      <g transform={transform}>
        <image
          width={width}
          height={height}
          className={className}
          xlinkHref={image}
        />
      </g>
    </g>
  )
}

export default SVGLocationGroup
