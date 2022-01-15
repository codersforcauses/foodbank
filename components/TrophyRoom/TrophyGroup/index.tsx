import React from 'react'
import Image from 'next/image'

interface Props {
  trophy1: StaticImageData | null
  trophy2: StaticImageData | null
  trophy3: StaticImageData | null
  side: string
}

const TrophyGroup = ({ trophy1, trophy2, trophy3, side }: Props) => {
  return (
    <div className={'h-24 ' + (side === 'left' ? 'pl-16' : 'pl-4')}>
      {trophy1 && <Image src={trophy1} alt='Trophy' />}
      {trophy2 && <Image src={trophy2} alt='Trophy' />}
      {trophy3 && <Image src={trophy3} alt='Trophy' />}
    </div>
  )
}

export default TrophyGroup
