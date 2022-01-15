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
    <div
      className={
        'flex items-center h-16 lg:h-24 ' +
        (side === 'left' ? 'pl-16' : 'pl-4 pr-12')
      }
    >
      {trophy1 && (
        <div className='w-1/3'>
          <Image src={trophy1} alt='Trophy' />
        </div>
      )}
      {trophy2 && (
        <div className='w-1/3'>
          <Image src={trophy2} alt='Trophy' />
        </div>
      )}
      {trophy3 && (
        <div className='w-1/3'>
          <Image src={trophy3} alt='Trophy' />
        </div>
      )}
    </div>
  )
}

export default TrophyGroup
