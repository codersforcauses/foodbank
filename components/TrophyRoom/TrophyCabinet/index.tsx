import Image from 'next/image'

import { useFirebase } from '@components/FirebaseContext/context'
import TrophyGroup from '@components/TrophyRoom/TrophyGroup'

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
import TrophyCabinetImage from 'public/images/trophy-cabinet.webp'

const TrophyCabinet = () => {
  const { achievementsCount } = useFirebase()
  const numUnlocked = achievementsCount.count
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
    WhippedCreamTrophy,
    BrightYellowTrophy
  ]
  return (
    <div className='relative max-w-xl flex justify-center'>
      <div className='absolute z-10 flex flex-wrap content-start gap-6 sm:gap-3 md:gap-6 justify-between w-[75%] sm:w-full mt-24 sm:mt-16 md:mt-20 xl:mt-36 2xl:mt-40'>
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
