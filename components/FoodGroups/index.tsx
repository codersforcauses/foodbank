/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import dairy from 'public/images/FoodGroups/dairy-shadow.png'
import meat from 'public/images/FoodGroups/meat-shadow.png'
import fruit from 'public/images/FoodGroups/fruit-shadow.png'
import grains from 'public/images/FoodGroups/grains-shadow.png'
import vegetables from 'public/images/FoodGroups/vegetables-shadow.png'
import style from './foodgroups.module.css'

/**
 * A page displaying all food groups in a pie chart
 */

interface Center {
  x: number
  y: number
}

const rad = (angle: number): number => (angle * Math.PI) / 180.0

const sliceCoords = (
  center: Center,
  radius: number,
  startAngle: number,
  endAngle: number
): string => {
  let coords = `${center.x},${center.y},`

  const min = Math.min(startAngle, endAngle)
  const max = Math.max(startAngle, endAngle)

  const xCoord = (angle: number) => Math.round(radius * Math.cos(angle))
  const yCoord = (angle: number) => Math.round(radius * Math.sin(angle))

  // ENSURE THE START ANGLE IS INCLUDED
  let x = xCoord(rad(min)) + center.x
  let y = yCoord(rad(min)) + center.y
  coords += `${x},${y},`

  // EVERY 3 DEGREES BECAUSE DOING EVERY ANGLE IS UNNECESSARY
  for (let angle = min + 3; angle < max; angle += 3) {
    x = xCoord(rad(angle)) + center.x
    y = yCoord(rad(angle)) + center.y
    coords += `${x},${y},`
  }

  // ENSURE THE END ANGLE IS INCLUDED
  x = xCoord(rad(max)) + center.x
  y = yCoord(rad(max)) + center.y
  coords += `${x},${y}`

  return coords
}

const FoodGroups: React.FC = () => {
  const [grainHover, setGrainHover] = useState(' ')
  const [vegetablesHover, setVegetablesHover] = useState(' ')
  const [meatHover, setMeatHover] = useState(' ')
  const [dairyHover, setDairyHover] = useState(' ')
  const [fruitHover, setFruitHover] = useState(' ')

  return (
    <div className='flex justify-center'>
      <div style={{ display: 'grid', gridTemplateAreas: "'A B .' 'C D E'" }}>
        <img
          id='grainImage'
          src={grains.src}
          useMap='#grainMap'
          alt='explosion'
          className={grainHover}
          style={{ gridArea: 'A', gridColumn: 'span 1 / span 1' }}
        ></img>
        <img
          id='vegetableImage'
          src={vegetables.src}
          useMap='#vegetableMap'
          alt='explosion'
          className={vegetablesHover}
          style={{ gridArea: 'B', gridColumn: 'span 2 / span 2' }}
        ></img>
        <img
          src={meat.src}
          alt='explosion'
          useMap='#meatMap'
          className={meatHover}
          style={{ gridArea: 'C' }}
        ></img>
        <img
          src={dairy.src}
          alt='explosion'
          useMap='#dairyMap'
          className={dairyHover}
          style={{ gridArea: 'D' }}
        ></img>
        <img
          src={fruit.src}
          alt='explosion'
          useMap='#fruitMap'
          className={fruitHover}
          style={{ gridArea: 'E' }}
        ></img>
      </div>
      <map name='grainMap'>
        <area
          shape='poly'
          coords={sliceCoords({ x: 416, y: 407 }, 393, 270, 161)}
          onMouseEnter={() => setGrainHover('transform scale-105')}
          onMouseLeave={() => setGrainHover(' ')}
        ></area>
      </map>
      <map name='vegetableMap'>
        <area
          shape='poly'
          coords={sliceCoords({ x: 17, y: 408 }, 395, 271, 373)}
          onMouseEnter={() => setVegetablesHover('transform scale-105')}
          onMouseLeave={() => setVegetablesHover(' ')}
        ></area>
      </map>
      <map name='meatMap'>
        <area
          shape='poly'
          coords={sliceCoords({ x: 409, y: 16 }, 410, 161, 103)}
          onMouseEnter={() => setMeatHover('transform scale-105')}
          onMouseLeave={() => setMeatHover(' ')}
        ></area>
      </map>
      <map name='dairyMap'>
        <area
          shape='poly'
          coords={sliceCoords({ x: 144, y: 30 }, 490, 103, 57)}
          onMouseEnter={() => setDairyHover('transform scale-105')}
          onMouseLeave={() => setDairyHover(' ')}
        ></area>
      </map>
      <map name='fruitMap'>
        <area
          shape='poly'
          coords={sliceCoords({ x: 28, y: 18 }, 390, 57, 14)}
          onMouseEnter={() => setFruitHover('transform scale-105')}
          onMouseLeave={() => setFruitHover(' ')}
        ></area>
      </map>
    </div>
  )
}
export default FoodGroups
