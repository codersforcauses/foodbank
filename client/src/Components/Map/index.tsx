// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Location } from '../../lib/types'
import svgData from './svgImageData.json'
=======
import React, { useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
//import { mutateInterface } from 'swr/dist/types'
//import { Location } from '../../lib/types'
import { Townbox } from '../Townbox' //, TownboxProps
>>>>>>> temp1
//import mapImg from './assets/TuckerMap.jpg'
import descData from './assets/description.json'
import './index.css'
//import svgData from './svgImageData.json'
import MapImage from './Map'
//import internal from 'stream'

type HeaderColor = 'primary' | 'orange'

interface TownBox {
  headerColor: any
  headerText: string
  captionText: string
  showButton: boolean
  id: string
}

const Map: React.FC = () => {
  // Used because SVG does not scale properly without
  const [scale, setScale] = useState(1)
  const [select, setSelect] = useState(null)
  const [display, setDisplay] = useState(false)

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

<<<<<<< HEAD
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
  const selectArea = (area: Location) => {
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
    selectArea(Location[area as keyof typeof Location])
    setTransform(xtrans, ytrans, 2)
  }

  // Data can be made from dev/svgParse.py
=======
>>>>>>> temp1
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
<<<<<<< HEAD
                <div
                  ref={elementRef}
                  className='block w-full min-h-full items-stretch'
                  style={{ minHeight: '900px' }}
                >
                  {height === 0 ? null : (
                    <div className='svgrow'>
                      {/* <img
                        src={mapImg}
                        alt='Tucker Island Map'
                        useMap='#tuckerislandmap'
                      /> */}

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
=======
                <MapImage
                  scale={scale}
                  setTransform={setTransform}
                  setDisplay={setDisplay}
                  display={display}
                  setSelect={setSelect}
                  selected={select}
                />
>>>>>>> temp1
              </TransformComponent>

              <div className={`full-page-wrapper ${display ? '' : 'none'}`}>
                <TownBoxWrapper
                  selected={select}
                  resetTransform={resetTransform}
                  setSelect={setSelect}
                  setDisplay={setDisplay}
                />
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    </>
  )
}

interface TownBoxProps {
  selected: string | null
  resetTransform: () => void
  setSelect: (state: any) => void
  setDisplay: (state: boolean) => void
}

const TownBoxWrapper = ({
  selected,
  resetTransform,
  setSelect,
  setDisplay
}: TownBoxProps) => {
  const handleClose = () => {
    setSelect(null)
    setDisplay(false)
    resetTransform()
  }

  if (selected) {
    const selectedArea = descData.descriptionArray.find(x => x.id === selected)

    if (selectedArea) {
      const {
        headerText,
        captionText,
        headerColor,
        showButton,
        id
      }: TownBox | undefined = selectedArea

      return (
        <>
          <div key={id} className='townbox-wrapper'>
            <Townbox
              headerColor={headerColor as HeaderColor}
              headerText={headerText}
              captionText={captionText}
              showButton={showButton}
              close={handleClose}
            />
          </div>
        </>
      )
    }
  }
  return null
}

export default Map
