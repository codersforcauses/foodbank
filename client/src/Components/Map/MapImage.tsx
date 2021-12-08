import React from 'react'
import mapImg from './assets/TuckerMap.jpg'
import svgData from './svgImageData.json'

interface MapProps {
  scale: number;
  setTransform: (xtrans: number, ytrans: number, scale: number ) => void;
  setDisplay: (display: boolean) => void;
  display: boolean;
  selected: any;
  setSelect: (state: any) => void
}

const MapImage = ({
  scale,
  setTransform,
  setDisplay,
  selected,
  setSelect
}: MapProps) => {

  const handleClick = (
    event: any,
    setTransform: any,
    xtrans: number,
    ytrans: number
  ) => {
    //need to change this type
    event.preventDefault()
    const area = event.target.alt
    selected === area ? setSelect(null) : setSelect(area)
    setDisplay(true)
    setTransform(xtrans, ytrans, 2)
  }

  return (
    <div
      className='block w-full min-h-full items-stretch'
      style={{ minHeight: '900px' }}
    >
      <div className='flex relative max-w-screen'>
        <img src={mapImg} alt='Tucker Island Map' useMap='#tuckerislandmap' />

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
                Location[location.id as keyof typeof Location] === selected
                  ? 'map-selected'
                  : 'map-unselected'
              return (
                <area
                  key={location.id}
                  alt={location.id}
                  onClick={e => {
                    handleClick(e, setTransform, -xtrans, -ytrans)
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
    </div>
  )
}

export default MapImage
