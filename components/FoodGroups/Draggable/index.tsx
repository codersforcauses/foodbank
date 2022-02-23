import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

import { Vector2 } from './boundingbox'
import { FoodGroupCharacterImage } from './types'
import { dragDrop } from '../styles'
import { State_, StateDispatch } from '../types'

export const enum DRAGGING_STATE {
  WHEEL,
  START,
  DRAGGING,
  UNDEFINED
}

interface Props extends FoodGroupCharacterImage {
  onEndDrag: Function
  onStartDrag: Function

  startPosition: Vector2
  endPosition: Vector2

  screenPosition: Vector2
  setScreenPosition: StateDispatch<Vector2>
  setAbsPosition: StateDispatch<Vector2>

  hidden: boolean
  draggableZone: DOMRect | undefined
  index: number
  draggingStates: State_<DRAGGING_STATE[]>
}

const Draggable: React.FC<Props> = (props: Props) => {
  const { screenPosition, setScreenPosition, setAbsPosition } = props
  const [parentRect, setParentRect] = useState<DOMRect | undefined>(undefined)
  const [thisRect, setThisRect] = useState<DOMRect | undefined>(undefined)
  const [delta, setDelta] = useState<Vector2 | undefined>(undefined)
  const [dragStyle, setDragStyle] = useState('')
  const [nameShow, setNameShow] = useState(false)
  const [imgUpdate, setImgUpdate] = useState(0)

  const [oldDraggingState, setOldDraggingState] = useState(
    () => DRAGGING_STATE.UNDEFINED
  )

  useEffect(() => {
    const newDraggingState = props.draggingStates[0][props.index]
    if (newDraggingState === oldDraggingState) return
    switch (newDraggingState) {
      case DRAGGING_STATE.WHEEL:
        setScreenPosition(props.endPosition)
        break
      case DRAGGING_STATE.START:
        setScreenPosition(props.startPosition)
        break
      // case DRAGGING_STATE.DRAGGING:
      //   break
    }
    setOldDraggingState(newDraggingState)
  }, [
    props.draggingStates[0],
    props.screenPosition,
    props.startPosition,
    oldDraggingState
  ])

  useEffect(() => {
    setOldDraggingState(DRAGGING_STATE.UNDEFINED)
  }, [props.startPosition])

  const dragAround = (
    mouseEvent: undefined | MouseEvent,
    touchEvent: undefined | TouchEvent
  ) => {
    let e, ex, ey
    if (mouseEvent !== undefined) {
      e = mouseEvent
      ex = mouseEvent.pageX
      ey = mouseEvent.pageY
    } else if (touchEvent !== undefined) {
      e = touchEvent
      ex = touchEvent.touches[0].clientX
      ey = touchEvent.touches[0].clientY
    } else {
      return
    }

    if (thisRect && parentRect && delta) {
      const x_max = (1 - thisRect.width / parentRect.width) * 100
      const y_max = (1 - thisRect.height / parentRect.height) * 100

      const absPos = {
        x: ex + delta.x + thisRect.width / 2,
        y: ey + delta.y + thisRect.height / 2
      }
      setAbsPosition(absPos)

      let x = ((ex - parentRect.x + delta.x) / parentRect.width) * 100
      let y = ((ey - parentRect.y + delta.y) / parentRect.height) * 100

      const clamp = (min: number, v: number, max: number) =>
        Math.max(Math.min(max, v), min)

      x = clamp(0, x, x_max)
      y = clamp(0, y, y_max)
      if (parentRect === undefined) throw new Error('parentRect undefined')
      setScreenPosition({ x: x, y: y })
    } else {
      console.error('[ ERROR ]: Parent element bb does not exist')
    }
  }

  const dragAroundMouse = (e: MouseEvent) => dragAround(e, undefined)
  const dragAroundTouch = (e: TouchEvent) => dragAround(undefined, e)

  const stopDrag = () => {
    setDragStyle('')

    props.onEndDrag()
    document.removeEventListener('mousemove', dragAroundMouse)
    document.removeEventListener('mouseup', stopDrag)
    document.removeEventListener('touchmove', dragAroundTouch)
    document.removeEventListener('touchend', stopDrag)
  }

  const startDrag = (
    mouseEvent: undefined | React.MouseEvent<HTMLDivElement, MouseEvent>,
    touchEvent: undefined | React.TouchEvent<HTMLDivElement>
  ) => {
    let e, x, y
    if (mouseEvent !== undefined) {
      e = mouseEvent
      x = mouseEvent.pageX
      y = mouseEvent.pageY
    } else if (touchEvent !== undefined) {
      e = touchEvent
      x = touchEvent.touches[0].clientX
      y = touchEvent.touches[0].clientY
    } else {
      return
    }

    const draggingStatesTmp = [...props.draggingStates[0]]
    draggingStatesTmp[props.index] = DRAGGING_STATE.DRAGGING
    props.draggingStates[1](draggingStatesTmp)

    float()
    setDragStyle('animate-wiggle wiggle-animate')

    props.onStartDrag(props.type)
    if (e.target instanceof Element) {
    } else {
      console.error('[ ERROR ]: Parent element bb does not exist')
      return
    }
    props.onStartDrag(props.type) // FoodGroup game logic checking
    let box: DOMRect = e.currentTarget.getBoundingClientRect()
    setThisRect(box)
    setDelta({ x: box.x - x, y: box.y - y })
  }

  useEffect(() => {
    let parentRect: DOMRect
    if (props.draggableZone) {
      parentRect = props.draggableZone
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
      document.addEventListener('mousemove', dragAroundMouse)
      document.addEventListener('touchmove', dragAroundTouch)
      document.addEventListener('mouseup', stopDrag)
      document.addEventListener('touchend', stopDrag)
    }
  }, [delta])

  // Needed to force reload because of the nextjs Image component using cached images
  useEffect(() => {
    setImgUpdate(imgUpdate + 1)
  }, [props.img_src])

  return (
    <>
      <div
        aria-hidden='true'
        className={dragDrop}
        onMouseOver={float}
        onTouchMove={float}
        onMouseOut={defloat}
        onTouchEnd={defloat}
        onMouseDown={e => startDrag(e, undefined)}
        onTouchStart={e => startDrag(undefined, e)}
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
          <Image
            key={imgUpdate}
            className='absolute'
            src={props.img_src}
            alt={props.div_id}
            width='150%'
            height='150%'
            layout='responsive'
            draggable={false}
            priority={true}
          />
        </div>
      </div>
    </>
  )
}

export default Draggable
