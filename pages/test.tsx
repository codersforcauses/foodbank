import { Carousel } from '@components/Custom'
import Image from 'next/image'

// to be deleted after it's used for recipes
const Test = () => {
  const images = [
    { src: 'https://tinyurl.com/cyjp2caw', alt: 'a cool image' },
    { src: 'https://tinyurl.com/8cxfsfzw', alt: 'a cool image' },
    { src: 'https://tinyurl.com/yw4tpbht', alt: 'a cool image' },
    { src: 'https://tinyurl.com/uzafa752', alt: 'a cool image' }
  ]
  return (
    <div className='flex justify-center align-center'>
      <Carousel
        controls
        indicators
        length={images.length}
        className='h-72 w-96'
      >
        {images.map(({ src, alt }) => (
          // make sure to declare a div as below with `keen-slider__slide` as a class for it to work properly
          <div
            key={src}
            className='flex items-center justify-center bg-opacity-25 bg-grey keen-slider__slide'
          >
            <Image src={src} alt={alt} layout='fill' />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Test
