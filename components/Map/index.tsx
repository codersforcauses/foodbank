import React, { useEffect, useState, useRef, useMemo } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import TownBoxWrapper from './TownBoxWrapper'
import MapImage from './MapImage'
import { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'

const Map = () => {
  const [scale, setScale] = useState(1)
  const [select, setSelect] = useState(null)
  const [display, setDisplay] = useState(false)
  const [initialScale, setInitialScale] = useState(1)

  const transformWrapper = useRef<ReactZoomPanPinchRef>(null)
  let ignoreClicks = false

  useEffect(() => {
    function handleResize() {
      // const mobileWidth = 2900
      // const minStaticWidth = 1170
      const targetWidth = window.innerWidth
      //window.innerWidth > minStaticWidth ? window.innerWidth : mobileWidth
      setScale(targetWidth / 7151) //number is width of base image

      const aspectRatio = window.innerWidth / window.innerHeight
      if (aspectRatio > 1.6) {
        setInitialScale(1.2)
      } else if (aspectRatio > 1.4) {
        setInitialScale(1.4)
      } else if (aspectRatio > 1.2) {
        setInitialScale(1.6)
      } else if (aspectRatio > 1) {
        setInitialScale(2.1)
      } else if (aspectRatio > 0.8) {
        setInitialScale(2.6)
      } else if (aspectRatio > 0.65) {
        setInitialScale(3.2)
        console.log('THIS HAPPENED!')
      } else {
        setInitialScale(4.7)
      }
      transformWrapper?.current?.setTransform(0, 0, initialScale, 0, 'easeOut')
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [initialScale])

  return (
    <TransformWrapper
      doubleClick={{ disabled: true }}
      wheel={{ disabled: true }}
      initialScale={initialScale}
      centerZoomedOut={true}
      panning={{ disabled: false }}
      pinch={{ disabled: true }}
      alignmentAnimation={{ sizeY: 0, sizeX: 0 }}
      ref={transformWrapper}
      onPanning={() => {
        ignoreClicks = true
        console.log('On')
      }}
      onPanningStop={() => {
        ignoreClicks = false
        console.log('Off')
      }}
    >
      {({ resetTransform, setTransform }) => (
        <>
          <TransformComponent wrapperClass='min-h-screen lg:main'>
            <MapImage
              scale={scale}
              setTransform={setTransform}
              setDisplay={setDisplay}
              display={display}
              setSelect={setSelect}
              selected={select}
              ignoreClicks={ignoreClicks}
            />
          </TransformComponent>

          <div
            className={`fixed top-0 h-screen flex justify-center items-center ${
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
