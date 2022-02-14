import React, { ReactNode, FC } from 'react'
import Image, { ImageLoader } from 'next/image'
import Button from 'components/Custom/Button/index'
import type { Character } from 'lib/types'
interface CarouselProps {
  children?: ReactNode
  chr?: Character[]
}
interface CarouselItemProps {
  chr: Character
}

/** The single-page view of character images and buttons which navigate to individual character pages. */
const CarouselDisplay: FC = (props: CarouselProps) => {
  return (
    <div id='caro' style={{ display: 'inline-block' }}>
      <div id='inner' style={{ display: 'flex' }}>
        {React.Children.map(props.children, child => {
          return (
            <div>
              {React.cloneElement(
                child as React.DetailedReactHTMLElement<any, HTMLElement>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/** A single character image and its button in the carousel. */
export const CarouselItem = ({ chr }: CarouselItemProps): JSX.Element => {
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

export default CarouselDisplay
