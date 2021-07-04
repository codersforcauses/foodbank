import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import type { Achievement } from 'lib/types'
import blackboard from 'public/images/blackboard.jpg'
import allAchievements from 'lib/achievements'

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Array<Achievement>>([])

  useEffect(() => {
    setAchievements(allAchievements)
  }, [])

  return (
    <div>
      <Image src={blackboard} alt='Blackboard' />
      <div>
        {achievements.map(achievement => (
          <Image
            src={achievement.image}
            alt='Achievement'
            width={150}
            height={150}
            key={achievement.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Achievements
