import React, { useEffect, useState } from 'react'
import Blackboard from 'components/Achievements/Blackboard'
import Display from 'components/Achievements/Display'
import type { Achievement } from 'lib/types'
import achievementsMap from 'lib/achievements'

/**
 * This page displays a list of all unlockable achievements.
 */
const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Map<string, Achievement>>(
    new Map()
  )

  // Loads achievements on intial render.
  useEffect(() => {
    setAchievements(achievementsMap)
  }, [])

  return (
    <div className='relative'>
      <Blackboard />
      <Display achievements={achievements} />
    </div>
  )
}

export default Achievements
