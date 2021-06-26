// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Location } from '../../lib/types'
import svgData from './svgImageData.json'
import SVGLocationGroup from './SVGLocationGroup'

const Map: React.FC = () => {
  // Used because SVG does not scale properly without
  const [height, setHeight] = useState(0)
  const elementRef = useRef(null as null | HTMLDivElement)
  const [selected, onSelect] = useState<Location | null>(null)

  useEffect(() => {
    if (elementRef?.current?.clientHeight) {
      setHeight(elementRef?.current?.clientHeight)
    }
  }, []) //empty dependency array so it only runs once at render

  const onMapClick = (area: Location) => {
    selected === area ? onSelect(null) : onSelect(area)
  }

  // Data can be made from dev/svgParse.py
  return (
    <div
      ref={elementRef}
      className='flex-auto 2xl:flex-none xl:flex-none 2xl:h-4/5 xl:h-4/5 flex justify-center'
    >
      {height === 0 ? null : (
        <div className='svgrow'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 1000 490.56'
            height={height}
            overflow='scroll'
          >
            {svgData.groupArray.map(group => (
              <SVGLocationGroup
                key={group.id}
                name={Location[group.id as keyof typeof Location]}
                width={group.width}
                height={group.height}
                transform={group.transform}
                className={
                  Location[group.id as keyof typeof Location] === selected
                    ? 'map-selected'
                    : 'map-unselected'
                }
                onClick={onMapClick}
                image={group.id}
              />
            ))}
          </svg>
        </div>
      )}
    </div>
  )
}

export default Map
