import React from 'react'
import Image from 'next/image'
import type { Achievement } from 'lib/types'

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
            'grid grid-cols-1 gap-y-6 place-items-center ' +
            (unlocked ? '' : 'opacity-20')
          }
        >
          <Image src={image} alt='Achievement' width={150} height={150} />
          <div>{title}</div>
        </div>
      ))}
    </div>
  )
}

export default Display
