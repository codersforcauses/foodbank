import React, { MouseEventHandler, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
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
  const [hoverStyle, setHoverStyle] = useState('z-20')
  const [dragStyle, setDragStyle] = useState('')
  const [nameShow, setNameShow] = useState(false)

  const dragAround = (e: MouseEvent) => {
    if (thisRect && parentRect && delta) {
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
    setDragStyle('')

    props.onEndDrag()
    document.removeEventListener('mousemove', dragAround)
    document.removeEventListener('mouseup', stopDrag)
  }

  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
    let box: DOMRect = e.currentTarget.getBoundingClientRect()
    setThisRect(box)
    setDelta({ x: box.x - e.pageX, y: box.y - e.pageY })
  }

  const float = () => {
    setHoverStyle('z-30')
    setNameShow(true)
  }

  const defloat = () => {
    setHoverStyle('z-20')
    setNameShow(false)
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
        aria-hidden='true'
        className={`${dragDrop} ${hoverStyle} ${dragStyle} transition ease-in duration-100 scale-100 hover:scale-110`}
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
          className='relative pointer-events-none select-none'
          draggable={false}
          hidden={props.hidden}
        >
          <Transition
            className='z-40 absolute bg-white text-primary border-2 border-black rounded-md p-0.5 px-1.5 font-serif'
            show={nameShow}
            enter='transition-opacity ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-in-out duration-300 delay-[400ms]'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            {props.name}
          </Transition>
          <Image
            className='absolute'
            src={props.img_src}
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
