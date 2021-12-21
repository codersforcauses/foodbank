import React, { createContext, useContext, useEffect, useState } from 'react'
import FoodGroups from 'components/FoodGroups'
import styles from 'components/FoodGroups/foodgroups.module.css'
import Draggable from '@components/FoodGroups/Draggable'

/**
 */

// FIXME: Hack to ensure function uses updated state variables
const updatedFunction = (f: Function) => {
  const [rerender, setRerender] = useState(0)
  useEffect(() => {
    f()
  }, [rerender])
  return () => setRerender(rerender + 1)
}

const FoodGroupsPage: React.FC = () => {
  const [hoverType, setHoverType] = useState('')

  const endDragF = updatedFunction(() => {
    console.log(`Dropped on ${hoverType}`)
  })

  return (
    <>
      {/* <div className='flex justify-center items-start'> */}
      {/* div is required for the food wheel to resize when the screen height decreases, to keep the whole game on one page w/o scolling */}
      {/* <div className={styles['food-wheel']}>
        </div> */}
      <div className='flex justify-start' draggable={false}>
        <div
          // className='flex flex-col'
          // style={{ flexShrink: 0, position: 'relative' }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            maxWidth: '95vh',
            width: '80%'
          }}
          draggable={false}
        >
          <FoodGroups setHoverType={setHoverType} />
          <Draggable onEndDrag={endDragF} startPosition={{ x: 90, y: 90 }} />
        </div>
        <p>{hoverType}</p>
      </div>
    </>
  )
}

export default FoodGroupsPage
