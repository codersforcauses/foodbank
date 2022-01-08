import React from 'react'
import Image from 'next/image'

interface Props {
  trophy1: StaticImageData | null
  trophy2: StaticImageData | null
  trophy3: StaticImageData | null
}

const TrophyGroup = ({ trophy1, trophy2, trophy3 }: Props) => {
  return (
    <div>
      {trophy1 && <Image src={trophy1} alt='Trophy' />}
      {trophy2 && <Image src={trophy2} alt='Trophy' />}
      {trophy3 && <Image src={trophy3} alt='Trophy' />}
    </div>
  )
}

export default TrophyGroup
