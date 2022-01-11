import { useFirebase } from '@components/Firebase/context'
import { Switch } from '@headlessui/react'

const TestData = () => {
  const { achievements, updateAchievementsDocument, userLoading } =
    useFirebase()
  return (
    <div>
      {userLoading ? (
        <>
          <div className='flex items-center justify-center'>
            <div
              className='inline-block w-8 h-8 border-4 rounded-full spinner-border animate-spin text-primary'
              role='status'
            >
              {/* <span className='visually-hidden'>Loading...</span> */}
            </div>
            Loading...
          </div>
        </>
      ) : (
        <ul>
          {Object.entries(achievements)
            .sort()
            .map(([key, value], i) => (
              <li className='travelcompany-input' key={i}>
                <span className='input-label'>
                  key: {key} value: {value.toString()}
                </span>{' '}
                <Switch
                  checked={value}
                  onChange={() => {
                    updateAchievementsDocument?.({ [key]: !value })
                  }}
                  className={`${
                    value ? 'bg-blue' : 'bg-grey-light'
                  } relative inline-flex items-center h-5 rounded-full w-11`}
                >
                  <span className='sr-only'>Earn trophy</span>
                  <span
                    className={`${
                      value ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                  />
                </Switch>
                <br />
                <br />
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default TestData