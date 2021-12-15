import React from 'react'
import FoodGroups from 'components/FoodGroups'
import styles from 'components/FoodGroups/foodgroups.module.css'
import Draggable from '@components/FoodGroups/Draggable'

/**
 */
const FoodGroupsPage: React.FC = () => {
  return (
    <>
      {/* <div className='flex justify-center items-start'> */}
      {/* div is required for the food wheel to resize when the screen height decreases, to keep the whole game on one page w/o scolling */}
      {/* <div className={styles['food-wheel']}>
        </div> */}
      <div className='flex justify-start' draggable={false}>
        <FoodGroups style={{ zIndex: 0 }} />
      </div>
    </>
  )
}

export default FoodGroupsPage
