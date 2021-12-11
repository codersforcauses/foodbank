import React, { useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import TownBoxWrapper from './TownBoxWrapper'
import MapImage from './MapImage'

const Map = () => {
  const [scale, setScale] = useState(1)
  const [select, setSelect] = useState(null)
  const [display, setDisplay] = useState(false)

  return (
    <div className='h-screen'>
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
    </div>
  )
}

export default Map
