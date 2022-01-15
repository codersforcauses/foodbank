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
        'flex items-center sm:h-11 md:h-12 lg:h-20 xl:h-24 ' +
        (side === 'left'
          ? 'sm:pl-9 md:pl-12 lg:pl-14'
          : 'sm:pr-9 md:pl-2 md:pr-10 lg:pl-2 lg:pr-12')
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
