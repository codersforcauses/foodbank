import React from 'react'
import Image from 'next/image'
import TrophyCabinet from 'public/images/trophy-cabinet.png'

const TrophyRoom = () => {
  return (
    <div className='bg-primary'>
      <h1 className='text-white font-bold text-6xl text-center'>Trophy Room</h1>
      <div className='flex items-end'>
        <div className='melon'>
          <img src='./images/watermelon.webp' alt='' />
        </div>
        <div>
          <Image src={TrophyCabinet} alt='Cabinet' />
        </div>
        <div className='lion'>
          <img src='./images/lion.webp' alt='' />
        </div>
      </div>
    </div>
  )
}

export default TrophyRoom
