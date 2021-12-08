// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import TownBoxWrapper from './TownBoxWrapper'
import './index.css'
import MapImage from './MapImage'


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
                <MapImage
                  scale={scale}
                  setTransform={setTransform}
                  setDisplay={setDisplay}
                  display={display}
                  setSelect={setSelect}
                  selected={select}
                />
              </TransformComponent>

              <div className={`fixed top-0 left-0 w-screen h-screen flex justify-center ${display ? '' : 'hidden'}`}>
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

export default Map