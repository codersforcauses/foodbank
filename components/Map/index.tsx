// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)
import Image from 'next/image'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from './Map.module.css'
import { Location } from './types'
import svgData from './svgImageData.json'
import mapImg from './assets/TuckerMap.jpg'
import descData from './assets/description.json'
import Townbox from '../TownBox'
const Map: React.FC = () => {
  // Used because SVG does not scale properly without
  const [height, setHeight] = useState(1)
  const elementRef = useRef(null as null | HTMLDivElement)
  const [selected, onSelect] = useState<Location | null>(null)
  const [scale, setScale] = useState(1)
  const [display, changeDisplay] = useState(false)
  // const [townbox, setTownbox] = useState(<></>)
  type HeaderColor = 'primary' | 'orange';
  useEffect(() => {
    if (elementRef?.current?.clientHeight) {
      setHeight(elementRef?.current?.clientHeight)
    }
  }, []) //empty dependency array so it only runs once at render

  useEffect(() => {
    function handleResize() {
      const mobileWidth = 2900
      const minStaticWidth = 1170
      const targetWidth = window.innerWidth > minStaticWidth ? window.innerWidth : mobileWidth
      setScale(targetWidth/4961)
    }
    handleResize();
    window.addEventListener('resize', handleResize)
    },
    []
  )

  // to get the area description given an area so you can actually use headers/captions
  // returns null if such area doesn't exist in assets/description.json
  const getAreaDescription = (area: Location) => {
    for(const description of descData.descriptionArray) {
      if (description.id === Location[area]) {
        return description
      }
    }

    return null
  }
  const onClose = () => {
    onSelect(null) 
    changeDisplay(false)
  }
  const onMapClick = (area: Location) => {
    selected === area ? onSelect(null) : onSelect(area)
    changeDisplay(!display)
  }
  // eslint-disable-next-line
  const handleClick = (event: any) => { //need to change this type
    const area = event?.target?.alt
    onMapClick(Location[area as keyof typeof Location])
  }


  // Data can be made from dev/svgParse.py
  return (
    <div>
    <div
      ref={elementRef}
      className='block w-full min-h-full items-stretch'
      style={{minHeight:'900px'}}
    >
      {height === 0 ? null : (
          <div className={styles.svgrow}>
            {
              selected === null &&
                <Image
                  src={mapImg}
                  alt="Tucker Island Map"
                  className={styles.map}
                  useMap="#tuckerislandmap"
                />
            }

            {
              selected !== null &&
                <Image
                  src={mapImg}
                  alt="Tucker Island Map"
                  className={`${styles.map} ${styles.mapinactive}`}
                  useMap="#tuckerislandmap"
                />
            }

            <map name="tuckerislandmap">
              {
                svgData.groupArray.map(location => {
                  if (location.coords){
                    const scaledCoords = location.coords.map(coord => coord*scale)
                    const className = Location[location.id as keyof typeof Location] === selected
                          ? styles.mapselected
                          : styles.mapunselected
                    return (
                        <area 
                          key={location.id}
                          alt={location.id}
                          onClick={handleClick}
                          coords={scaledCoords.join()}
                          className={className}
                          shape="poly"
                        />
                    )
                  }
                })
              }
            </map>
        </div>
      )}
    </div>

    <div className={`${styles.fullPageWrapper} ${display ? '': styles.none}`}>
      {
        svgData.groupArray.map(area => {
          if (selected !== null && area.coords){
            const selectedArea = getAreaDescription(selected)

            if(selectedArea !== null && selectedArea.id === area.id) {
              const header = selectedArea?.headerText
              const caption = selectedArea?.captionText
              const showButton = selectedArea?.showButton
              
              const headerColor:HeaderColor = selectedArea?.headerColor as HeaderColor;

              return (
                  <div key={selectedArea.id} className={styles.townboxWrapper}>
                    <Townbox 
                      headerColor={headerColor}
                      headerText={header}
                      captionText={caption}
                      showButton = {showButton}
                      close={onClose}
                    />
                  </div>
              )
            }
          }
        })
      }
    </div>

    </div>
  )
}

export default Map