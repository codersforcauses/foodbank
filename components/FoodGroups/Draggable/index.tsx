import React, { MouseEventHandler, useEffect, useState } from 'react'
import { BoundingBox, inBoundingBox, Vector2 } from './boundingbox'

const Draggable: React.FC<{boundingBox:BoundingBox}> = (props) => {
  const { boundingBox } = props;

  // const [dragging, setDragging] = useState(false)

  const [windowDimensions, setWindowDimensions] = useState({x:1000,y:1000})
  const [scaleVector, setScaleVector] = useState({x:1,y:1})

  const [cursorLocation, setCursorLocation] = useState({ x: 100, y: 100 })
  const [relativePosition, setRelativePosition] = useState({ dx: 0, dy: 0 })

  const dragAround=(e:MouseEvent)=>{
    let point : Vector2 = {x:e.clientX,y:e.clientY};
    // if (inBoundingBox(boundingBox,{x:e.clientX-relativePosition.dx,y:e.clientY-relativePosition.dy})) {
      setCursorLocation(point)
    // } else {
    //   console.log("Out of box")
    // }
  }
  
  const stopDrag=()=>{
    document.removeEventListener('mousemove',dragAround);
    document.removeEventListener('mouseup',stopDrag);
  }

  const startDrag=(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    let box : DOMRect=e.currentTarget.getBoundingClientRect()
    setRelativePosition({dx:box.x-e.pageX,dy:box.y-e.pageY})
    setCursorLocation({ x: e.clientX, y: e.clientY })
    document.addEventListener('mousemove',dragAround);
    document.addEventListener('mouseup',stopDrag);
  }

  const handleResize = () => {
    let newWidth = document.body.clientWidth
    let newHeight = document.body.clientHeight
    setScaleVector({x:newWidth/windowDimensions.x,y:newHeight/windowDimensions.y})
    setWindowDimensions({x:newWidth,y:newHeight})
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize) // TODO: Remove event listener, move to separate object.
    setWindowDimensions({x:document.body.clientWidth,y:document.body.clientHeight})
  }, [setWindowDimensions])

  return (
    <>
      <div
        onMouseDown={startDrag}
        style={{
          userSelect: 'none',
          position:"fixed", // MUST BE FIXED SO ITS COORDINATES ARE RELATIVE TO THE PAGE BASE
          // transform:`translate(${cursorLocation.x+relativePosition.dx}px,${cursorLocation.y+relativePosition.dy}px)`,
          // left:0,
          // top:0,
          left:`${scaleVector.x*(cursorLocation.x+relativePosition.dx)}px`,
          top:`${scaleVector.y*(cursorLocation.y+relativePosition.dy)}px`,
          width: '20%',
        }}
        // className='draggable'
        draggable='false'
      >
        <svg
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
          fill='#ff0000'
          style={{ zIndex: 100 }}
        >
          <rect width='20' height='20' />
        </svg>
      </div>
    </>
  )
}

export default Draggable
