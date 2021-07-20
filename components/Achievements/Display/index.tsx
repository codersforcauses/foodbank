import Image from 'next/image'

interface Props {
  unlocked: boolean
  image: StaticImageData
}

const Display = ({ unlocked, image }: Props): JSX.Element => {
  return (
    <div className='relative'>
      <div
        className={
          'm-auto w-20 h-20 left-12 top-9 filter ' +
          (unlocked || 'grayscale contrast-50 opacity-50')
        }
      >
        <Image src={image} alt='Achievement' width={70} height={70} />
      </div>
    </div>
  )
}

export default Display
