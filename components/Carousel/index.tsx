import React, { PropsWithChildren, useState, useEffect, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { ImageLoader } from 'next/image'
import 'keen-slider/keen-slider.min.css'
import { TOptionsEvents } from 'keen-slider'
import Arrow from './Arrow'
import Dots from './Dots'
import LoadingSpinner from './LoadingSpinner'
import Image from 'next/image'

export interface FoodImage {
  src: string
  alt: string
}
export interface CarouselProps extends TOptionsEvents {
  className?: string
  images: FoodImage[]
  loader?: ImageLoader
  arrows?: boolean
  dots?: boolean
  autoplay?: boolean
  autoplayDuration?: number
}

const imageLoader = ({ src }: { src: string }) => src

const Carousel = ({
  children,
  className,
  images,
  arrows = true,
  dots = true,
  autoplay = true,
  autoplayDuration = 2000,
  loader = imageLoader,
  ...rest
}: PropsWithChildren<CarouselProps>) => {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    ...rest,
    slideChanged(slide) {
      setCurrentSlide(slide.details().relativeSlide)
    }
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const timer = useRef<NodeJS.Timer | undefined>(undefined)
  const [pause, setPause] = useState(false)
  const [loaded, setLoaded] = useState<boolean[]>([])

  const moveToSlide = (idx: number) => {
    slider.moveToSlide(idx)
    setCurrentSlide(idx)
  }
  const handleLoaded = (idx: number) => {
    const newLoaded = loaded
    newLoaded[idx] = true
    setLoaded(newLoaded)
  }
  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider && autoplay) {
        slider.next()
      }
    }, autoplayDuration)
    return () => {
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [slider, pause, autoplayDuration, autoplay])

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseover', () => {
        setPause(true)
      })
      ref.current.addEventListener('mouseout', () => {
        setPause(false)
      })
    }
  }, [ref])

  return (
    <>
      <div className={className}>
        <div ref={ref} className='keen-slider'>
          {images.map(({ src, alt }, idx) => {
            const hasLoaded = loaded[idx]
            return (
              <div
                key={src}
                className={`${className} ${hasLoaded ? '' : 'bg-grey bg-opacity-25'} flex justify-center items-center  keen-slider__slide`}
              >
                {!hasLoaded && <LoadingSpinner />}

                <Image
                  src={src}
                  loader={loader}
                  alt={alt}
                  layout='fill'
                  onLoad={() => handleLoaded(idx)}
                />
              </div>
            )
          })}

          {arrows && (
            <>
              <Arrow
                direction='left'
                className='w-12 h-12 absolute bg-opacity-50 p-1.5 rounded m-1 bg-grey cursor-pointer top-1/2 translate-y-1/2 left-0'
                onClick={() => slider.prev()}
                disabled={false}
              />
              <Arrow
                direction='right'
                className='w-12 h-12 absolute bg-opacity-50 p-1.5 rounded m-1 bg-grey cursor-pointer top-1/2 translate-y-1/2 absolute right-px'
                onClick={() => slider.next()}
                disabled={false}
              />
            </>
          )}
        </div>
        {dots && (
          <Dots
            className='flex justify-center cursor-pointer'
            nImages={images.length}
            onClick={moveToSlide}
            currentSlide={currentSlide}
          />
        )}
      </div>
    </>
  )
}

export default Carousel
