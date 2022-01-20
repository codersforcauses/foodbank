import React from 'react'
import svgData from './svgImageData.json'
import Image from 'next/image'
import baseMap from '../../public/images/tuckerMap.webp'
import styles from './index.module.css'

interface MapProps {
  scale: number
  initialScale: number
  setTransform: (xtrans: number, ytrans: number, scale: number) => void
  setDisplay: (display: boolean) => void
  display: boolean
  selected: any
  setSelect: (state: any) => void
}

const MapImage = ({
  scale,
  setTransform,
  setDisplay,
  selected,
  setSelect,
  initialScale,
}: MapProps) => {
  const handleClick = (
    event: any,
    setTransform: any,
    xtrans: number,
    ytrans: number
  ) => {
    //TODO: need to change this type
    const area = event.target.alt
    selected === area ? setSelect(null) : setSelect(area)
    setDisplay(true)
    setTransform(xtrans, ytrans, initialScale*2, 1000, 'easeOut')
  }

  let timestamp: number

  return (
    <div className='flex relative max-w-screen'>
      <Image
        className={styles.mapImage}
        priority
        src={baseMap}
        alt='Tucker Island Map'
        placeholder='blur'
        objectPosition='left center'
        useMap='#tuckerislandmap'
      />
      <map name='tuckerislandmap'>
        {svgData.groupArray.map(location => {
          if (location.coords) {
            // CHECK SCALING OF ENTIRE IMAGE TO SCREEN
            // Seems to need to be scaled because the image map is not the same size as what is actually displayed.
            // eg. the image is actually at the top left of the screen and is significantly smaller than what is actually shown
            //scaling by 10 seems to give better views of the locations
            console.log("scale", scale)
            //const xtrans = (parseInt(location.xtrans) * (7151/1718)) * scale
            //const ytrans = (parseInt(location.ytrans) * (3508/842)) * scale

            //Multiplied by 12 because xtrans and ytrans contain values which are scaled down by 10-12
            const xtrans = parseInt(location.xtrans) * 12 * scale
            const ytrans = parseInt(location.ytrans) * 12 * scale
            const scaledCoords = location.coords.map(coord => coord * scale)
            //TODO: consider changing className to a state and use tailwind
            const className =
              location.id === selected ? 'map-selected' : 'map-unselected'
            return (
              <area
                key={location.id}
                alt={location.id}
                onMouseDown={() => {
                  timestamp = new Date().getTime()
                }}
                onClick={e => {
                  e.preventDefault()
                  let timestamp2 = new Date().getTime()
                  let interval = 300
                  if (timestamp2 - timestamp < interval) {
                    handleClick(e, setTransform, -xtrans, -ytrans)
                  }
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
  )
}

export default MapImage
