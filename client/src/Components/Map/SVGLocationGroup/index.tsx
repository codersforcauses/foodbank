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
  const translationEndIndex = transform.indexOf(')');
  const translation = transform.slice(0, translationEndIndex + 1);

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

      <text transform={translation}> test </text>
    </g>
  )
}

export default SVGLocationGroup
