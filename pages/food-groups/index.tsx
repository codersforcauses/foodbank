import React from 'react'
import FoodGroups from 'components/FoodGroups'
import styles from 'components/FoodGroups/foodgroups.module.css'

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
        {/* Other stuff */}
      </div>
    </>
  )
}

export default FoodGroupsPage
