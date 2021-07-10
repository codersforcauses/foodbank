import Carousel from '@components/Carousel'

export default function Test() {
  const images = [
    { src: 'https://tinyurl.com/cyjp2caw', alt: 'a cool image' },
    { src: 'https://tinyurl.com/8cxfsfzw', alt: 'a cool image' },
    { src: 'https://tinyurl.com/yw4tpbht', alt: 'a cool image' },
    { src: 'https://tinyurl.com/uzafa752', alt: 'a cool image' }
  ]
  return (
    <div className='flex justify-center align-center h-full'>
      <Carousel images={images} className='h-72 w-96' autoplay />
    </div>
  )
}
