import { Button } from '@components/Custom'
import { useFirebase } from '@components/FirebaseContext'

const TestData = () => {
  const { achievementsCount, addAchievementsCount, userLoading } = useFirebase()
  return (
    <div>
      {userLoading ? (
        <>
          <div className='flex items-center justify-center'>
            <div
              className='inline-block w-8 h-8 border-4 rounded-full spinner-border animate-spin text-primary'
              role='status'
            />
            Loading...
          </div>
        </>
      ) : (
        <div className='flex justify-center flex-col'>
          <p className='text-center text-2xl'>
            Achievements Count: {achievementsCount.count}
          </p>
          <div className='flex justify-center gap-6'>
            <Button
              className='content-center text-2xl'
              onClick={() => addAchievementsCount?.(-1)}
            >
              -
            </Button>
            <Button
              className='text-2xl'
              onClick={() => addAchievementsCount?.(1)}
            >
              +
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TestData
