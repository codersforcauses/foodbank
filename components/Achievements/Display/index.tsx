import Image from 'next/image'

interface Props {
  unlocked: boolean
  image: StaticImageData
}

/**
 * The image display for an achievement including a circular progress bar.
 */
const Display = ({ unlocked, image }: Props): JSX.Element => {
  return (
    <div className='relative'>
      <svg className='absolute' height='120' width='120'>
        <circle
          stroke='white'
          strokeWidth='4'
          fill='transparent'
          r='52'
          cx='60'
          cy='60'
        />
      </svg>
      <div
        className={
          'relative m-auto w-20 h-20 left-6 top-6 filter ' +
          (unlocked || 'grayscale contrast-50 opacity-50')
        }
      >
        <Image src={image} alt='Achievement' width={70} height={70} />
      </div>
    </div>
  )
}

export default Display
