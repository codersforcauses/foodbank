// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Location } from '../../lib/types'
import svgData from './svgImageData.json'
import mapImg from './assets/TuckerMap.jpg'
import descData from './assets/description.json'
import Townbox from '../Townbox'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
//import internal from 'stream'

const Map: React.FC = () => {
  // Used because SVG does not scale properly without
  const [height, setHeight] = useState(1)
  const elementRef = useRef(null as null | HTMLDivElement)
  const [selected, setSelect] = useState<Location | null>(null)
  const [scale, setScale] = useState(1)
  const [display, setDisplay] = useState(false)
  // const [townbox, setTownbox] = useState(<></>)
  type HeaderColor = 'primary' | 'orange'
  useEffect(() => {
    if (elementRef?.current?.clientHeight) {
      setHeight(elementRef?.current?.clientHeight)
    }
  }, []) //empty dependency array so it only runs once at render

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
    for (const description of descData.descriptionArray) {
      if (description.id === Location[area]) {
        return description
      }
    }
    return null
  }
  const close = () => {
    setSelect(null)
    setDisplay(false)
  }
  const onMapClick = (area: Location) => {
    selected === area ? setSelect(null) : setSelect(area)
    setDisplay(!display)
  }

  const handleClick = (
    event: any,
    setTransform: any,
    xtrans: number,
    ytrans: number
  ) => {
    //need to change this type
    event.preventDefault()
    const area = event.target.alt
    onMapClick(Location[area as keyof typeof Location])
    setTransform(xtrans, ytrans, 2)
  }

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
                <div
                  ref={elementRef}
                  className='block w-full min-h-full items-stretch'
                  style={{ minHeight: '900px' }}
                >
                  {height === 0 ? null : (
                    <div className='svgrow'>
                      <img
                        src={mapImg}
                        alt='Tucker Island Map'
                        useMap='#tuckerislandmap'
                      />

                      <map name='tuckerislandmap'>
                        {svgData.groupArray.map(location => {
                          if (location.coords) {
                            // CHECK SCALING OF ENTIRE IMAGE TO SCREEN
                            // Seems to need to be scaled because the image map is not the same size as what is actually displayed.
                            // eg. the image is actually at the top left of the screen and is significantly smaller than what is actually shown
                            //scaling by 10 seems to give better views of the locations
                            const xtrans =
                              parseInt(location.xtrans) * scale * 10
                            const ytrans =
                              parseInt(location.ytrans) * scale * 10

                            const scaledCoords = location.coords.map(
                              coord => coord * scale
                            )
                            const className =
                              Location[location.id as keyof typeof Location] ===
                              selected
                                ? 'map-selected'
                                : 'map-unselected'
                            return (
                              <area
                                key={location.id}
                                alt={location.id}
                                onClick={e => {
                                  handleClick(e, setTransform, -xtrans, -ytrans)
                                }}
                                href={location.id}
                                coords={scaledCoords.join()}
                                className={className}
                                shape='poly'
                              />
                            )
                          }
                        })}
                      </map>
                    </div>
                  )}
                </div>
              </TransformComponent>

              <div className={`full-page-wrapper ${display ? '' : 'none'}`}>
                {svgData.groupArray.map(area => {
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
                              headerColor={selectedArea?.headerColor as HeaderColor}
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

export default Map
