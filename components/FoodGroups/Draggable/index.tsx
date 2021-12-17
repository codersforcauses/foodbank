import React, { MouseEventHandler, useEffect, useState } from 'react'
import { BoundingBox, inBoundingBox, Vector2 } from './boundingbox'
import styles from 'components/FoodGroups/foodgroups.module.css'
import { FoodGroupCharacterImage } from './types'

import Image from 'next/image'

const Draggable: React.FC<FoodGroupCharacterImage> = (props) => {
  const [screenPosition, setScreenPosition] = useState({ x: 0.0, y: 0.0 })
  const [parentRect, setParentRect] = useState<DOMRect | undefined>(undefined)
  const [delta, setDelta] = useState<Vector2 | undefined>(undefined)

  const [ptrEvents, setPtrEvents] = useState(true)

  console.log('props:', props)

  const dragAround = (e: MouseEvent) => {
    let point: Vector2 = { x: e.clientX, y: e.clientY }
    if (parentRect && delta) {
      let box = parentRect
      console.log(delta)

      let x = ((e.pageX - box.x + delta.x) / box.width) * 100.0
      let y = ((e.pageY - box.y + delta.y) / box.height) * 100.0
      if (x > 100.0 || y > 100.0 || x < 0 || y < 0) return
      setScreenPosition({ x: x, y: y })
    } else {
      console.error('[ ERROR ]: Parent element bb does not exist')
    }
  }

  const stopDrag = () => {
    setPtrEvents(true)
    console.log('Stop')
    document.removeEventListener('mousemove', dragAround)
    document.removeEventListener('mouseup', stopDrag)
  }

  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let parentRect: DOMRect
    if (e.target instanceof Element && e.target.parentElement) {
      parentRect = e.target.parentElement.getBoundingClientRect()
      setParentRect(parentRect)
    } else {
      console.error('[ ERROR ]: Parent element bb does not exist')
      return
    }
    setPtrEvents(false)
    let box: DOMRect = e.currentTarget.getBoundingClientRect()
    setDelta({ x: box.x - e.pageX, y: box.y - e.pageY })
  }

  const showImage = (character_image:FoodGroupCharacterImage) => {
    return(
      <Image
        src={character_image.img_src}
        alt={character_image.div_id}
        layout='fill'
        // className={}
        // useMap={/* */}
        id={character_image.bounding_box_id}
      />
    )
  }

  useEffect(() => {
    if (delta) {
      document.addEventListener('mousemove', dragAround)
      document.addEventListener('mouseup', stopDrag)
    }
  }, [delta])

  return (
    <>
      <div
        className={'z-20 ' + styles['drag-drop']}
        onMouseDown={startDrag}
        style={{
          pointerEvents: ptrEvents ? 'auto' : 'none',
          position: 'fixed', // MUST BE FIXED SO ITS COORDINATES ARE RELATIVE TO THE PAGE BASE
          height: 'fit-content',
          left: `${screenPosition.x}%`, // % works!!
          top: `${screenPosition.y}%`,
          width: '20%'
        }}
        draggable={false}
      >
        <svg
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
          fill='#ff0000'
          style={{ zIndex: 0, pointerEvents: 'none' }}
        >
          <Image
            src={props.img_src}
            alt={props.div_id}
            layout='fill'
            // className={}
            // useMap={/* */}
            id={props.bounding_box_id}
          />
          
        </svg>
      </div>
    </>
  )
}

export default Draggable
