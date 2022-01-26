import React, { MouseEventHandler, useEffect, useState } from 'react'
import { BoundingBox, inBoundingBox, Vector2 } from './boundingbox'
import styles from 'components/FoodGroups/foodgroups.module.css'
import { FoodGroupCharacterImage } from './types'

import Image from 'next/image'
import { StateDispatch } from '../types'
import { dragDrop } from '../styles'

interface Props extends FoodGroupCharacterImage {
  onEndDrag: Function
  onStartDrag: Function
  setScreenPosition: StateDispatch<Vector2>
  setAbsPosition: StateDispatch<Vector2>
  screenPosition: Vector2
  hidden: boolean
}

const Draggable: React.FC<Props> = (props: Props) => {
  const { screenPosition, setScreenPosition, setAbsPosition } = props
  const [parentRect, setParentRect] = useState<DOMRect | undefined>(undefined)
  const [thisRect, setThisRect] = useState<DOMRect | undefined>(undefined)
  const [delta, setDelta] = useState<Vector2 | undefined>(undefined)

  const dragAround = (e: MouseEvent) => {
    if (thisRect && parentRect && delta) {
      console.log(thisRect.width, thisRect.height)

      setAbsPosition({
        x: e.pageX + delta.x - parentRect.x + thisRect.width / 2,
        y: e.pageY + delta.y - parentRect.y + thisRect.height / 2
      })
      let x = ((e.pageX - parentRect.x + delta.x) / parentRect.width) * 100.0
      let y = ((e.pageY - parentRect.y + delta.y) / parentRect.height) * 100.0
      if (x > 100 || y > 100 || x < 0 || y < 0) return
      setScreenPosition({ x: x, y: y })
    } else {
      console.error('[ ERROR ]: Parent element bb does not exist')
    }
  }

  const stopDrag = () => {
    props.onEndDrag()
    document.removeEventListener('mousemove', dragAround)
    document.removeEventListener('mouseup', stopDrag)
  }

  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(props.type)
    props.onStartDrag(props.type)
    let parentRect: DOMRect
    if (e.target instanceof Element && e.target.parentElement) {
      parentRect = e.target.parentElement.getBoundingClientRect()
      setParentRect(parentRect)
    } else {
      console.error('[ ERROR ]: Parent element bb does not exist')
      return
    }
    let box: DOMRect = e.currentTarget.getBoundingClientRect()
    setThisRect(box)
    setDelta({ x: box.x - e.pageX, y: box.y - e.pageY })
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
        className={dragDrop}
        onMouseDown={startDrag}
        draggable={false}
        style={{
          left: `${screenPosition.x}%`,
          top: `${screenPosition.y}%`
        }}
      >
        <div
          className='z-0 pointer-events-none select-none'
          draggable={false}
          hidden={props.hidden}
        >
          <Image
            src={'/props.img_src'}
            alt={props.div_id}
            width='200%'
            height='200%'
            draggable={false}
            priority={true}
          />
        </div>
      </div>
    </>
  )
}

export default Draggable
