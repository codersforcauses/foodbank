import React from 'react'
import Image from 'next/image'
import blackboard from 'public/images/blackboard.jpg'

const Blackboard: React.FC = () => {
  return (
    <div className='absolute'>
      <Image src={blackboard} alt='Blackboard' />
    </div>
  )
}

export default Blackboard
