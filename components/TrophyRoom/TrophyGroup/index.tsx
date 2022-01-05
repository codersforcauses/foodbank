import React from 'react'
import Image from 'next/image'
import BrightYellowTrophy from 'public/images/trophies/brightyellow.webp'
import CyanBlueTrophy from 'public/images/trophies/cyanblue.webp'
import MagentaPurpleTrophy from 'public/images/trophies/magentapurple.webp'

const TrophyGroup = () => {
  return (
    <div>
      <Image src={BrightYellowTrophy} alt='Trophy' />
      <Image src={CyanBlueTrophy} alt='Trophy' />
      <Image src={MagentaPurpleTrophy} alt='Trophy' />
    </div>
  )
}

export default TrophyGroup
