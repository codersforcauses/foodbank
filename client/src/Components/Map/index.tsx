// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Location } from '../../lib/types'
import svgData from './svgImageData.json'
import SVGLocationGroup from './SVGLocationGroup'
import mapImg from './assets/TuckerMap.jpg'
import descData from './assets/description.json'
import {DescriptionArray, HeaderColor} from './types'
const Map: React.FC = () => {
  // Used because SVG does not scale properly without
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const elementRef = useRef(null as null | HTMLDivElement)

  const [selected, onSelect] = useState<Location | null>(null)
  const oldHeader = descData.descriptionArray[0].headerColor === 'orange' ? 'orange' : 'primary'
  const newHeader: HeaderColor = oldHeader as HeaderColor;
  const tempDesc = {
    ...descData.descriptionArray[0],
    headerColor:newHeader
  }
  const [desc, setDesc] = useState<DescriptionArray>(tempDesc)
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

  useEffect(() => {
    if(selected != null){
      const description = descData.descriptionArray.filter(data =>{
        return Location[data.id as keyof typeof Location] == selected
      });
      //console.log("test")
      const oldHeader = description[0].headerColor === 'orange' ? 'orange' : 'primary'
      const newHeader: HeaderColor = oldHeader as HeaderColor;
      const tempDesc = {
        ...description[0],
        headerColor:newHeader
      }
      setDesc(tempDesc)
      console.log(tempDesc)
      console.log(desc)
    }  
  }, [selected, desc])

  const onMapClick = (area: Location) => {
    console.log(Location[area]);
    let i;
    for(i=0; i < svgData.groupArray.length; i++) {
      
      if ((svgData.groupArray[i].id == Location[area]) || (svgData.groupArray[i].id == "bg")) {
      //if (svgData.groupArray[i].id == "bg") {
        console.log(svgData.groupArray[i])
        svgData.groupArray[i].transform = "translate(0 0) scale(1)"
      }
      else{
        //svgData.groupArray[i].width = '5000'
        svgData.groupArray[i].width = '0'
        //console.log(svgData.groupArray[i])
        //console.log(svgData.groupArray[i].transform)
      }
      //console.log(svgData.groupArray[i])
      //svgData.groupArray[i].width = '100'
      //console.log(svgData.groupArray[i].xlinkHref)
    }
    console.log(svgData.groupArray)
    selected === area ? onSelect(null) : onSelect(area)
  }
// eslint-disable-next-line
  const handleClick = (event:any) => { //need to change this type
    event.preventDefault()
    const area = event?.target?.alt
    onMapClick(Location[area as keyof typeof Location])
  }

  // Data can be made from dev/svgParse.py
  return (
    <div
      ref={elementRef}
      className='flex justify-center flex-auto 2xl:flex-none xl:flex-none 2xl:h-4/5 xl:h-4/5'
    >
      {height === 0 ? null : (
        <div className='svgrow'>
          <img src={mapImg} alt="Tucker Island Map" useMap="#tuckerislandmap"/>
          <map name="tuckerislandmap">
          {
            svgData.groupArray.map(location => {
              if (location.coords) {
              const scaledCoords = location.coords.map(coord => coord*scale)

              return (
                <area
                key={location.id}
                alt={location.id}
                onClick={handleClick}
                href={location.id}
                coords={scaledCoords.join()}
                className={
                  Location[location.id as keyof typeof Location] === selected
                    ? 'map-selected'
                    : 'map-unselected'
                }
                shape="poly"
                  />
              )
              }
            })
          }
            </map>
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
                desc = {desc}
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
