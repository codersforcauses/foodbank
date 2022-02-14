import React from 'react'
import Image from 'next/image'

import TestData from '@components/TestData'
import TrophyCabinet from '@components/TrophyRoom/TrophyCabinet'

import VitaminCLion from 'public/images/lion.webp'
import Melonator from 'public/images/watermelonflipped.webp'

const TrophyRoom = () => {
  return (
    <div className='h-screen overflow-y-hidden bg-primary md:pt-14'>
      <h1 className='pt-10 text-6xl font-bold text-center text-white'>
        Trophy Room
      </h1>
      <div className='flex items-end justify-center'>
        <div className='hidden max-w-sm sm:block'>
          <Image src={Melonator} alt='Melonator' />
        </div>
        <TrophyCabinet />
        <div className='hidden max-w-sm sm:block'>
          <Image src={VitaminCLion} alt='Vitamin C Lion' />
        </div>
      </div>
      <TestData />
    </div>
  )
}

export default TrophyRoom
