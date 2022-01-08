import React from 'react'
import Image from 'next/image'
import TrophyCabinet from 'public/images/trophy-cabinet.png'
import Melonator from 'public/images/watermelonflipped.webp'
import VitaminCLion from 'public/images/lion.webp'
import TrophyGroup from 'components/TrophyRoom/TrophyGroup'
import BrightYellowTrophy from 'public/images/trophies/brightyellow.webp'
import CupcakePurpleTrophy from 'public/images/trophies/cupcakepurple.webp'
import CyanBlueTrophy from 'public/images/trophies/cyanblue.webp'
import DiamondTrophy from 'public/images/trophies/diamond.webp'
import EmeraldGreenTrophy from 'public/images/trophies/emeraldgreen.webp'
import GreyAshTrophy from 'public/images/trophies/grey-ash.webp'
import IceTrophy from 'public/images/trophies/ice.webp'
import LapisLazuliTrophy from 'public/images/trophies/lapislazuli.webp'
import MagentaPurpleTrophy from 'public/images/trophies/magentapurple.webp'
import OceanBlueTrophy from 'public/images/trophies/oceanblue.webp'
import OrangeTrophy from 'public/images/trophies/orange.webp'
import PalePurpleTrophy from 'public/images/trophies/palepurple.webp'
import RoseQuartsTrophy from 'public/images/trophies/rosequarts.webp'
import RubyGemTrophy from 'public/images/trophies/rubygem.webp'
import SkyBlueTrophy from 'public/images/trophies/skyblue.webp'
import TealBlueTrophy from 'public/images/trophies/tealblue.webp'
import WhippedCreamTrophy from 'public/images/trophies/whippedcream.webp'

const TrophyRoom = () => {
  const numUnlocked = 13
  const numTrophyGroups = Math.ceil(numUnlocked / 3)
  const trophies = [
    BrightYellowTrophy,
    CupcakePurpleTrophy,
    CyanBlueTrophy,
    DiamondTrophy,
    EmeraldGreenTrophy,
    GreyAshTrophy,
    IceTrophy,
    LapisLazuliTrophy,
    MagentaPurpleTrophy,
    OceanBlueTrophy,
    OrangeTrophy,
    PalePurpleTrophy,
    RoseQuartsTrophy,
    RubyGemTrophy,
    SkyBlueTrophy,
    TealBlueTrophy,
    WhippedCreamTrophy
  ]
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
                trophy1={3 * i < numUnlocked ? trophies[3 * i] : null}
                trophy2={3 * i + 1 < numUnlocked ? trophies[3 * i + 1] : null}
                trophy3={3 * i + 2 < numUnlocked ? trophies[3 * i + 2] : null}
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
