import React from 'react'
import Image from 'next/image'
import BrightYellowTrophy from 'public/images/trophies/brightyellow.webp'
import CyanBlueTrophy from 'public/images/trophies/cyanblue.webp'
import MagentaPurpleTrophy from 'public/images/trophies/magentapurple.webp'

interface Props {
  numDisplayed: number
}

const TrophyGroup = ({ numDisplayed }: Props) => {
  return (
    <div>
      <Image src={BrightYellowTrophy} alt='Trophy' />
      {numDisplayed > 1 && <Image src={CyanBlueTrophy} alt='Trophy' />}
      {numDisplayed > 2 && <Image src={MagentaPurpleTrophy} alt='Trophy' />}
    </div>
  )
}

export default TrophyGroup
