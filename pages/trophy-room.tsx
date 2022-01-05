import React from 'react'
import Image from 'next/image'
import TrophyCabinet from 'public/images/trophy-cabinet.png'
import Melonator from 'public/images/watermelonflipped.webp'
import VitaminCLion from 'public/images/lion.webp'
import TrophyGroup from 'components/TrophyRoom/TrophyGroup'
import { trophies } from 'lib/trophies'

const TrophyRoom = () => {
  const n = 6
  console.log(Array(n))
  return (
    <div className='bg-primary'>
      <h1 className='text-white font-bold text-6xl text-center'>Trophy Room</h1>
      <div className='flex items-end'>
        <div className='melon'>
          <Image src={Melonator} alt='Melonator' />
        </div>
        <div>
          <div className='absolute mx-28 my-40 z-10 grid grid-cols-2 gap-y-20 gap-x-36'>
            {[...Array(n)].map((e, i) => (
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
