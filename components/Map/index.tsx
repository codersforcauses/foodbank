import Image from 'next/image'
import baseMap from '../../public/images/tuckerMap.webp'

const Map = () => {
  return (
    <Image
      src={baseMap}
      alt='Tucker Island Map'
      placeholder='blur'
      layout='fill'
      className='h-full'
    />
  )
}

export default Map
