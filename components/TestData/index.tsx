import { Button } from '@components/Custom'
import { useFirebase } from '@components/FirebaseContext'

const TestData = () => {
  const { achievementsCount, addAchievementsCount, userLoading } = useFirebase()

  const decreaseCount = () => {
    addAchievementsCount?.(-1)
  }

  const increaseCount = () => {
    addAchievementsCount?.(1)
  }

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
        <div className='flex justify-center flex-col'>
          <p className='text-center text-2xl'>
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
