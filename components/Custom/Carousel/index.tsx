import { PropsWithChildren, useState, useEffect, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { KeenSliderOptions } from 'keen-slider'
import Dots from './Dots'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

export interface CarouselProps extends KeenSliderOptions {
  autoplay?: boolean
  autoplayDuration?: number
  controls?: boolean
  indicators?: boolean
  length: number
  className?: string
}

const Carousel = ({
  autoplay,
  controls,
  children,
  className,
  indicators,
  length,
  autoplayDuration = 2000,
  ...props
}: PropsWithChildren<CarouselProps>) => {
  const timer = useRef<NodeJS.Timer | undefined>(undefined)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [pause, setPause] = useState(false)
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    ...props,
    created(s) {
      s.container.addEventListener('mouseover', () => {
        setPause(true)
      })
      s.container.addEventListener('mouseout', () => {
        setPause(false)
      })
    },
    slideChanged(slide) {
      setCurrentSlide(slide.track.details.rel)
    }
  })

  const moveToSlide = (idx: number) => {
    slider.current?.moveToIdx(idx)
    setCurrentSlide(idx)
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider && autoplay) {
        slider.current?.next()
      }
    }, autoplayDuration)
    return () => {
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [slider, pause, autoplayDuration, autoplay])

  return (
    <div ref={ref} className={['keen-slider', className].join(' ').trim()}>
      {children}

      {/* styles for arrow and dots subject to changes later */}
      {controls && (
        <>
          <button
            onClick={() => slider.prev()}
            className='w-32 h-32 absolute p-1.5 m-1 bottom-0 left-0'
          >
            <Image
              src='/images/Extra/Left-arrow.png'
              alt='Left arrow'
              layout='fill'
            />
          </button>
          <button
            onClick={() => slider.next()}
            className='w-32 h-32 absolute p-1.5 m-1 transform bottom-0 right-0'
          >
            <Image
              src='/images/Extra/Right-arrow.png'
              alt='Right arrow'
              layout='fill'
            />
          </button>
        </>
      )}
      {indicators && slider.current && (
        <Dots
          className='absolute bottom-0 left-0 right-0 z-10 flex justify-center'
          nImages={length}
          onClick={moveToSlide}
          currentSlide={currentSlide}
        />
      )}
    </div>
  )
}

export default Carousel
