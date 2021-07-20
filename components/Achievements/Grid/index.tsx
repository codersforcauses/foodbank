import React, { useContext } from 'react'
import type { Achievement } from 'lib/types'
import { AchievementContext } from 'contexts'

import Display from 'components/Achievements/Display'
import Label from 'components/Achievements/Label'

/**
 * Renders all unlockable achievements in a flex grid.
 */
const Grid: React.FC = () => {
  const achievements: Map<string, Achievement> = useContext(AchievementContext)

  return (
    <div className='absolute m-28 grid grid-cols-5 gap-16'>
      {Array.from(achievements.values()).map(
        ({ title, image, unlocked, progress, total }) => (
          <div key={title} className='grid grid-cols-1 place-items-center'>
            <Display unlocked={unlocked} image={image} />
            <Label
              title={title}
              unlocked={unlocked}
              progress={progress}
              total={total}
            />
          </div>
        )
      )}
    </div>
  )
}

export default Grid
