import React from 'react'
interface Image {
  src: string
  alt: string
}

export interface CarouselProps {
  images: Array<Image>
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const imagesArr = images.map(image => (
    <img src={image.src} key={image.src} alt={image.alt} />
  ))
  return <div>{imagesArr}</div>
}

export default Carousel
