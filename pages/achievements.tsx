import React from 'react'
import Image from 'next/image'
import blackboard from 'public/images/blackboard.jpg'

const Achievements: React.FC = () => {
  return (
    <div>
      <Image src={blackboard} alt='Blackboard' />
    </div>
  )
}

export default Achievements
