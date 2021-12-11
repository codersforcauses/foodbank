import Image from 'next/image'
import testImg from './assets/TuckerMap.jpg'
import React, { useEffect, useState } from 'react'
import baseMap from '../../public/images/tuckerMap.webp'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import TownBoxWrapper from './TownBoxWrapper'
import MapImage from './MapImage'

const Map = () => {
  const [scale, setScale] = useState(1)
  const [select, setSelect] = useState(null)
  const [display, setDisplay] = useState(false)

  return (
    <div className='h-screen w-screen'>
      <TransformWrapper>
        {({ resetTransform, setTransform }) => (
          <>
            <TransformComponent>
              <div className="className='h-screen w-screen">
                <MapImage
                  scale={scale}
                  setTransform={setTransform}
                  setDisplay={setDisplay}
                  display={display}
                  setSelect={setSelect}
                  selected={select}
                />
                 {/* <Image
                  priority
                  src={baseMap}
                  alt='Tucker Island Map'
                  placeholder='blur'
                  objectFit='cover'
                  objectPosition='left center'
                />*/}
              </div>
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
