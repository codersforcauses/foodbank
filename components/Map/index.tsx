import Image from 'next/image'
import baseMap from '../../public/images/tuckerMap.webp'
const Map = () => (
  <>
  <Image
    priority
    src={baseMap}
    alt='Tucker Island Map'
    placeholder='blur'
    layout='fill'
    objectFit='cover'
    objectPosition='left center'
  />

  </>
)

export default Map
