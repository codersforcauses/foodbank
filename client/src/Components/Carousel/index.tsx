/* eslint-disable */
import React, { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'heroicons-react'
import './index.css'
type Image = {
  src: string
  alt: string
}

export interface CarouselProps {
  /**
   * Set of images with alt text to be rendered
   */
  images: Array<Image>
  /**
   * Width in pixels
   */
  width?: number
  /**
   * Height in pixels
   */
  height?: number
  /**
   * Height in pixels
   */
  transition: 'slide' | 'fade' | ''
  /**
   * Duration in ms
   */
  duration?: number
}

const Carousel: React.FC<CarouselProps> = ({
  images = [],
  width = 800,
  height = 600,
  transition = '',
  duration = 1000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imgsLen = images.length

  const nextImage = (): void => {
    setCurrentIndex((currentIndex + 1) % imgsLen)
  }

  const prevImage = (): void => {
    setCurrentIndex(currentIndex === 0 ? imgsLen - 1 : currentIndex - 1)
  }
  const getDefaultItemClasses = (itemIndex: Number): string => {
    const opacity = itemIndex === currentIndex ? 'opacity-100' : 'opacity-0'
    const position =
      itemIndex === currentIndex ? 'translate-x-0' : 'translate-x-full'
    switch (transition) {
      case 'fade': {
        return `transition-opacity ease-out duration-${duration} ${opacity}`
      }
      case 'slide': {
        return `transition-transform ease-out duration-${duration} transform  ${opacity} ${position}`
      }
      default: {
        return `${opacity}`
      }
    }
  }
  const imagesArr = images.map((image, i) => {
    return (
      <>
        <div
          className={`carousel-item ${getDefaultItemClasses(
            i
          )} bg-cover rounded-lg`}
          id={`images-${i}`}
          style={{
            backgroundImage: `url(${image.src})`
          }}
        ></div>
      </>
    )
  })
  return (
    <div
      className='relative shadow-lg rounded-lg'
      style={{ width: width, height: height }}
    >
      <div className='z-10 relative h-full'>
        <div className='flex items-center h-full justify-center justify-between'>
          <div className='icon flex items-center justify-center rounded-lg text-white m-2 w-12 h-12'>
            <ArrowLeft onClick={() => nextImage()} />
          </div>
          <div className='icon flex items-center justify-center rounded-lg text-white m-2 w-12 h-12'>
            <ArrowRight onClick={() => prevImage()} />
          </div>
        </div>
      </div>
      {imagesArr}
    </div>
  )
}

export default Carousel
