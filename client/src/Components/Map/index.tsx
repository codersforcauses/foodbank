// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Location } from '../../lib/types'
import svgData from './svgImageData.json'
import SVGLocationGroup from './SVGLocationGroup'
import descData from './assets/description.json'
const Map: React.FC = () => {
  // Used because SVG does not scale properly without
  const [height, setHeight] = useState(0)
  const elementRef = useRef(null as null | HTMLDivElement)

  const [selected, onSelect] = useState<Location | null>(null)
  const [header, setHeader] = useState<string>("")
  const [caption, setCaption] = useState<string>("")
  const [showButton, setButton] = useState<boolean>(false)
  const [maxWidth, setMaxWidth] = useState<string>("200")
  const [maxHeight, setMaxHeight] = useState<string>("100")
  
  useEffect(() => {
    if (elementRef?.current?.clientHeight) {
      setHeight(elementRef?.current?.clientHeight)
    }
  }, []) //empty dependency array so it only runs once at render

  useEffect(() => {
    if(selected != null){
      const description = descData.descriptionArray.filter(data =>{
        return Location[data.id as keyof typeof Location] == selected
      });
      //console.log("test")
      setHeader(description[0].headerText);
      setCaption(description[0].captionText);
      setButton(description[0].showButton);
      setMaxWidth(description[0].maxWidth);
      setMaxHeight(description[0].maxHeight);
    }  
  }, [selected])

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
                header={header}
                caption={caption}
                showButton={showButton}
                maxHeight={maxHeight}
                maxWidth={maxWidth}
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
