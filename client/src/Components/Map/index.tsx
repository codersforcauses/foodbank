// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Location } from '../../lib/types'
import svgData from './svgImageData.json'
import mapImg from './assets/TuckerMap.jpg'
import descData from './assets/description.json'
import Townbox from '../Townbox'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Map: React.FC = () => {
  // Used because SVG does not scale properly without
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const elementRef = useRef(null as null | HTMLDivElement)
  const [selected, onSelect] = useState<Location | null>(null)
  const [scale, setScale] = useState(1)
  const [townbox, setTownbox] = useState(<></>)
  //const [zoomScale, setZoom] = useState('')
  type HeaderColor = 'primary' | 'orange';
  useEffect(() => {
    if (elementRef?.current?.clientHeight) {
      setHeight(elementRef?.current?.clientHeight)
    }
  }, []) //empty dependency array so it only runs once at render

  useEffect(() => {
    function handleResize() {
      setScale(window.innerWidth/4961)
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
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

  const onMapClick = (area: Location) => {
    const areaDescription = getAreaDescription(area)
    //console.log(selected)
    //if(selected != null)  {
      //console.log("xtrans", svgData.groupArray[selected].xtrans)
      //const xtrans = svgData.groupArray[selected].xtrans;
      //const transformation = "transform: translate3d("+100+"," + 100+ ",0) scale(2)"
      //setZoom(transformation)
     // console.log('transformation', transformation)
    //}
    if(selected !== area) {
      const header = areaDescription?.headerText
      const caption = areaDescription?.captionText
      const showButton = areaDescription?.showButton
      const headerColor:HeaderColor = areaDescription?.headerColor as HeaderColor;
      const maxWidth = areaDescription?.maxWidth
      const maxHeight = areaDescription?.maxHeight

      setTownbox(
        <Townbox 
          maxWidth={maxWidth} 
          maxHeight={maxHeight}
          headerColor={headerColor}
          headerText={header}
          captionText={caption}
          showButton = {showButton}
        />
      )
    }

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
      className='flex-auto 2xl:flex-none xl:flex-none 2xl:h-4/5 xl:h-4/5 flex justify-center'
    >
      
      
      {height === 0 ? null : (
          <div className='svgrow'>
            <div style={{position:"relative"}}>
              <TransformWrapper>
              {({ zoomToElement, resetTransform }) => (
                <>
                <div>
                <button
                  onClick={() => zoomToElement("coolCloud")}
                >
                  Zoom to element 1
                </button>
                  <button
                  onClick={() => resetTransform()}
                >
                  Reset
                </button>
              </div>
                <TransformComponent>
                <img src={mapImg} alt="Tucker Island Map" useMap="#tuckerislandmap"/>
                
              {svgData.groupArray.map(location =>{
                const xtrans = parseInt(location.xtrans) * scale * 8; // I have no clue why everything is overscaled 8x
                const ytrans = parseInt(location.ytrans) * scale * 8; // this is probably worth looking into
                const translation = "translate(" + String(xtrans) + "px, " + String(ytrans) + "px)";
                const up = ["aquaOcean", "zombieWasteland", "grainField"]
                const left = ["yoghurtMountains", "cluckyCoop", "grainField", "supplyStore", "wickedWaterway"]
                //console.log(translation);
                return (
                  <div id={location.id} key={location.id} style={{position:"absolute", zIndex:4, top:0, transform:translation}}>
                    {location.name} 
                    {
                      selected === Location[location.id as keyof typeof Location] &&
                      <div className={`townBox ${up.includes(location.id)? "up" : ""} ${left.includes(location.id)? "left " : ""}`}>{townbox}</div>
                    }
                  </div>
                )
              })}
              </TransformComponent>
                </>
              )}
              
              </TransformWrapper>
            </div>
            <map name="tuckerislandmap">
              {
                svgData.groupArray.map(location => {
                  if (location.coords){
                    //console.log(location.id)
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
