import React from 'react'
import Image from 'next/image'
import TrophyCabinet from 'public/images/trophy-cabinet.png'
import Melonator from 'public/images/watermelonflipped.webp'
import VitaminCLion from 'public/images/lion.webp'
import TrophyGroup from 'components/TrophyRoom/TrophyGroup'
import { trophies } from 'lib/trophies'

const TrophyRoom = () => {
  const numUnlocked = 13
  const numTrophyGroups = Math.ceil(numUnlocked / 3)
  console.log(Array(numTrophyGroups))
  return (
    <div className='bg-primary'>
      <h1 className='text-white font-bold text-6xl text-center'>Trophy Room</h1>
      <div className='flex items-end'>
        <div className='melon'>
          <Image src={Melonator} alt='Melonator' />
        </div>
        <div>
          <div className='absolute mx-14 my-32 z-10 grid grid-cols-2 gap-y-10 gap-x-10'>
            {[...Array(numTrophyGroups)].map((e, i) => (
              <TrophyGroup key={i} />
            ))}
          </div>
          <div className='z-0'>
            <Image src={TrophyCabinet} alt='Cabinet' />
          </div>
        </div>
        <div className='lion'>
          <Image src={VitaminCLion} alt='Vitamin C Lion' />
        </div>
      </div>
    </div>
  )
}

export default TrophyRoom
