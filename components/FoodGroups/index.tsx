import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  angleRegions,
  foodGroupsImages,
  handleMouseOut,
  handleMouseOver,
  resize_map
} from '@components/FoodGroups/dinamicStyles'
import { State } from '@components/FoodGroups/types'
import WindowResizeHook from '@components/FoodGroups/WindowResizeHook'

import { ORIGIN_VECTOR2, Vector2 } from './Draggable/boundingbox'
import { FOOD_GROUPS, GROUPS } from './groups'
import { customImg, sliceBaseStyle, sliceDimensions } from './styles'

import styles from 'components/FoodGroups/foodgroups.module.css'

/**
 * A page displaying all food groups in a pie chart
 */

interface Props {
  setHoverType: Function
  enabled: boolean
  overrideMouse: boolean
  overrideMousePosition: Vector2
}

const FoodGroups = ({
  setHoverType,
  enabled,
  overrideMouse,
  overrideMousePosition
}: Props) => {
  const [radius, setRadius] = useState(0)
  const [center, setCenter] = useState(ORIGIN_VECTOR2)
  const [currentRegion, setCurrentRegion] = useState(GROUPS.NONE) // Debounce mouse events

  const makeStyle = () => {
    const state = useState([''])
    return {
      styles: state[0],
      setStyles: state[1]
    }
  }

  const allStates: Record<string, State<string[]>> = {}

  FOOD_GROUPS.forEach(type => {
    allStates[type] = makeStyle()
  })

  useEffect(() => {
    resize_map({ setCenter, setRadius })
  }, [setCenter, setRadius])

  const getRegion = (theta: number) => {
    for (let i = 0; i < angleRegions.length; i++) {
      const region = angleRegions[i]
      if (theta > region.start && theta < region.end) {
        return region.region_name
      }
    }
    return GROUPS.NONE
  }

  const wheelMouseOver = ({ x, y }: Vector2) => {
    const dx = x - center.x
    const dy = y - center.y
    if (dx * dx + dy * dy < radius * radius) {
      const newRegion = getRegion(Math.atan2(dy, dx))
      if (newRegion !== currentRegion) {
        handleMouseOut(currentRegion, allStates)
        if (newRegion !== GROUPS.NONE) {
          handleMouseOver(newRegion, allStates)
        }
        setCurrentRegion(newRegion)
      }
    } else if (currentRegion !== GROUPS.NONE) {
      handleMouseOut(currentRegion, allStates)
      setCurrentRegion(GROUPS.NONE)
    }
  }

  useEffect(() => {
    const handler = (e: MouseEvent) =>
      wheelMouseOver({ x: e.clientX, y: e.clientY })
    if (enabled && !overrideMouse) {
      document.addEventListener('mousemove', handler)
    } else {
      document.removeEventListener('mousemove', handler)
    }
    return () => {
      document.removeEventListener('mousemove', handler)
    }
  }, [radius, center, currentRegion, enabled, overrideMouse])

  // RESET HOVER STYLES
  useEffect(() => {
    if (!enabled) {
      Object.keys(allStates).forEach(k => {
        allStates[k].setStyles([''])
      })
    }
  }, [enabled])

  useEffect(() => {
    const handler = (e: TouchEvent) =>
      wheelMouseOver({ x: e.touches[0].clientX, y: e.touches[0].clientY })
    if (enabled && !overrideMouse) {
      document.addEventListener('touchmove', handler)
    } else {
      document.removeEventListener('touchmove', handler)
    }
    return () => {
      document.removeEventListener('touchmove', handler)
    }
  }, [radius, center, currentRegion, enabled, overrideMouse])

  useEffect(() => {
    if (overrideMouse) {
      wheelMouseOver(overrideMousePosition)
    }
  }, [overrideMouse, overrideMousePosition])

  useEffect(() => {
    setHoverType(currentRegion)
  }, [currentRegion])

  return (
    <>
      {/* Handles resizing maps on screen resize for SSR */}
      <WindowResizeHook params={{ setRadius, setCenter }} />
      <div
        className='grid grid-cols-1 bg-blue w-[90vh]'
        id='bluezone'
        draggable={false}
      >
        {foodGroupsImages.map(group => {
          return (
            <div
              id={group.div_id}
              key={group.div_id}
              className={[
                sliceBaseStyle,
                ...allStates[group.div_id].styles,

                styles[group.img_styles], // Needed for the :root
                styles['wrapper-fix'] // Needed for the span fix
              ].join(' ')}
              style={sliceDimensions[group.img_styles]}
              draggable={false}
            >
              <Image
                src={group.img_src}
                alt={group.div_id}
                layout='fill'
                className={customImg}
                useMap={`#${group.map_name}`}
                id={group.img_id}
                draggable={false}
                priority={true}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default FoodGroups
