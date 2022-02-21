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
    <Link href={`/profile/${chr.slug}`} passHref>
      <a className='flex flex-col items-center'>
        {chr.image && (
          <div className='relative w-72 h-72 scale-90 transition hover:scale-100'>
            <Image
              src={chr.image}
              layout='fill'
              objectFit='contain'
              alt='Picture of the author'
            ></Image>
          </div>
        )}
        <div className='my-12'>
          <Button>{chr.name}</Button>
        </div>
      </a>
    </Link>
  )
}

export default CarouselItem
