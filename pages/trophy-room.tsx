import React from 'react'
import Image from 'next/image'

import TrophyCabinet from 'components/TrophyRoom/TrophyCabinet'

import Melonator from 'public/images/watermelonflipped.webp'
import VitaminCLion from 'public/images/lion.webp'
import { ACHIEVEMENT, useFirebase } from '@components/FirebaseContext'

const TrophyRoom = () => {
  const { achievements } = useFirebase()

  return (
    <div className='bg-primary min-h-screen lg:main overflow-y-hidden'>
      <h1 className='text-white font-bold text-6xl text-center pt-10'>
        Trophy Room
      </h1>
      <div className='flex items-end justify-center'>
        <div className='max-w-sm hidden sm:block'>
          <Image src={Melonator} alt='Melonator' />
        </div>
        <TrophyCabinet
          numUnlocked={achievements[ACHIEVEMENT.ACHIEVEMENT_COUNT]}
        />
        <div className='max-w-sm hidden sm:block'>
          <Image src={VitaminCLion} alt='Vitamin C Lion' />
        </div>
      </div>
    </div>
  )
}

export default TrophyRoom
