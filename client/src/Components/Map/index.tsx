// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { Location } from '../../lib/types'
import Townbox from '../Townbox'
//import mapImg from './assets/TuckerMap.jpg'
import descData from './assets/description.json'
import './index.css'
import svgData from './svgImageData.json'
import Map from './Map'
//import internal from 'stream'

const Test: React.FC = () => {
  // Used because SVG does not scale properly without
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(1)
  const [selected, setSelect] = useState<Location | null>(null)
  const [display, setDisplay] = useState(false)
  // const [townbox, setTownbox] = useState(<></>)
  type HeaderColor = 'primary' | 'orange'

  useEffect(() => {
    function handleResize() {
      const mobileWidth = 2900
      const minStaticWidth = 1170
      const targetWidth =
        window.innerWidth > minStaticWidth ? window.innerWidth : mobileWidth
      setScale(targetWidth / 4961)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  // to get the area description given an area so you can actually use headers/captions
  // returns null if such area doesn't exist in assets/description.json
  const getAreaDescription = (area: Location) => {
    for (const place of descData.descriptionArray) {
      if (place.id === Location[area]) {
        return place
      }
    }
    return null
  }
  const close = () => {
    setSelect(null)
    setDisplay(false)
  }

  if (height) {
    console.log("height")
  }

  // const selectArea = (area: Location) => {
  //   selected === area ? setSelect(null) : setSelect(area)
  //   setDisplay(!display)
  // }

  // const handleClick = (
  //   event: any,
  //   setTransform: any,
  //   xtrans: number,
  //   ytrans: number
  // ) => {
  //   //need to change this type
  //   event.preventDefault()
  //   const area = event.target.alt
  //   selectArea(Location[area as keyof typeof Location])
  //   setTransform(xtrans, ytrans, 2)
  // }

  // Data can be made from dev/svgParse.py
  return (
    <>
      <div>
        <TransformWrapper
          doubleClick={{ disabled: true }}
          wheel={{ disabled: true }}
          initialScale={1}
        >
          {({ resetTransform, setTransform }) => (
            <>
              <TransformComponent>
                <Map
                  scale={scale}
                  setTransform={setTransform}
                  setHeight={setHeight}
                  setDisplay={setDisplay}
                  display={display}
                  setSelect={setSelect}
                  selected={selected}
                />
              </TransformComponent>

              <div className='full-page-wrapper none'>
                {svgData.groupArray.map(area => {
                  console.log(selected)
                  if (selected !== null && area.coords) {
                    const selectedArea = getAreaDescription(selected)

                    if (selectedArea !== null && selectedArea.id === area.id) {
                      return (
                        <>
                          <div
                            key={selectedArea.id}
                            className='townbox-wrapper'
                          >
                            <Townbox
                              headerColor={
                                selectedArea?.headerColor as HeaderColor
                              }
                              headerText={selectedArea?.headerText}
                              captionText={selectedArea?.captionText}
                              showButton={selectedArea?.showButton}
                              close={() => {
                                close()
                                resetTransform()
                              }}
                            />
                          </div>
                        </>
                      )
                    }
                  }
                })}
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    </>
  )
}

export default Test
