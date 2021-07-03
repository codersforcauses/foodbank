import React from 'react'
import { Location } from '../../../lib/types'
import assetMap, { AssetMapProps } from '../assets/AssetMap'
import Townbox from '../../Townbox'
import {DescriptionArray} from '../types'

interface Props {
  name: Location
  width: string
  height: string
  transform: string
  className: string
  desc : DescriptionArray
  image: string
  onClick: (area: Location) => void
}

const SVGLocationGroup: React.FC<Props> = ({
  name,
  width,
  height,
  transform,
  className,
  desc,
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
      {
      className.includes('map-selected') &&  
        <foreignObject transform={translation} width='2000' height='2000'>
          <Townbox 
            maxWidth={desc.maxHeight} 
            maxHeight={desc.maxWidth}
            headerColor={desc.headerColor}
            headerText={desc.headerText}
            captionText={desc.captionText}
            showButton = {desc.showButton}
            />
        </foreignObject>
      }
    </g>
  )
}

export default SVGLocationGroup
