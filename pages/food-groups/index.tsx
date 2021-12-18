import React, { createContext, useContext, useEffect, useState } from 'react'
import FoodGroups from 'components/FoodGroups'
import styles from 'components/FoodGroups/foodgroups.module.css'
import Draggable from '@components/FoodGroups/Draggable'

/**
 */

const FoodGroupsPage: React.FC = () => {
  const [hoverType, setHoverType] = useState('')
  const [hoverTypeMutex, setHoverTypeMutex] = useState(false)

  const setHoverMutex = (state: string) => {
    if (!hoverTypeMutex) setHoverType(state)
  }

  const endLambda = (test: string) => {
    console.log(`${test} Test`)
    if (test !== '') {
    }
  }

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
          <FoodGroups setHoverType={setHoverMutex} />
          <Draggable
            onEndDrag={endLambda}
            hoverType={hoverType}
            setHoverTypeMutex={setHoverTypeMutex}
            startPosition={{x:90,y:90}}
          />
        </div>
        <p>{hoverType}</p>
      </div>
    </>
  )
}

export default FoodGroupsPage
