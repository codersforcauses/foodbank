import React from 'react'
import FoodGroups from 'components/FoodGroups'

/**
 */
const FoodGroupsPage: React.FC = () => {
  return (
    <>
      <div
        className='relative items-center'
        style={{ maxWidth: '95vh', margin: '5%' }} //TODO: Style
      >
        {' '}
        {/* RESIZE WHEEL TO ALWAYS BE WITHIN THE SCREEN W/O SCROLLING */}
        <FoodGroups />
      </div>
    </>
  )
}

export default FoodGroupsPage
