import React from 'react'
import Image from 'next/image'

interface Props {
  trophy1: StaticImageData
  trophy2: StaticImageData
  trophy3: StaticImageData
}

const TrophyGroup = ({ trophy1, trophy2, trophy3 }: Props) => {
  return (
    <div>
      <Image src={trophy1} alt='Trophy' />
      <Image src={trophy2} alt='Trophy' />
      <Image src={trophy3} alt='Trophy' />
    </div>
  )
}

export default TrophyGroup
