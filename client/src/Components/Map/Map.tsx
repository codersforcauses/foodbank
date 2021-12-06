

const Map = (setTransform) => {
    const [scale, setScale] = useState(1)
    const [height, setHeight] = useState(1)

    const close = () => {
        setSelect(null)
        setDisplay(false)
      }
      const selectArea = (area: Location) => {
        selected === area ? setSelect(null) : setSelect(area)
        setDisplay(!display)
      }
    
      const handleClick = (
        event: any,
        setTransform: any,
        xtrans: number,
        ytrans: number
      ) => {
        //need to change this type
        event.preventDefault()
        const area = event.target.alt
        selectArea(Location[area as keyof typeof Location])
        setTransform(xtrans, ytrans, 2)
      }

      return (
  <div
    ref={elementRef}
    className='block w-full min-h-full items-stretch'
    style={{ minHeight: '900px' }}
  >
    {height === 0 ? null : (
      <div className='svgrow'>
        {/* <img
                        src={mapImg}
                        alt='Tucker Island Map'
                        useMap='#tuckerislandmap'
                      /> */}

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
    )}
  </div>)
}


export default Map