import React, { useState } from 'react'
import Image from 'next/image'

import TestData from '@components/TestData'
import TrophyCabinet from '@components/TrophyRoom/TrophyCabinet'

import VitaminCLion from 'public/images/lion.webp'
import Melonator from 'public/images/watermelonflipped.webp'

const TrophyRoom = () => {
  const [numUnlocked, setNumUnlocked] = useState(12)
  return (
    <div className='bg-primary min-h-screen md:pt-14'>
      <h1 className='text-white font-bold text-6xl text-center pt-10'>
        Trophy Room
      </h1>
      <div className='flex items-end justify-center'>
        <div className='hidden max-w-sm sm:block'>
          <Image src={Melonator} alt='Melonator' />
        </div>
        <TrophyCabinet numUnlocked={numUnlocked} />
        <div className='max-w-sm hidden sm:block'>
          <Image src={VitaminCLion} alt='Vitamin C Lion' />
        </div>
      </div>

      {/* TEMPORARY CONTAINER - FOR TESTING PURPOSES, TO INCREASE AND DECREASE TROPHIES IN CABINET. Remove once firestore is integrated */}
      <div className='flex justify-center'>
        <button
          onClick={() => {
            if (numUnlocked == 18) return
            setNumUnlocked(prev => prev + 1)
          }}
          className='bg-green rounded-lg text-4xl w-10 m-2'
        >
          +
        </button>
        <button
          onClick={() => {
            if (numUnlocked == 0) return
            setNumUnlocked(prev => prev - 1)
          }}
          className='bg-red rounded-lg text-4xl w-10 m-2'
        >
          -
        </button>
      </div>
    </div>
  )
}

export default TrophyRoom
