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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default TestData
