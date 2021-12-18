import React, { MouseEventHandler, useEffect, useState } from 'react'
import { BoundingBox, inBoundingBox, Vector2 } from './boundingbox'
import styles from 'components/FoodGroups/foodgroups.module.css'
import { StateDispatch } from '../types'

interface Props {
  onEndDrag: Function
  hoverType: string
  setHoverTypeMutex: StateDispatch<boolean>
  startPosition: Vector2
}

const Draggable: React.FC<Props> = ({
  onEndDrag,
  hoverType,
  setHoverTypeMutex,
  startPosition
}: Props) => {
  const [screenPosition, setScreenPosition] = useState({ x: 0.0, y: 0.0 })
  const [parentRect, setParentRect] = useState<DOMRect | undefined>(undefined)
  const [delta, setDelta] = useState<Vector2 | undefined>(undefined)

  const [ptrEvents, setPtrEvents] = useState(true)

  const dragAround = (e: MouseEvent) => {
    let point: Vector2 = { x: e.clientX, y: e.clientY }
    if (parentRect && delta) {
      let x = ((e.pageX - parentRect.x + delta.x) / parentRect.width) * 100.0
      let y = ((e.pageY - parentRect.y + delta.y) / parentRect.height) * 100.0
      if (x > 100.0 || y > 100.0 || x < 0 || y < 0) return
      setScreenPosition({ x: x, y: y })
    } else {
      console.error('[ ERROR ]: Parent element bb does not exist')
    }
  }

  useEffect(() => {
    console.log(hoverType)
  }, [hoverType])

  const stopDrag = () => {
    setHoverTypeMutex(true)
    console.log(hoverType)
    onEndDrag(hoverType)
    document.removeEventListener('mousemove', dragAround)
    document.removeEventListener('mouseup', stopDrag)
    // setScreenPosition(startPosition)
    setPtrEvents(true)
  }

  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHoverTypeMutex(false)
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

  useEffect(() => {
    if (delta) {
      document.addEventListener('mousemove', dragAround)
      document.addEventListener('mouseup', stopDrag)
    }
  }, [delta])

  useEffect(() => {
    setScreenPosition(startPosition)
  }, [])

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
          <rect width='20' height='20' />
        </svg>
      </div>
    </>
  )
}

export default Draggable
