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
  setIsShowing: (state: boolean) => void
  isShowing: boolean
  selected: any
  setSelect: (state: any) => void
}

const MapImage = ({
  scale,
  setTransform,
  windowDimensions,
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
            let mobileCompensation = 0
            let zombieAquaCompensation = 0
            const aspectRatio = windowDimensions.width / windowDimensions.height

            if (aspectRatio >= 2) {
              zombieAquaCompensation = -40
            } else if (aspectRatio > 1.6) {
              zombieAquaCompensation = 80
            } else if (aspectRatio > 1.4) {
              zombieAquaCompensation = 100
            } else if (aspectRatio > 1.2) {
              zombieAquaCompensation = 70
            } else if (aspectRatio > 0.65) {
              zombieAquaCompensation = 40 * initialScale
            } else {
              mobileCompensation = 350
              zombieAquaCompensation = 200
            }

            const xtrans =
              parseInt(location.xtrans) * 12 * scale * initialScale +
              mobileCompensation
            const ytrans = parseInt(location.ytrans) * 12 * scale * initialScale
            const scaledCoords = location.coords.map(coord => coord * scale)
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
