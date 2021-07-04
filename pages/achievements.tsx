import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import type { Achievement } from 'lib/types'
import blackboard from 'public/images/blackboard.jpg'
import allAchievements from 'lib/achievements'

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Array<Achievement>>([])

  useEffect(() => {
    allAchievements[0].unlocked = true
    allAchievements[2].unlocked = true
    setAchievements(allAchievements)
  }, [])

  return (
    <div className='relative'>
      <div className='absolute'>
        <Image src={blackboard} alt='Blackboard' />
      </div>
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
    </div>
  )
}

export default Achievements
