import { useEffect, useState, useRef, useMemo, SetStateAction } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import TownBoxWrapper from './TownBoxWrapper'
import MapImage from './MapImage'
import { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'
import { Transition } from '@headlessui/react'

const Map = () => {
  const [scale, setScale] = useState(1)
  const [select, setSelect] = useState(null)
  const [initialScale, setInitialScale] = useState(1)
  const [isShowing, setIsShowing] = useState(false)
  const [wrapperHeightCSS, setWrapperHeightCSS] = useState('100vh')
  const [windowDimensions, setWindowDimensions] = useState({
    height: 0,
    width: 0
  })
  const transformWrapper = useRef<ReactZoomPanPinchRef>(null)

  useEffect(() => {
    function handleResize() {
      const targetWidth = window.innerWidth
      const WIDTH_OF_BASE_IMAGE = 7151
      const aspectRatio = window.innerWidth / window.innerHeight

      setScale(targetWidth / WIDTH_OF_BASE_IMAGE)
      setWrapperHeightCSS(`${window.innerHeight}px`)
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

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
    window.addEventListener('resize', handleResize)
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
                windowDimensions={windowDimensions}
                setTransform={setTransform}
                setIsShowing={setIsShowing}
                isShowing={isShowing}
                setSelect={setSelect}
                selected={select}
              />
            </TransformComponent>

            <Transition
              show={isShowing}
              enter='transition ease-in-out delay-1000 duration-500'
              enterFrom='opacity-0 scale-50'
              enterTo='opacity-100 scale-100'
              leave='transition duration-1000'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-50'
              className='fixed top-0 h-screen flex justify-center items-center'
            >
              <TownBoxWrapper
                selected={select}
                setSelect={setSelect}
                setIsShowing={setIsShowing}
                initialScale={initialScale}
                zoomOut={zoomOut}
              />
            </Transition>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}

export default Map
