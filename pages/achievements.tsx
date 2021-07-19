import React from 'react'
import Blackboard from 'components/Achievements/Blackboard'
import Display from 'components/Achievements/Display'
import type { Achievement } from 'lib/types'
import achievementsMap from 'lib/achievements'

/**
 * This page displays a list of all unlockable achievements.
 */
const Achievements: React.FC = () => {
  return (
    <div className='relative'>
      <Blackboard />
      <Display />
    </div>
  )
}

export default Achievements
