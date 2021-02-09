import React from 'react'

interface FoodCategoryProps {
  isLocked: boolean
  image: string
  className?: string
  alt?: string
}
const FoodCategory: React.FC<FoodCategoryProps> = props => {
  return (
    <div>
      <img
        className={props.className + (props.isLocked ? ' locked' : '')}
        src={props.image}
        alt={props.alt}
      />
    </div>
  )
}

export default FoodCategory
