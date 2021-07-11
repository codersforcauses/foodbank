import React from 'react'
import Image from 'next/image'
import type { Achievement } from 'lib/types'

import explosion from 'public/images/explosion.png'

interface Props {
  achievements: Array<Achievement>
}

/**
 * Renders all unlockable achievements.
 */
const Display: React.FC<Props> = ({ achievements }) => {
  return (
    <div className='absolute m-28 grid grid-cols-5 gap-16'>
      {achievements.map(({ title, image, unlocked, progress, total }) => (
        <div key={title} className='grid grid-cols-1 place-items-center'>
          <div className='relative'>
            <div
              className={
                'm-auto w-40 h-40 filter ' +
                (unlocked ? '' : 'grayscale contrast-50 opacity-50')
              }
            >
              <Image src={explosion} alt='Explosion' />
            </div>
            <div className='absolute m-auto w-20 h-20 left-12 top-9 filter grayscale contrast-50 opacity-50'>
              <Image src={image} alt='Achievement' width={70} height={70} />
            </div>
            <div
              className='absolute m-auto w-20 h-20 left-12 top-9'
              style={{
                clipPath: `polygon(0% 100%, 100% 100%, 100% ${
                  100 - (progress / total) * 100
                }%, 0% ${100 - (progress / total) * 100}%)`
              }}
            >
              <Image src={image} alt='Achievement' width={70} height={70} />
            </div>
          </div>
          <div
            className={
              'font-serif text-center ' +
              (unlocked ? '' : 'grayscale contrast-50 opacity-50')
            }
          >
            <div>{title}</div>
            <div>
              {progress} / {total}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Display
