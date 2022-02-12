import React, { MouseEventHandler, useEffect, useState } from 'react'
import { BoundingBox, inBoundingBox, Vector2 } from './boundingbox'
import styles from 'components/FoodGroups/foodgroups.module.css'
import { FoodGroupCharacterImage } from './types'

import Image from 'next/image'
import { StateDispatch } from '../types'
import { dragDrop } from '../styles'
import { xor128 } from 'seedrandom'

interface Props extends FoodGroupCharacterImage {
  onEndDrag: Function
  onStartDrag: Function
  setScreenPosition: StateDispatch<Vector2>
  setAbsPosition: StateDispatch<Vector2>
  screenPosition: Vector2
  hidden: boolean
  draggableZone: DOMRect | undefined
}

const Draggable: React.FC<Props> = (props: Props) => {
  const { screenPosition, setScreenPosition, setAbsPosition } = props
  const [parentRect, setParentRect] = useState<DOMRect | undefined>(undefined)
  const [thisRect, setThisRect] = useState<DOMRect | undefined>(undefined)
  const [delta, setDelta] = useState<Vector2 | undefined>(undefined)
  const [hoverStyle, setHoverStyle] = useState('z-20 ' + styles['drag-drop'])
  const [dragStyle, setDragStyle] = useState('')

  const dragAround = (e: MouseEvent) => {
    if (thisRect && parentRect && delta) {
      setAbsPosition({
        x: e.pageX + delta.x + thisRect.width / 2,
        y: e.pageY + delta.y + thisRect.height / 2
      })
      // console.log('delta.x:', delta.x, 'delta.y:', delta.y)
      let x = ((e.pageX - parentRect.x + delta.x) / parentRect.width) * 100
      let y = ((e.pageY - parentRect.y + delta.y) / parentRect.height) * 100
      // console.log('x:', x, 'y:', y)
      // const x = parentRect.x  / parentRect.width * 100 + ((e.pageX - parentRect.x + delta.x) / (window.screen.width)) *100
      // const y = parentRect.y / parentRect.height * 100 + ((e.pageY - parentRect.y + delta.y) / window.screen.height) * 100
      // if (x > parentRect.right || y > parentRect.bottom || x < parentRect.left || y < parentRect.top) return
      // console.log('State Screen Position:', setScreenPosition)
      setScreenPosition({ x: x, y: y })
    } else {
      console.error('[ ERROR ]: Parent element bb does not exist')
    }
  }

  const stopDrag = () => {
    setDragStyle('')

    props.onEndDrag()
    // console.log(parentRect?.x, parentRect?.y)
    document.removeEventListener('mousemove', dragAround)
    document.removeEventListener('mouseup', stopDrag)
  }

  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(props.type)
    float()
    setDragStyle('animate-wiggle')

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
    props.onStartDrag(props.type) // FoodGroup game logic checking
    let box: DOMRect = e.currentTarget.getBoundingClientRect()
    setThisRect(box)
    // console.log(
    //   'start drag:',
    //   'box.x: ',
    //   box.x,
    //   'e.pageX',
    //   e.pageX,
    //   'box.y',
    //   box.y,
    //   'e.pageY',
    //   e.pageY
    // )
    setDelta({ x: box.x - e.pageX, y: box.y - e.pageY })
  }

  const float = () => {
    setHoverStyle('z-30 ' + styles['drag-drop'])
  }

  const defloat = () => {
    setHoverStyle('z-20 ' + styles['drag-drop'])
  }

  useEffect(() => {
    let parentRect: DOMRect
    if (props.draggableZone) {
      parentRect = props.draggableZone
      // console.log(parentRect)
      // const newParentRect: DOMRect = new DOMRect(parentRect.x, parentRect.y, parentRect.width*2, parentRect.height)
      setParentRect(parentRect)
    }
  }, [props.draggableZone])

  useEffect(() => {
    if (delta) {
      document.addEventListener('mousemove', dragAround)
      document.addEventListener('mouseup', stopDrag)
    }
  }, [delta])

  return (
    <>
      <div
        aria-hidden='true'
        className={
          dragDrop +
          `${hoverStyle} ${dragStyle} w-44 h-44 transition ease-in duration-100 scale-100 hover:scale-110`
        }
        onMouseOver={float}
        onMouseOut={defloat}
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
          {/* {Math.round(screenPosition.x)} {','} {Math.round(screenPosition.y)} */}
          <Image
            src={props.img_src}
            alt={props.div_id}
            width='100%'
            height='100%'
            // layout='fill'
            draggable={false}
            priority={true}
          />
        </div>
      </div>
    </>
  )
}

export default Draggable
