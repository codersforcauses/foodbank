import React from 'react'
import Image from 'next/image'

interface Props {
  trophy1: StaticImageData | null
  trophy2: StaticImageData | null
  trophy3: StaticImageData | null
  side: string
}

const TrophyGroup = ({ trophy1, trophy2, trophy3, side }: Props) => {
  const numTrophies: number =
    trophy1 === null ? 0 : trophy2 === null ? 1 : trophy3 === null ? 2 : 3
  return (
    <div
      className={
        '' +
        (side === 'left'
          ? 'sm:pl-9 md:pl-12 lg:pl-14 xl:pl-16'
          : 'sm:pr-9 md:pl-2 md:pr-10 lg:pl-2 lg:pr-12 xl:pl-2 xl:pr-14')
      }
    >
      <div className='flex items-center sm:h-11 md:h-12 lg:h-20 xl:h-24'>
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
      <div className='relative w-full bg-white h-5'>
        <div className='absolute w-full text-center'>{numTrophies} / 3</div>
        <div
          className='bg-green h-5'
          style={{ width: (numTrophies * 100) / 3 + '%' }}
        ></div>
      </div>
    </div>
  )
}

export default TrophyGroup
