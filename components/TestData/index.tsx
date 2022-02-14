import { useCallback } from 'react'

import { Button } from '@components/Custom'
import Svg from '@components/Custom/Svg'
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
    <div className='mt-32'>
      {userLoading ? (
        <div className='flex items-center justify-center'>
          <div
            className='inline-block w-8 h-8 border-4 rounded-full spinner-border animate-spin text-primary'
            role='status'
          />
          Loading...
        </div>
      ) : (
        <div className='flex flex-col justify-center text-primary'>
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
          <Svg
            name='asd'
            className='h-6'
            viewBox='0 0 25 25'
            fill='currentColor'
          />
          <Svg
            name='SolidArrowCircleRight'
            className='h-6'
            viewBox='0 0 25 25'
            fill='currentColor'
          />
          <Svg
            name='SolidCheckCircle'
            className='h-6'
            viewBox='0 0 25 25'
            fill='currentColor'
          />
          <Svg
            name='SolidChevronDown'
            className='h-6'
            viewBox='0 0 25 25'
            fill='currentColor'
          />
          <Svg
            name='SolidHamburger'
            className='h-6'
            viewBox='0 0 25 25'
            fill='currentColor'
          />
        </div>
      )}
    </div>
  )
}

export default TestData
