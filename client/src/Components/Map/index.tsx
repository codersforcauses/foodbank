// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useRef, useState } from 'react'
// import { Menu } from '@headlessui/react'
import './index.css'
import { Location } from '../../lib/types'
import svgData from './svgImageData.json'
import mapImg from './assets/TuckerMap.jpg'
import descData from './assets/description.json'
import Townbox from '../Townbox'
const Map: React.FC = () => {
  // Used because SVG does not scale properly without
  const [height, setHeight] = useState(1)
  const [width, setWidth] = useState(0)
  const elementRef = useRef(null as null | HTMLDivElement)
  const [selected, onSelect] = useState<Location | null>(null)
  const [scale, setScale] = useState(1)
  // const [townbox, setTownbox] = useState(<></>)
  type HeaderColor = 'primary' | 'orange';
  useEffect(() => {
    if (elementRef?.current?.clientHeight) {
      setHeight(elementRef?.current?.clientHeight)
    }
  }, []) //empty dependency array so it only runs once at render

  useEffect(() => {
    function handleResize() {
      setScale(window.innerWidth/4961)
    } window.addEventListener('resize', handleResize)})

  useEffect(() => {
    if (elementRef?.current?.clientWidth) {
      setWidth(elementRef?.current?.clientWidth)
      setScale(width/4961)
    }
  }, [width])

  // to get the area description given an area so you can actually use headers/captions
  // returns null if such area doesn't exist in assets/description.json
  const getAreaDescription = (area: Location) => {
    for(const description of descData.descriptionArray) {
      if (description.id === Location[area]) {
        return description
      }
    }

    return null
  }
  const onClose = () => {
    onSelect(null) 
  }
  const onMapClick = (area: Location) => {
    selected === area ? onSelect(null) : onSelect(area)
  }
  // eslint-disable-next-line
  const handleClick = (event: any) => { //need to change this type
    event.preventDefault()
    const area = event.target.alt
    onMapClick(Location[area as keyof typeof Location])
  }


  // Data can be made from dev/svgParse.py
  return (
    <div
      ref={elementRef}
      className='block'
    >
      {height === 0 ? null : (
          <div className='svgrow'>
              <img src={mapImg} alt="Tucker Island Map" className="map" useMap="#tuckerislandmap"/>
              {svgData.groupArray.map(location =>{
                const xtrans = parseInt(location.xtrans) * scale * 8; // I have no clue why everything is overscaled 8x
                const ytrans = parseInt(location.ytrans) * scale * 8; // this is probably worth looking into
                const translation = "translate(" + String(xtrans) + "px, " + String(ytrans) + "px)";
                return (
                  <div key={location.id} style={{position:"absolute", zIndex:0, top:0, transform:translation}}>
                    {location.name} 
                  </div>
                )
              })}
            <map name="tuckerislandmap">
              {
                svgData.groupArray.map(location => {
                  if (location.coords){
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

            {
                svgData.groupArray.map(area => {
                  if (selected !== null && area.coords){
                    const selectedArea = getAreaDescription(selected)

                    if(selectedArea !== null && selectedArea.id === area.id) {
                      const header = selectedArea?.headerText
                      const caption = selectedArea?.captionText
                      const showButton = selectedArea?.showButton
                      
                      const headerColor:HeaderColor = selectedArea?.headerColor as HeaderColor;

                      const maxWidth = selectedArea?.maxWidth
                      const maxHeight = selectedArea?.maxHeight

                      const xtrans = parseInt(area.xtrans) * scale * 8; // I have no clue why everything is overscaled 8x
                      const ytrans = parseInt(area.ytrans) * scale * 8; // this is probably worth looking into
                      const translation = "translate(" + String(xtrans) + "px, " + String(ytrans) + "px)";
                      const up = ["aquaOcean", "zombieWasteland", "grainField"]
                      const left = ["yoghurtMountains", "cluckyCoop", "grainField", "supplyStore", "wickedWaterway"]

                      console.log("area",selectedArea);
                      console.log(area.id)
                      console.log(translation)
                      return (
                        <div key={area.id} style={{transform:translation}}>
                          <div className={`townBox ${up.includes(area.id)? "up" : ""} ${left.includes(area.id)? "left " : ""}`}>
                            <Townbox 
                              maxWidth={maxWidth} 
                              maxHeight={maxHeight}
                              headerColor={headerColor}
                              headerText={header}
                              captionText={caption}
                              showButton = {showButton}
                              close={onClose}
                            />
                          </div>
                        </div>
                      )
                    }
                  }
                })
              }

        </div>
      )}
    </div>
  )
}

export default Map