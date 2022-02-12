import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { Vector2 } from './boundingbox'
import { FoodGroupCharacterImage } from './types'
import styles from 'components/FoodGroups/foodgroups.module.css'

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
  draggableZone: DOMRect | undefined
}

const Draggable: React.FC<Props> = (props: Props) => {
  const { screenPosition, setScreenPosition, setAbsPosition } = props
  const [parentRect, setParentRect] = useState<DOMRect | undefined>(undefined)
  const [thisRect, setThisRect] = useState<DOMRect | undefined>(undefined)
  const [delta, setDelta] = useState<Vector2 | undefined>(undefined)
  const [dragStyle, setDragStyle] = useState('')
  const [nameShow, setNameShow] = useState(false)
  const [imgUpdate, setImgUpdate] = useState(0)

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

    console.log(props.name, props.img_src, props.type)
    props.onStartDrag(props.type)
    if (e.target instanceof Element) {
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

  // Needed to force reload because of the nextjs Image component using cached images
  useEffect(() => {
    // console.log(imgUpdate, props.img_src, props.name, props.hidden)
    setImgUpdate(imgUpdate + 1)
  }, [props.img_src])

  return (
    <>
      <div
        aria-hidden='true'
        className={dragDrop}
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
            show={!props.hidden && nameShow}
            enter='transition-opacity ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-in-out duration-300 delay-[400ms]'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            {props.name}
          </Transition>
          {/* <img className='absolute' src={props.img_src} /> */}
          <Image
            key={imgUpdate}
            className='absolute'
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
