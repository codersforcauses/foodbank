import React from 'react'
import Image from 'next/image'
import TrophyCabinet from 'components/TrophyRoom/TrophyCabinet'

import VitaminCLion from 'public/images/lion.webp'
import Melonator from 'public/images/watermelonflipped.webp'

const TrophyRoom = () => {
  return (
    <div className='bg-primary h-screen overflow-y-hidden md:pt-14'>
      <h1 className='text-white font-bold text-6xl text-center pt-10'>
        Trophy Room
      </h1>
      <div className='flex items-end justify-center'>
        <div className='max-w-sm hidden sm:block'>
          <Image src={Melonator} alt='Melonator' />
        </div>
        <TrophyCabinet numUnlocked={13} />
        <div className='max-w-sm hidden sm:block'>
          <Image src={VitaminCLion} alt='Vitamin C Lion' />
        </div>
      </div>
    </div>
  )
}

export default TrophyRoom
