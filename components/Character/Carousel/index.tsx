import React from 'react'
import CarouselDisplay from 'components/Character/CarouselDisplay'
import CarouselItem from 'components/Character/CarouselItem'
import Button from 'components/Custom/Button/index'
import type { Character } from 'lib/types'
interface Props {
  /** All characters part of the carousel. */
  characters: Character[]
  /** Which direction the carousel display. */
  direction: 'horizontal' | 'vertical'
  /** Max number of characters to display on a single page. */
  maxPerPage: number
  /** There is a next page with more characters. */
  hasNextPage: boolean
  /** There is a previous page with characters we have already seen.  */
  hasPrevPage: boolean
  /** Controls moving between pages. */
  pageHandle: (direction: string) => void
}

/** The single-page view of the character carousel including character images, buttons to individual character pages and prev/next buttons.*/
const Carousel = ({
  characters,
  direction,
  maxPerPage,
  hasNextPage,
  hasPrevPage,
  pageHandle
}: Props) => {
  if (direction === 'horizontal') {
    return (
      <div className='flex-1 flex items-center px-12 gap-x-12'>
        {hasPrevPage ? (
          <Button
            color='primary'
            className='h-14'
            onClick={() => {
              pageHandle('left')
            }}
          >
            &lt;
          </Button>
        ) : (
          <Button
            color='primary'
            className='h-14 grayscale opacity-20 cursor-default hover:scale-100'
            onClick={() => {}}
          >
            &lt;
          </Button>
        )}
        <CarouselDisplay maxPerPage={maxPerPage}>
          {characters.map(character => (
            <CarouselItem key={character.name} chr={character}></CarouselItem>
          ))}
        </CarouselDisplay>
        {hasNextPage ? (
          <Button
            color='primary'
            className='h-14'
            onClick={() => {
              pageHandle('right')
            }}
          >
            &gt;
          </Button>
        ) : (
          <Button
            color='primary'
            className='h-14 grayscale opacity-20 cursor-default hover:scale-100'
            onClick={() => {}}
          >
            &gt;
          </Button>
        )}
      </div>
    )
  } else {
    // Vertical screen display.
    return (
      <div className='flex-1 flex flex-col items-center px-12 gap-x-12'>
        <CarouselDisplay maxPerPage={maxPerPage}>
          {characters.map(character => (
            <CarouselItem key={character.name} chr={character}></CarouselItem>
          ))}
        </CarouselDisplay>
        <div className='flex gap-x-4'>
          {hasPrevPage ? (
            <Button
              color='primary'
              className='h-14'
              onClick={() => {
                pageHandle('left')
              }}
            >
              &lt;
            </Button>
          ) : (
            <Button
              color='primary'
              className='h-14 grayscale opacity-20 cursor-default hover:scale-100'
              onClick={() => {}}
            >
              &lt;
            </Button>
          )}
          {hasNextPage ? (
            <Button
              color='primary'
              className='h-14'
              onClick={() => {
                pageHandle('right')
              }}
            >
              &gt;
            </Button>
          ) : (
            <Button
              color='primary'
              className='h-14 grayscale opacity-20 cursor-default hover:scale-100'
              onClick={() => {}}
            >
              &gt;
            </Button>
          )}
        </div>
      </div>
    )
  }
}

export default Carousel
