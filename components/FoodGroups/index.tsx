/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import dairy from 'public/images/FoodGroups/dairy-shadow.png'
import meat from 'public/images/FoodGroups/meat-shadow.png'
import fruit from 'public/images/FoodGroups/fruit-shadow.png'
import grains from 'public/images/FoodGroups/grains-shadow.png'
import vegetables from 'public/images/FoodGroups/vegetables-shadow.png'

import styles from 'components/FoodGroups/foodgroups.module.css'

/**
 * A page displaying all food groups in a pie chart
 */

interface Center {
  x: number
  y: number
}

const inRange = (min: number) => (max: number) => (value: number) => {
  return min <= value && max >= value
}

const validAngle = inRange(0)(360)
const validRadius = inRange(0)(Infinity)
const validCenter = (center: Center): boolean => {
  const validPoint = inRange(0)(Infinity)
  return validPoint(center.x) && validPoint(center.y)
}

const rad = (angle: number): number => (angle * Math.PI) / 180.0

const sliceCoords = (
  center: Center,
  radius: number,
  startAngle: number,
  endAngle: number
): string => {
  let coords = `${center.x},${center.y},`
  if (!validAngle(startAngle)) console.log('invalid start angle')
  if (!validAngle(endAngle)) console.log('invalid end angle')
  if (!validRadius(radius)) console.log('invalid radius')
  if (!validCenter(center)) console.log('invalid center')

  const min = Math.min(startAngle, endAngle)
  const max = Math.max(startAngle, endAngle)

  const xCoord = (angle: number) => Math.round(radius * Math.cos(angle))
  const yCoord = (angle: number) => Math.round(radius * Math.sin(angle))

  // ENSURE THE START ANGLE IS INCLUDED
  coords += `${xCoord(rad(min)) + center.x},${yCoord(rad(min)) + center.y},`
  // EVERY 3 DEGREES BECAUSE DOING EVERY ANGLE IS TOO MUCH
  for (let angle = min + 1; angle < max; angle+=3) {
    console.log(`${xCoord(rad(angle))},${yCoord(rad(angle))}`)
    coords += `${xCoord(rad(angle)) + center.x},${yCoord(rad(angle)) + center.y},`
  }
  // ENSURE THE END ANGLE IS INCLUDED
  coords += `${xCoord(rad(max)) + center.x},${yCoord(rad(max)) + center.y}`

  return coords
}

const FoodGroups: React.FC = () => {
  const [hover, setHover] = useState(' ')  

  return (
    <div className='flex justify-center'>
      <div className='flex'>
        {/* <img src={dairy.src} alt='explosion' className={styles["dairy"] + ' transform hover:scale-105 absolute ' + 'transition duration-500 ease-in-out'}></img> */}
        {/* <img src={meat.src} alt='explosion' className={styles["meat"] + ' transform hover:scale-105 absolute ' + 'transition duration-500 ease-in-out'}></img> */}
        {/* <img src={fruit.src} alt='explosion' className={styles["fruit"] + ' transform hover:scale-105 absolute ' + 'transition duration-500 ease-in-out'}></img> */}
        {/* <img src={vegetables.src} alt='explosion' className={styles["vegetables"] + ' transform hover:scale-105 absolute ' + 'transition duration-500 ease-in-out'}></img> */}
        <img
          src={grains.src}
          useMap='#grainMap'
          alt='explosion'
          className={
            hover
            // styles['grains']
            // + ' transform hover:scale-105 absolute '
            // + 'transition duration-500 ease-in-out'
          }
        ></img>
      </div>
      <map name='grainMap'>
        <area
          shape='poly'
          coords={sliceCoords({x:416,y:407}, 393, 270, 161)}
          alt='Computer'
          onMouseEnter={() => setHover(' border-2')}
          onMouseLeave={() => setHover(' ')}
        ></area>
      </map>
    </div>
  )
}
export default FoodGroups
