import React from 'react'
import svgData from './svgImageData.json'
import Image from 'next/image'
import baseMap from '../../public/images/tuckerMap.webp'
import styles from './index.module.css'

interface MapProps {
  scale: number
  setTransform: (xtrans: number, ytrans: number, scale: number) => void
  setDisplay: (display: boolean) => void
  display: boolean
  selected: any
  setSelect: (state: any) => void
  ignoreClicks: boolean
}

const MapImage = ({
  scale,
  setTransform,
  setDisplay,
  selected,
  setSelect,
  ignoreClicks
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
    setTransform(xtrans, ytrans, 2, 1000, 'easeOut')
  }

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
            const xtrans = parseInt(location.xtrans) * scale * 10
            const ytrans = parseInt(location.ytrans) * scale * 10

            const scaledCoords = location.coords.map(coord => coord * scale)
            //TODO: consider changing className to a state and use tailwind
            const className =
              location.id === selected ? 'map-selected' : 'map-unselected'
            return (
              <area
                key={location.id}
                alt={location.id}
                onClick={e => {
                  e.preventDefault()
                  console.log(`Current val: ${ignoreClicks}`)
                  if (ignoreClicks === false) {
                    console.log('TRIGGED')
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
