import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'

import Arrow from './Arrow'
import Dots from './Dots'

import 'keen-slider/keen-slider.min.css'

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

  useEffect(() => {
    slider.current?.update()
  }, [slider])

  return (
    <div ref={ref} className={['keen-slider', className].join(' ').trim()}>
      {children}

      {/* styles for arrow and dots subject to changes later */}
      {controls && (
        <>
          <Arrow
            direction='left'
            className='w-12 h-12 absolute bg-opacity-50 p-1.5 top-1/2 rounded m-1 bg-grey transform -translate-y-1/2 left-0'
            onClick={() => slider.current?.prev()}
          />
          <Arrow
            direction='right'
            className='w-12 h-12 absolute bg-opacity-50 top-1/2 p-1.5 rounded m-1 bg-grey transform -translate-y-1/2 right-0'
            onClick={() => slider.current?.next()}
          />
        </>
      )}
      {indicators && (
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

// keen-slider@5.5.1
// import { PropsWithChildren, useState, useEffect, useRef } from 'react'
// import { useKeenSlider } from 'keen-slider/react'
// import { TOptionsEvents } from 'keen-slider'
// import Arrow from './Arrow'
// import Dots from './Dots'
// import 'keen-slider/keen-slider.min.css'

// export interface CarouselProps extends TOptionsEvents {
//   autoplay?: boolean
//   autoplayDuration?: number
//   controls?: boolean
//   indicators?: boolean
//   length: number
//   className?: string
// }

// const Carousel = ({
//   autoplay,
//   controls,
//   children,
//   className,
//   indicators,
//   length,
//   autoplayDuration = 2000,
//   ...props
// }: PropsWithChildren<CarouselProps>) => {
//   const [ref, slider] = useKeenSlider<HTMLDivElement>({
//     ...props,
//     slideChanged(slide) {
//       setCurrentSlide(slide.details().relativeSlide)
//     }
//   })
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [pause, setPause] = useState(false)
//   const timer = useRef<NodeJS.Timer | undefined>(undefined)

//   const moveToSlide = (idx: number) => {
//     slider.moveToSlide(idx)
//     setCurrentSlide(idx)
//   }

//   useEffect(() => {
//     timer.current = setInterval(() => {
//       if (!pause && slider && autoplay) {
//         slider.next()
//       }
//     }, autoplayDuration)
//     return () => {
//       if (timer.current) {
//         clearInterval(timer.current)
//       }
//     }
//   }, [slider, pause, autoplayDuration, autoplay])

//   useEffect(() => {
//     const listener = ref.current
//     const pause = () => {
//       setPause(true)
//     }
//     const unpause = () => {
//       setPause(false)
//     }

//     ref?.current?.addEventListener('mouseover', pause)
//     ref?.current?.addEventListener('mouseout', unpause)

//     return () => {
//       listener?.removeEventListener('mouseover', pause)
//       listener?.removeEventListener('mouseout', unpause)
//     }
//   }, [ref])

//   return (
//     <div ref={ref} className={['keen-slider', className].join(' ').trim()}>
//       {children}

//       {/* styles for arrow and dots subject to changes later */}
//       {controls && (
//         <>
//           <Arrow
//             direction='left'
//             className='w-12 h-12 absolute p-1.5 top-1/2 rounded m-1 transform -translate-y-1/2 left-0'
//             onClick={() => slider.prev()}
//           />
//           <Arrow
//             direction='right'
//             className='w-12 h-12 absolute top-1/2 p-1.5 rounded m-1 transform -translate-y-1/2 right-0'
//             onClick={() => slider.next()}
//           />
//         </>
//       )}
//       {indicators && (
//         <Dots
//           className='absolute bottom-0 left-0 right-0 z-10 flex justify-center'
//           nImages={length}
//           onClick={moveToSlide}
//           currentSlide={currentSlide}
//         />
//       )}
//     </div>
//   )
// }

// export default Carousel
