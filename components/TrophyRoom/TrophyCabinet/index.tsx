import React from 'react'
import Image from 'next/image'

import TrophyGroup from 'components/TrophyRoom/TrophyGroup'

import TrophyCabinetImage from 'public/images/trophy-cabinet.webp'
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

type Props = {
  numUnlocked: number
}

const TrophyCabinet = ({ numUnlocked }: Props) => {
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
    <div className='relative max-w-xl flex justify-center items-center sm:items-start'>
      <div className='absolute z-10 flex flex-wrap justify-between w-[75%] md:w-full  h-[63%] sm:h-5/6 mt-14 sm:mt-20 md:mt-4 lg:mt-9 xl:mt-2 sm:pt-16 md:pt-24 lg:pt-24 xl:pt-32'>
        {/* grid grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 lg:gap-y-2 xl:gap-y-6 */}
        {[...Array(numTrophyGroups)].map((e, i) => (
          <TrophyGroup
            trophy1={3 * i < numUnlocked ? trophies[3 * i] : null}
            trophy2={3 * i + 1 < numUnlocked ? trophies[3 * i + 1] : null}
            trophy3={3 * i + 2 < numUnlocked ? trophies[3 * i + 2] : null}
            side={i % 2 == 0 ? 'left' : 'right'}
            key={i}
          />
        ))}
      </div>
      <div className='z-0'>
        <Image src={TrophyCabinetImage} alt='Cabinet' />
      </div>
    </div>
  )
}

export default TrophyCabinet
