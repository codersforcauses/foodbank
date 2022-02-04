import { useCallback } from 'react'

import { Button } from '@components/Custom'
import { useFirebase } from '@components/FirebaseContext/context'

const TestData = () => {
  const { achievementsCount, addAchievementsCount, userLoading } = useFirebase()

  const decreaseCount = useCallback(() => {
    addAchievementsCount?.(-1)
  }, [addAchievementsCount])

  const increaseCount = useCallback(() => {
    addAchievementsCount?.(1)
  }, [addAchievementsCount])

  return (
    <div>
      {userLoading ? (
        <div className='flex items-center justify-center'>
          <div
            className='inline-block w-8 h-8 border-4 rounded-full spinner-border animate-spin text-primary'
            role='status'
          />
          Loading...
        </div>
      ) : (
        <div className='flex flex-col justify-center'>
          <p className='text-2xl text-center'>
            Achievements Count: {achievementsCount.count}
          </p>
          <div className='flex justify-center gap-6'>
            <Button className='text-2xl' onClick={decreaseCount}>
              -
            </Button>
            <Button className='text-2xl' onClick={increaseCount}>
              +
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TestData
