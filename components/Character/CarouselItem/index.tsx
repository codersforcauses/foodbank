import Image from 'next/image'
import Link from 'next/link'

import type { Character } from '@lib/types'

import Button from '@components/Custom/Button/index'

interface CarouselItemProps {
  /** Object with info about the character to be display. */
  chr: Character
}

/** A single character image and its button in the carousel. */
const CarouselItem = ({ chr }: CarouselItemProps): JSX.Element => {
  return (
    <div className='flex flex-col items-center'>
      {chr.image && (
        <div className='relative w-72 h-72'>
          <Image
            src={chr.image}
            layout='fill'
            objectFit='contain'
            alt='Picture of the author'
          ></Image>
        </div>
      )}
      <div className='my-12'>
        <Link href={`/profile/${chr.slug}`}>
          <Button>{chr.name}</Button>
        </Link>
      </div>
    </div>
  )
}

export default CarouselItem
