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
      <div className='flex justify-center items-start' draggable={false}>
        <FoodGroups/>
        {/* <div style={{ width: '50%', height:'50%', backgroundColor:'yellowgreen' }}>Hello</div> */}
      </div>
    </>
  )
}

export default FoodGroupsPage
