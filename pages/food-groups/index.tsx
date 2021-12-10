import React from 'react'
import FoodGroups from 'components/FoodGroups'
import styles from 'components/FoodGroups/foodgroups.module.css'
import Draggable from '@components/FoodGroups/Draggable'

/**
 */
const FoodGroupsPage: React.FC = () => {
  return (
    <>
      <div className='flex justify-center items-start'>
        {/* div is required for the food wheel to resize when the screen height decreases, to keep the whole game on one page w/o scolling */}
        <div className={styles['food-wheel']}>
          <FoodGroups />
        </div>
        <Draggable boundingBox={{x1:0,y1:0,x2:1000,y2:1000}} />
      </div>
    </>
  )
}

export default FoodGroupsPage
