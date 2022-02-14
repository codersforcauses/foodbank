import React, { ReactNode, FC } from 'react'
import type { Character } from 'lib/types'
interface CarouselProps {
  children?: ReactNode
  chr?: Character[]
}

/** The single-page view of character images and buttons which navigate to individual character pages. */
const CarouselDisplay: FC = (props: CarouselProps) => {
  return (
    <div className='inline-block'>
      <div className='flex'>
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

export default CarouselDisplay
