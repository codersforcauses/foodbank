import Image from 'next/image'

interface Props {
  unlocked: boolean
  image: StaticImageData
  progress: number
  total: number
}

const boxLength = 120
const strokeWidth = 4
const radius = 52
const circumference = 2 * Math.PI * radius
const centreOffset = boxLength / 2 - strokeWidth / 2

/**
 * The image display for an achievement including a circular progress bar.
 */
const Display = ({ unlocked, image, progress, total }: Props): JSX.Element => {
  return (
    <div className='relative'>
      <svg
        className='absolute progress-ring'
        height={boxLength}
        width={boxLength}
      >
        <circle
          stroke='white'
          strokeWidth={strokeWidth}
          fill='transparent'
          r={radius}
          cx={centreOffset}
          cy={centreOffset}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference - (progress / total) * circumference
          }}
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
