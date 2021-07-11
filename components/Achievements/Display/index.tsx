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
      {achievements.map(({ title, image, unlocked }) => (
        <div
          key={title}
          className={
            'grid grid-cols-1 place-items-center ' +
            (unlocked ? '' : 'filter grayscale contrast-50 opacity-50')
          }
        >
          <div className='relative'>
            <div className='m-auto w-40 h-40'>
              <Image src={explosion} alt='Explosion' />
            </div>
            <div className='absolute m-auto w-20 h-20 left-12 top-9'>
              <Image src={image} alt='Achievement' width={70} height={70} />
            </div>
          </div>
          <div className='font-serif'>{title}</div>
        </div>
      ))}
    </div>
  )
}

export default Display
