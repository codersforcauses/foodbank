import React, { useContext } from 'react'
import Image from 'next/image'
import type { Achievement } from 'lib/types'
import { AchievementContext } from 'contexts'

import explosion from 'public/images/explosion.png'

/**
 * Renders all unlockable achievements.
 */
const Display: React.FC = () => {
  const achievements: Map<string, Achievement> = useContext(AchievementContext)

  return (
    <div className='absolute m-28 grid grid-cols-5 gap-16'>
      {Array.from(achievements.values()).map(
        ({ title, image, unlocked, progress, total }) => (
          <div key={title} className='grid grid-cols-1 place-items-center'>
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
            <div
              className={
                'font-serif text-center ' +
                (unlocked || 'grayscale contrast-50 opacity-50')
              }
            >
              <div>{title}</div>
              <div>
                {progress} / {total}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Display
