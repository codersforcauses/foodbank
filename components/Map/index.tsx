import React, { useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import TownBoxWrapper from './TownBoxWrapper'
import MapImage from './MapImage'

const Map = () => {
  const [scale, setScale] = useState(1)
  const [select, setSelect] = useState(null)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    function handleResize() {
      const mobileWidth = 2900
      const minStaticWidth = 1170
      const targetWidth =
        window.innerWidth > minStaticWidth ? window.innerWidth : mobileWidth
      setScale(targetWidth / 7151) //number is width of base image
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <TransformWrapper
      doubleClick={{ disabled: true }}
      wheel={{ disabled: true }}
      initialScale={1.4}
      centerZoomedOut={true}
      panning={{ disabled: false }}
      pinch={{ disabled: true }}
    >
      {({ resetTransform, setTransform }) => (
        <>
          <TransformComponent wrapperClass='min-h-screen md:main'>
            <MapImage
              scale={scale}
              setTransform={setTransform}
              setDisplay={setDisplay}
              display={display}
              setSelect={setSelect}
              selected={select}
            />
          </TransformComponent>

          <div
            className={`fixed top-0 left-0 w-screen h-screen flex justify-center ${
              display ? '' : 'hidden'
            }`}
          >
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
  )
}

export default Map
