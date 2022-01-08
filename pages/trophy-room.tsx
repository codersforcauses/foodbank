import React from 'react'
import Image from 'next/image'
import TrophyCabinet from 'public/images/trophy-cabinet.png'
import Melonator from 'public/images/watermelonflipped.webp'
import VitaminCLion from 'public/images/lion.webp'
import TrophyGroup from 'components/TrophyRoom/TrophyGroup'
import BrightYellowTrophy from 'public/images/trophies/brightyellow.webp'
import CyanBlueTrophy from 'public/images/trophies/cyanblue.webp'
import MagentaPurpleTrophy from 'public/images/trophies/magentapurple.webp'

const TrophyRoom = () => {
  const numUnlocked = 13
  const numTrophyGroups = Math.ceil(numUnlocked / 3)
  return (
    <div className='bg-primary'>
      <h1 className='text-white font-bold text-6xl text-center'>Trophy Room</h1>
      <div className='flex items-end'>
        <div className='melon'>
          <Image src={Melonator} alt='Melonator' />
        </div>
        <div>
          <div
            className='absolute mx-14 my-32 z-10 grid grid-cols-2 gap-y-10 gap-x-10'
            style={{ height: '10vw' }}
          >
            {[...Array(numTrophyGroups)].map((e, i) => (
              <TrophyGroup
                trophy1={BrightYellowTrophy}
                trophy2={CyanBlueTrophy}
                trophy3={MagentaPurpleTrophy}
                key={i}
              />
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
