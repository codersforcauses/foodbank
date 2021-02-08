import React from 'react'

import '../index.css'
import vegetables from '../Images/vegetables.png'

interface VegetablesProps {
  isLocked: boolean
}

const Vegetables = (props: VegetablesProps) => {
  return (
    <div>
      <img
        className={'vegetables' + (props.isLocked ? ' locked' : '')}
        src={vegetables}
        alt='vegetables'
      />
    </div>
  )
}

export default Vegetables
