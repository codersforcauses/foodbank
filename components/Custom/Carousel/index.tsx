import { PropsWithChildren, useState, useEffect, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { TOptionsEvents } from 'keen-slider'
import Arrow from './Arrow'
import Dots from './Dots'
import 'keen-slider/keen-slider.min.css'

export interface CarouselProps extends TOptionsEvents {
  arrows?: boolean
  autoplay?: boolean
  autoplayDuration?: number
  dots?: boolean
  length: number
  className?: string
}

const Carousel = ({
  autoplay,
  children,
  className,
  dots,
  length,
  arrows = true,
  autoplayDuration = 2000,
  ...props
}: PropsWithChildren<CarouselProps>) => {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    ...props,
    slideChanged(slide) {
      setCurrentSlide(slide.details().relativeSlide)
    }
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [pause, setPause] = useState(false)
  const timer = useRef<NodeJS.Timer | undefined>(undefined)

  const moveToSlide = (idx: number) => {
    slider.moveToSlide(idx)
    setCurrentSlide(idx)
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
    const listener = ref.current
    const pause = () => { setPause(true) }
    const unpause = () => { setPause(false) }

    ref?.current?.addEventListener('mouseover', pause)
    ref?.current?.addEventListener('mouseout', unpause)

    return () => {
      listener?.removeEventListener('mouseover', pause)
      listener?.removeEventListener('mouseout', unpause)
    }
  }, [ref])

  return (
    <div ref={ref} className={['keen-slider', className].join(' ').trim()}>
      {children}

      {/* styles for arrow and dots subject to changes later */}
      {arrows && (
        <>
          <Arrow
            direction='left'
            className='w-12 h-12 absolute bg-opacity-50 p-1.5 top-1/2 rounded m-1 bg-grey transform -translate-y-1/2 left-0'
            onClick={() => slider.prev()}
          />
          <Arrow
            direction='right'
            className='w-12 h-12 absolute bg-opacity-50 top-1/2 p-1.5 rounded m-1 bg-grey transform -translate-y-1/2 right-0'
            onClick={() => slider.next()}
          />
        </>
      )}
      {dots && (
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
