// naming conventions of items in svg = id of group in camelCase, image import name in PascalCase.
// svg tree generated from dev/svgParse.py (super hacky atm)

import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Location } from '../../lib/types'

// Image import - since require is not allowed anymore, reverting to the plague imports
import BackgroundImage from './assets/TuckerMap.png'
import AquaOcean from './assets/locations/AquaOcean.png'
import BananaBunches from './assets/locations/BananaBunches.png'
import BushLand from './assets/locations/BushLand.png'
import CluckyCoop from './assets/locations/CluckyCoop.png'
import CoolCloud from './assets/locations/CoolCloud.png'
import DairyPark from './assets/locations/DairyPark.png'
import FruityOrchard from './assets/locations/FruityOrchard.png'
import GrainField from './assets/locations/GrainField.png'
import GrazingLands from './assets/locations/GrazingLands.png'
import HealthyTown from './assets/locations/HealthyTown.png'
import SupplyStore from './assets/locations/SupplyStore.png'
import VegieZone from './assets/locations/VegieZone.png'
import WickedWaterway from './assets/locations/WickedWaterway.png'
import YoghurtMountains from './assets/locations/YoghurtMountains.png'
import ZombieWasteland from './assets/locations/ZombieWasteland.png'
import SVGLocationGroup from './SVGLocationGroup'

const Map: React.FC = () => {
  const [height, setHeight] = useState(0)
  const elementRef = useRef(null as null | HTMLDivElement)

  const [selected, onSelect] = useState<Location | null>(null)

  useEffect(() => {
    if (elementRef?.current?.clientHeight) {
      setHeight(elementRef?.current?.clientHeight)
    }
  }, []) //empty dependency array so it only runs once at render

  const getClassname = (area: Location) =>
    area === selected ? 'map-selected' : 'map-unselected'

  const onMapClick = (area: Location) => {
    console.log(area)
    if (selected === area) {
      onSelect(null)
    } else {
      onSelect(area)
    }
  }

  // Data can be made from dev/svgParse.py
  return (
    <div
      ref={elementRef}
      className='flex-auto 2xl:flex-none xl:flex-none 2xl:h-4/5 xl:h-4/5 flex justify-center'
    >
      {height === 0 ? null : (
        <div className='svgrow'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 1000 490.56'
            height={height}
            overflow='scroll'
          >
            <g id='bg'>
              <image
                width='7151'
                height='3508'
                transform='scale(0.14)'
                xlinkHref={BackgroundImage}
              />
            </g>
            <SVGLocationGroup
              name={'coolCloud'}
              width={1627}
              height={300}
              transform='translate(7) scale(0.589 0.603)'
              image={CoolCloud}
              className={getClassname('coolCloud')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'fruityOrchard'}
              width={1026}
              height={743}
              transform='translate(131 121) scale(0.139 0.148)'
              image={FruityOrchard}
              className={getClassname('fruityOrchard')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'bushLand'}
              width={940}
              height={757}
              transform='translate(0 159) scale(0.139 0.14)'
              image={BushLand}
              className={getClassname('bushLand')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'vegieZone'}
              width={1502}
              height={731}
              transform='translate(2 254) scale(0.138 0.138)'
              image={VegieZone}
              className={getClassname('vegieZone')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'zombieWasteland'}
              width={456}
              height={186}
              transform='translate(0 384) scale(0.581 0.581)'
              image={ZombieWasteland}
              className={getClassname('zombieWasteland')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'wickedWaterway'}
              width={1216}
              height={842}
              transform='translate(358 228) scale(0.141 0.141)'
              image={WickedWaterway}
              className={getClassname('wickedWaterway')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'supplyStore'}
              width={960}
              height={536}
              transform='translate(524 179) scale(0.139 0.14)'
              image={SupplyStore}
              className={getClassname('supplyStore')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'grazingLands'}
              width={789}
              height={409}
              transform='translate(184 274) scale(0.139 0.142)'
              image={GrazingLands}
              className={getClassname('grazingLands')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'grainField'}
              width={1333}
              height={597}
              transform='translate(465 283) scale(0.144 0.139)'
              image={GrainField}
              className={getClassname('grainField')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'bananaBunches'}
              width={675}
              height={551}
              transform='translate(108 65) scale(0.138 0.136)'
              image={BananaBunches}
              className={getClassname('bananaBunches')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'healthyTown'}
              width={880}
              height={639}
              transform='translate(253 55) scale(0.144 0.139)'
              image={HealthyTown}
              className={getClassname('healthyTown')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'dairyPark'}
              width={1636}
              height={1225}
              transform='translate(360 55) scale(0.139 0.141)'
              image={DairyPark}
              className={getClassname('dairyPark')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'cluckyCoop'}
              width={344}
              height={358}
              transform='translate(498 142) scale(0.12)'
              image={CluckyCoop}
              className={getClassname('cluckyCoop')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'yoghurtMountains'}
              width={1094}
              height={635}
              transform='translate(545 81) scale(0.14 0.14)'
              image={YoghurtMountains}
              className={getClassname('yoghurtMountains')}
              onClick={onMapClick}
            />
            <SVGLocationGroup
              name={'aquaOcean'}
              width={1737}
              height={664}
              transform='translate(259 398) scale(0.139 0.141)'
              image={AquaOcean}
              className={getClassname('aquaOcean')}
              onClick={onMapClick}
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default Map
