import React from 'react'
import { Location } from '../../../lib/types'
import assetMap, { AssetMapProps } from '../assets/AssetMap'
interface Props {
  name: Location
  width: string
  height: string
  transform: string
  className: string
  image: string
  onClick: (area: Location) => void
}

const SVGLocationGroup: React.FC<Props> = ({
  name,
  width,
  height,
  transform,
  className,
  image,
  onClick
}) => {
  if (name === Location.bg) {
    return (
      <g id='bg'>
        <image
          width={width}
          height={height}
          transform={transform}
          xlinkHref={assetMap[image as keyof AssetMapProps]}
        />
      </g>
    )
  }
  return (
    <g id={image} onClick={() => onClick(name)}>
      <g transform={transform}>
        <image
          width={width}
          height={height}
          className={className}
          xlinkHref={assetMap[image as keyof AssetMapProps]}
        />
      </g>
    </g>
  )
}

export default SVGLocationGroup
