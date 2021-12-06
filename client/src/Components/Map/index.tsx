// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
//import { mutateInterface } from 'swr/dist/types'
//import { Location } from '../../lib/types'
import { Townbox } from '../Townbox' //, TownboxProps
//import mapImg from './assets/TuckerMap.jpg'
import descData from './assets/description.json'
import './index.css'
//import svgData from './svgImageData.json'
import Map from './Map'
//import internal from 'stream'

type HeaderColor = 'primary' | 'orange'

interface mytest {
  headerColor: any
  headerText: string
  captionText: string
  showButton: boolean
  id: string
}

const Test: React.FC = () => {
  // Used because SVG does not scale properly without
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(1)
  const [select, setSelect] = useState(null)
  const [display, setDisplay] = useState(false)
  // const [townbox, setTownbox] = useState(<></>)

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
  // const getAreaDescription = (area: Location) => {
  //   for (const place of descData.descriptionArray) {
  //     if (place.id === Location[area]) {
  //       return place
  //     }
  //   }
  //   return null
  // }

  // const close = () => {
  //   setSelect(null)
  //   setDisplay(false)
  // }

  if (height) {
    console.log('height')
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
                  selected={select}
                />
              </TransformComponent>

              <div className={`full-page-wrapper ${display ? '' : 'none'}`}>
                <TB_Wrapper
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

interface TB {
  selected: string | null
  resetTransform: () => void
  setSelect: (state: any) => void
  setDisplay: (state: boolean) => void
}

const TB_Wrapper = ({
  selected,
  resetTransform,
  setSelect,
  setDisplay
}: TB) => {
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
      }: mytest | undefined = selectedArea

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

export default Test
