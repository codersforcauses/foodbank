import React from 'react'
import Image from 'next/image'
import Button from 'components/Custom/Button/index'
import type { Character } from 'lib/types'

interface CarouselItemProps {
  chr: Character
}

/** A single character image and its button in the carousel. */
const CarouselItem = ({ chr }: CarouselItemProps): JSX.Element => {
  return (
    <div className='flex flex-col items-center'>
      {chr.image && (
        <div>
          <Image
            src={chr.image}
            width={400}
            height={300}
            alt='Picture of the author'
          ></Image>
        </div>
      )}
      <div className='my-12'>
        <Button>{chr.name}</Button>
      </div>
    </div>
  )
}

export default CarouselItem
