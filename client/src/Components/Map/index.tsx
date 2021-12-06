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

interface TownBox {
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

export default Test
