import React, { MouseEventHandler, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { BoundingBox, inBoundingBox, Vector2 } from './boundingbox'
import styles from 'components/FoodGroups/foodgroups.module.css'
import { FoodGroupCharacterImage } from './types'
import styles from 'components/FoodGroups/foodgroups.module.css'

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
  const [dragStyle, setDragStyle] = useState('')
  const [nameShow, setNameShow] = useState(false)

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
    float()
    setDragStyle('animate-wiggle wiggle-animate')

    console.log(props.type)
    props.onStartDrag(props.type)
    if (e.target instanceof Element) {
    } 
    else {
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

  useEffect(() => {
    let parentRect: DOMRect
    if (props.draggableZone) {
      parentRect = props.draggableZone
      // console.log(parentRect)
      // const newParentRect: DOMRect = new DOMRect(parentRect.x, parentRect.y, parentRect.width*2, parentRect.height)
      setParentRect(parentRect)
    }
  }, [props.draggableZone])

  const float = () => {
    setNameShow(true)
  }

  const defloat = () => {
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
        className={`${dragDrop} transition ease-in duration-100 scale-100 z-20 hover:scale-110 hover:z-30`}
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
          className={`${dragStyle} relative pointer-events-none select-none`}
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
