import React, { useEffect, useState } from 'react'
import Blackboard from 'components/Achievements/Blackboard'
import Display from 'components/Achievements/Display'
import type { Achievement } from 'lib/types'
import allAchievements from 'lib/achievements'

/**
 * This page displays a list of all unlockable achievements.
 */
const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Array<Achievement>>([])

  // Loads achievements on intial render.
  useEffect(() => {
    allAchievements[0].unlocked = true
    allAchievements[1].unlocked = true
    allAchievements[2].unlocked = true
    setAchievements(allAchievements)
  }, [])

  return (
    <div className='relative'>
      <Blackboard />
      <Display achievements={achievements} />
    </div>
  )
}

export default Achievements
