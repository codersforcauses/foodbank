import React from 'react'
import svgData from './svgImageData.json'
import Image from 'next/image'
import baseMap from '../../public/images/tuckerMap.webp'
import styles from './index.module.css'

interface MapProps {
  scale: number
  initialScale: number
  setTransform: (xtrans: number, ytrans: number, scale: number) => void
  windowDimensions: {
    height: number
    width: number
  }
  setDisplayBox: (display: boolean) => void
  displayBox: boolean
  setIsShowing: (state: boolean) => void
  isShowing: boolean
  selected: any
  setSelect: (state: any) => void
}

const MapImage = ({
  scale,
  setTransform,
  windowDimensions,
  setDisplayBox,
  setIsShowing,
  selected,
  setSelect,
  initialScale
}: MapProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAreaElement, MouseEvent>,
    setTransform: Function,
    xtrans: number,
    ytrans: number
  ) => {
    const area = (event.target as HTMLAreaElement).alt
    selected === area ? setSelect(null) : setSelect(area)
    setDisplayBox(true)
    setTransform(xtrans, ytrans, initialScale * 2, 1000, 'easeOut')
    setIsShowing(true)
  }

  let timestamp: number

  return (
    <div className='flex max-w-screen h-full'>
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
            // console.log('scale', scale)
            //const xtrans = (parseInt(location.xtrans) * (7151/1718)) * scale
            //const ytrans = (parseInt(location.ytrans) * (3508/842)) * scale

            let mobileCompensation = 0
            let zombieAquaCompensation = 0
            const aspectRatio = windowDimensions.width / windowDimensions.height
            switch (initialScale) {
              case 4.7:
                mobileCompensation = 350
                zombieAquaCompensation = 200
                break

              case 3.2:
                zombieAquaCompensation = 40 * initialScale
                break

              case 1.6:
                zombieAquaCompensation = 70
                break

              default:
                if (aspectRatio >= 2) {
                  zombieAquaCompensation = -40
                } else if (aspectRatio > 1.6) {
                  zombieAquaCompensation = 80
                } else {
                  zombieAquaCompensation = 100
                }
                break
            }

            //Multiplied by 12 because xtrans and ytrans contain values which are scaled down by 10-12
            const xtrans =
              parseInt(location.xtrans) * 12 * scale * initialScale +
              mobileCompensation
            const ytrans = parseInt(location.ytrans) * 12 * scale * initialScale
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
                    if (
                      location.id == 'zombieWasteland' ||
                      location.id == 'aquaOcean'
                    ) {
                      handleClick(
                        e,
                        setTransform,
                        -xtrans,
                        -ytrans + zombieAquaCompensation
                      )
                    } else {
                      handleClick(e, setTransform, -xtrans, -ytrans)
                    }
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
