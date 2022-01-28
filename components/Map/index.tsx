import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  SetStateAction
} from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import TownBoxWrapper from './TownBoxWrapper'
import MapImage from './MapImage'
import { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'

const Map = () => {
  const [scale, setScale] = useState(1)
  const [select, setSelect] = useState(null)
  const [displayBox, setDisplayBox] = useState(false)
  const [initialScale, setInitialScale] = useState(1)
  const [wrapperHeightCSS, setWrapperHeightCSS] = useState('100vh')
  const [currentCoordinates, setCurrentCoordinates] = useState({
    x: 0,
    y: 0
  })

  const transformWrapper = useRef<ReactZoomPanPinchRef>(null)

  useEffect(() => {
    function handleResize() {
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
      } else {
        setInitialScale(4.7)
      }
      transformWrapper.current?.resetTransform()
    }
    handleResize()
    window.addEventListener('resize', () => {
      handleResize()
    })

    setWrapperHeightCSS(`${window.innerHeight}px`)
  }, [initialScale])

  return (
    <div
      className='sm:pt-14'
      style={{
        height: wrapperHeightCSS
      }}
    >
      <TransformWrapper
        doubleClick={{ disabled: true }}
        wheel={{ disabled: true }}
        initialScale={initialScale}
        centerZoomedOut={true}
        alignmentAnimation={{ sizeY: 0, sizeX: 0 }}
        minScale={initialScale + 0.1}
        ref={transformWrapper}
      >
        {({ setTransform, zoomOut }) => (
          <>
            <TransformComponent
              wrapperStyle={{
                height: '100%'
              }}
            >
              <MapImage
                scale={scale}
                initialScale={initialScale}
                setTransform={setTransform}
                setDisplayBox={setDisplayBox}
                displayBox={displayBox}
                setSelect={setSelect}
                selected={select}
                setCurrentCoordinates={setCurrentCoordinates}
              />
            </TransformComponent>

            <div
              className={`fixed top-0 h-screen flex justify-center items-center ${
                displayBox ? '' : 'hidden'
              }`}
            >
              <TownBoxWrapper
                selected={select}
                setSelect={setSelect}
                setDisplayBox={setDisplayBox}
                initialScale={initialScale}
                zoomOut={zoomOut}
              />
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}

export default Map
