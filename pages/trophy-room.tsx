import React from 'react'
import Image from 'next/image'
import TrophyCabinet from 'public/images/trophy-cabinet.png'
import { trophies } from 'lib/trophies'

const TrophyRoom = () => {
  return (
    <div className='bg-primary'>
      <h1 className='text-white font-bold text-6xl text-center'>Trophy Room</h1>
      <div className='flex items-end'>
        <div className='melon'>
          <img src='./images/watermelonflipped.webp' alt='' />
        </div>
        <div>
          <Image src={TrophyCabinet} alt='Cabinet' />
        </div>
        <div className='lion'>
          <img src='./images/lion.webp' alt='' />
        </div>
        {trophies.map(trophy => trophy.name)}
      </div>
    </div>
  )
}

export default TrophyRoom
