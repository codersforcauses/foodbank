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
        'w-[45%] sm:pt-2 md:mb-10 lg:mb-0 xl:mb-0 sm:-mt-20 md:-mt-6 lg:-mt-6 xl:mt-4 sm:h-11 md:h-12 lg:h-24 xl:h-28' +
        (side === 'left'
          ? 'sm:pl-9 md:pl-12 lg:pl-14 xl:pl-16'
          : 'sm:pr-9 md:pl-2 md:pr-10 lg:pl-2 lg:pr-12 xl:pl-2 xl:pr-14')
      }
    >
      <div className='flex items-center'>
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
      <div className='relative w-full bg-white h-3 md:h-4 lg:h-5 bottom-0 lg:mt-1'>
        <div className='absolute w-full font-serif text-center text-[70%] md:text-sm  -top-0.5 lg:top-0'>
          {numTrophies} / 3
        </div>
        <div className='mx-2 py-0.5'>
          <div
            className='bg-green h-2 md:h-3 lg:h-4'
            style={{ width: (numTrophies * 100) / 3 + '%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default TrophyGroup