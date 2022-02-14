import React from 'react'
import CarouselDisplay from 'components/Character/CarouselDisplay'
import CarouselItem from 'components/Character/CarouselItem'
import Button from 'components/Custom/Button/index'
import type { Character } from 'lib/types'
interface Props {
  characters: Character[]
  location?: string
  hasNext?: boolean
  hasPrev?: boolean
  pageHandle: (direction: string) => void
}

/** The single-page view of the character carousel including character images, buttons to individual character pages and prev/next buttons.*/
const Carousel = ({ characters, location, ...props }: Props) => {
  return (
    <div className='flex items-center px-12'>
      {props.hasPrev ? (
        <Button
          color='primary'
          className='h-14'
          onClick={() => {
            props.pageHandle('left')
          }}
        >
          Prev
        </Button>
      ) : (
        <></>
      )}
      <CarouselDisplay>
        {characters.map(character => {
          return (
            <CarouselItem key={character.name} chr={character}></CarouselItem>
          )
        })}
      </CarouselDisplay>
      {props.hasNext ? (
        <Button
          color='primary'
          className='h-14'
          onClick={() => {
            props.pageHandle('right')
          }}
        >
          Next
        </Button>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Carousel
