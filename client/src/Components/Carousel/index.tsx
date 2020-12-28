import React, { useEffect } from 'react'
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
  transition: 'slide' | 'fade'
  /**
   * Duration in ms, follows tailwind css defaults which can be found here:
   * https://v1.tailwindcss.com/docs/transition-duration
   */
  duration?: '75' | '100' | '150' | '200' | '300' | '500' | '700' | '1000'
  /**
   * automatically shift between different images
   */
  autoplay?: boolean
  /**
   * Duration in ms of autoplay
   */
  autoplayDuration?: number
}

const Carousel: React.FC<CarouselProps> = ({
  images = [],
  width = 800,
  height = 600,
  transition = '',
  duration = '1000',
  autoplay = true,
  autoplayDuration = 2000
}) => {
  let currentIndex = 0
  let lastImgMovedForward: HTMLElement | null = null
  let lastImgMovedBackward: HTMLElement | null = null
  const imgsLen = images.length
  const swapOpacities = (
    firstElement: HTMLElement | null,
    secondElement: HTMLElement | null
  ): void => {
    firstElement?.classList.remove('opacity-100')
    firstElement?.classList.add('opacity-0')
    secondElement?.classList.remove('opacity-0')
    secondElement?.classList.add('opacity-100')
  }
  const fadeNextImage = (currentImgIndex: number, nextImgIndex: number) => {
    const currentImage: HTMLElement | null = document.getElementById(
      `images-${currentImgIndex}`
    )
    const nextImage: HTMLElement | null = document.getElementById(
      `images-${nextImgIndex}`
    )
    swapOpacities(currentImage, nextImage)
  }
  const moveImageToRight = (element: HTMLElement | null, invisible = true) => {
    if (invisible) {
      element?.classList.add('invisible')
    } else {
      element?.classList.remove('invisible')
    }
    element?.classList.remove('-translate-x-full')
    element?.classList.remove('translate-x-0')
    element?.classList.add('translate-x-full')
  }
  const moveImageToLeft = (element: HTMLElement | null, invisible = true) => {
    if (invisible) {
      element?.classList.add('invisible')
    } else {
      element?.classList.remove('invisible')
    }
    element?.classList.remove('translate-x-full')
    element?.classList.remove('translate-x-0')
    element?.classList.add('-translate-x-full')
  }
  const moveImageToCenter = (element: HTMLElement | null) => {
    element?.classList.remove('invisible')
    element?.classList.remove('translate-x-full')
    element?.classList.remove('-translate-x-full')
    element?.classList.add('translate-x-0')
  }
  const slideNextImage = (currentImgIndex: number, nextImgIndex: number) => {
    if (currentImgIndex === nextImgIndex) return
    const currentImage: HTMLElement | null = document.getElementById(
      `images-${currentImgIndex}`
    )
    const nextImage: HTMLElement | null = document.getElementById(
      `images-${nextImgIndex}`
    )
    moveImageToRight(nextImage, true)
    moveImageToCenter(nextImage)
    moveImageToLeft(currentImage, false)

    // Move the last moved image to its starting point for a future transition back in
    moveImageToRight(lastImgMovedForward)
    lastImgMovedForward = currentImage
    // In case the user doesn't click again make sure the last moved image is moved back to the start
    setTimeout(() => {
      if (lastImgMovedForward) {
        moveImageToRight(lastImgMovedForward)
        lastImgMovedForward = null
      }
    }, parseInt(duration))
  }
  const fadePrevImage = (prevIndex: number) => {
    const currentImage: HTMLElement | null = document.getElementById(
      `images-${currentIndex}`
    )
    const prevImage: HTMLElement | null = document.getElementById(
      `images-${prevIndex}`
    )
    swapOpacities(currentImage, prevImage)
  }

  const slidePrevImage = (prevIndex: number) => {
    const currentImage: HTMLElement | null = document.getElementById(
      `images-${currentIndex}`
    )
    const prevImage: HTMLElement | null = document.getElementById(
      `images-${prevIndex}`
    )
    moveImageToLeft(prevImage, true)

    setTimeout(() => {
      moveImageToCenter(prevImage)
      moveImageToRight(currentImage, false)
    }, parseInt(duration))
    lastImgMovedBackward?.classList.add('invisible')
    lastImgMovedBackward = currentImage
    // In case the user doesn't click again make sure the last moved image is moved back to the start
    setTimeout(() => {
      if (lastImgMovedBackward) {
        lastImgMovedBackward?.classList.add('invisible')
        lastImgMovedBackward = null
      }
    }, 2 * parseInt(duration))
  }

  const nextImage = (): void => {
    const nextIndex = (currentIndex + 1) % imgsLen
    switch (transition) {
      case 'fade': {
        fadeNextImage(currentIndex, nextIndex)
        break
      }
      case 'slide': {
        slideNextImage(currentIndex, nextIndex)
        break
      }
      default: {
        break
      }
    }
    currentIndex = (currentIndex + 1) % imgsLen
  }
  const prevImage = (): void => {
    const prevIndex = currentIndex === 0 ? imgsLen - 1 : currentIndex - 1
    if (currentIndex === prevIndex) return
    switch (transition) {
      case 'fade': {
        fadePrevImage(prevIndex)
        break
      }
      case 'slide': {
        slidePrevImage(prevIndex)
        break
      }
      default: {
        break
      }
    }
    currentIndex = currentIndex === 0 ? imgsLen - 1 : currentIndex - 1
  }
  const getDefaultItemClasses = (itemIndex: number): string => {
    const isCurrentItem = itemIndex === currentIndex
    const opacity = isCurrentItem ? 'opacity-100' : 'opacity-0'
    const position = isCurrentItem ? 'translate-x-0' : 'translate-x-full'
    const visibility = isCurrentItem ? '' : 'invisible'
    switch (transition) {
      case 'fade': {
        return `transition ease-out opacity duration-${duration} ${opacity}`
      }
      case 'slide': {
        return `transition ease-in-out duration-${duration} transform ${visibility} ${position}`
      }
      default: {
        return `${opacity}`
      }
    }
  }
  const imagesArr = images.map((image, i) => {
    return (
      <div
        key={image.src}
        className={`carousel-item ${getDefaultItemClasses(
          i
        )} bg-cover rounded-lg`}
        aria-label={image.alt}
        id={`images-${i}`}
        style={{
          backgroundImage: `url(${image.src})`
        }}
      ></div>
    )
  })
  useEffect(() => {
    if (autoplay) {
      const autoplayId = window.setInterval(() => {
        nextImage()
      }, autoplayDuration)
      return () => clearInterval(autoplayId)
    }
  }, [autoplay])
  return (
    <div
      className='relative shadow-lg rounded-lg'
      style={{ width: width, height: height }}
    >
      <div className='z-10 relative h-full'>
        <div className='flex items-center h-full justify-center justify-between'>
          <div className='icon flex items-center justify-center rounded-lg text-white m-2 w-12 h-12'>
            <ArrowLeft onClick={() => prevImage()} />
          </div>
          <div className='icon flex items-center justify-center rounded-lg text-white m-2 w-12 h-12'>
            <ArrowRight onClick={() => nextImage()} />
          </div>
        </div>
      </div>
      {imagesArr}
    </div>
  )
}

export default Carousel
