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

/*
    //for notion api
    const myLoader:ImageLoader = ({ src, width, quality }) => {
        return `https://picsum.photos/${src}?w=${width}&q=${quality || 75}`
    }
                 {characters.map((item)=>{
                const route = `/images/chara/${item}`
                return (
                    <div>
                    <Image src={route}  width={400} height={300}  alt="Picture of the author"></Image>
                    <button>{item}</button>
                    </div>
                )
            })}
            <button>NEXT</button>
    */
// loader={myLoader}
