// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Location } from '../../lib/types'
import svgData from './svgImageData.json'
import mapImg from './assets/TuckerMap.jpg'
import descData from './assets/description.json'
import Townbox from '../Townbox'
const Map: React.FC = () => {
  // Used because SVG does not scale properly without
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const elementRef = useRef(null as null | HTMLDivElement)

  const [selected, onSelect] = useState<Location | null>(null)
  const [scale, setScale] = useState(1)
  
  useEffect(() => {
    if (elementRef?.current?.clientHeight) {
      setHeight(elementRef?.current?.clientHeight)
    }
  }, []) //empty dependency array so it only runs once at render

  useEffect(() => {
    if (elementRef?.current?.clientWidth) {
      setWidth(elementRef?.current?.clientWidth)
      setScale(width/4961)
    }
  }, [width])

  const onMapClick = (area: Location) => {
    if(selected !== area) {
      const header = descData.descriptionArray[area].headerText
      const caption = descData.descriptionArray[area].captionText
      const showButton = true
      const maxWidth = '200px'
      const maxHeight = '200px'

      setTownbox(
        <Townbox 
          maxWidth={maxWidth} 
          maxHeight={maxHeight}
          headerColor="orange" 
          headerText={header}
          captionText={caption}
          showButton = {showButton}
        />
      )
    }

    selected === area ? onSelect(null) : onSelect(area)
  }

  const handleClick = (event: any) => { //need to change this type
    event.preventDefault()
    const area = event.target.alt
    onMapClick(Location[area as keyof typeof Location])
  }

  const [townbox, setTownbox] = useState(<></>)

  // Data can be made from dev/svgParse.py
  return (
    <div
      ref={elementRef}
      className='flex-auto 2xl:flex-none xl:flex-none 2xl:h-4/5 xl:h-4/5 flex justify-center'
    >
      {townbox}
      {height === 0 ? null : (
        <div className='svgrow'>
          <img src={mapImg} alt="Tucker Island Map" useMap="#tuckerislandmap"/>
          <map name="tuckerislandmap">
          {
            svgData.groupArray.map(location => {
              if (location.coords) {
              const scaledCoords = location.coords.map(coord => coord*scale)
              const className = Location[location.id as keyof typeof Location] === selected
                    ? 'map-selected'
                    : 'map-unselected'

              return (
                <area
                  key={location.id}
                  alt={location.id}
                  onClick={handleClick}
                  href={location.id}
                  coords={scaledCoords.join()}
                  className={className}
                  shape="poly"
                />
              )
              }
            })
          }
            </map>
        </div>
      )}
    </div>
  )
}

export default Map
