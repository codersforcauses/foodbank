import Blackboard from 'components/Achievements/Blackboard'
import Grid from '@components/Achievements/Grid'

/**
 * This page displays a list of all unlockable achievements.
 */
const Achievements = (): JSX.Element => {
  return (
    <div className='relative'>
      <Blackboard />
      <Grid />
    </div>
  )
}

export default Achievements
