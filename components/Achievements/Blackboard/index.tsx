import React from 'react'
import Image from 'next/image'
import blackboard from 'public/images/blackboard.png'

/**
 * Renders a Blackboard for achievements to be shown on.
 */
const Blackboard: React.FC = () => {
  return (
    <div className='absolute'>
      <Image src={blackboard} alt='Blackboard' />
    </div>
  )
}

export default Blackboard
