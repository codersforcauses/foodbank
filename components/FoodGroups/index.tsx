import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from 'components/FoodGroups/foodgroups.module.css'
import WindowResizeHook from '@components/FoodGroups/WindowResizeHook'

import {
  resize_map,
  handleMouseOver,
  handleMouseOut,
  foodGroupsImages,
  angleRegions
} from '@components/FoodGroups/dinamicStyles'

import {
  FoodGroupStates,
  StateDispatch,
  State_
} from '@components/FoodGroups/types'
import { Vector2 } from './Draggable/boundingbox'
import { DAIRY, FRUIT, GRAINS, MEAT, VEGETABLES } from './groups'

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
  const FOODGROUP_STYLES = [
    ' ',
    'z-0',
    'transition',
    'duration-500',
    'ease-in-out',
    'scale-wheel',
    'select-none'
  ].join(' ')

  const [radius, setRadius] = useState(0)
  const [center, setCenter] = useState({ x: 0, y: 0 })
  const [currentRegion, setCurrentRegion] = useState('') // Debounce mouse events

  const makeStyle = () => {
    const state = useState([''])
    return {
      styles: state[0],
      setStyles: state[1]
    }
  }

  const allStates: FoodGroupStates = {
    [MEAT]: makeStyle(),
    [GRAINS]: makeStyle(),
    [DAIRY]: makeStyle(),
    [FRUIT]: makeStyle(),
    [VEGETABLES]: makeStyle()
  }

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
    return ''
  }

  const wheelMouseOver = ({ x, y }: Vector2) => {
    const dx = x - center.x
    const dy = y - center.y
    if (dx * dx + dy * dy < radius * radius) {
      const newRegion = getRegion(Math.atan2(dy, dx))
      if (newRegion !== currentRegion) {
        handleMouseOut(currentRegion, allStates)
        if (newRegion !== '') {
          handleMouseOver(newRegion, allStates)
        }
        setCurrentRegion(newRegion)
      }
    } else if (currentRegion !== '') {
      handleMouseOut(currentRegion, allStates)
      setCurrentRegion('')
    }
  }

  // TODO: Move handlers outside of wheel so we can use the centers of the food objects as a point.
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
      console.log('Override')

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
      {foodGroupsImages.map(group => {
        return (
          <div
            id={group.div_id}
            key={group.div_id}
            className={[
              FOODGROUP_STYLES,
              styles[group.img_styles],
              ...allStates[group.div_id].styles,
              styles['wrapper-fix']
            ].join(' ')}
            draggable={false}
          >
            <Image
              src={group.img_src}
              alt={group.div_id}
              layout='fill'
              className={styles['custom-img']}
              useMap={`#${group.map_name}`}
              id={group.img_id}
              draggable={false}
              priority={true}
            />
          </div>
        )
      })}
    </>
  )
}
export default FoodGroups
