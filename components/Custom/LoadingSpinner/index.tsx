import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const LoadingSpinner = () => {
  const router = useRouter()
  const [isloading, setIsLoading] = useState(false)

  /** Mechanism to check if the route is changing (i.e. user is trying to go to a different page) and setting isLoading state to true/false. */
  useEffect(() => {
    const toggleLoading = () => {
      setIsLoading(prev => !prev)
    }
    router.events.on('routeChangeStart', toggleLoading)
    router.events.on('routeChangeComplete', toggleLoading)

    return () => {
      router.events.off('routeChangeStart', toggleLoading)
      router.events.off('routeChangeComplete', toggleLoading)
    }
  }, [router])
  return (
    <>
      {isloading && (
        <div className='fixed bottom-0 left-0 sm:left-auto sm:right-0 z-40 m-10 lg:m-20 w-12 h-12 border-4 border-t-transparent border-white border-solid rounded-full animate-spin '></div>
      )}
    </>
  )
}

export default LoadingSpinner
