import { useState, useEffect } from 'react'

/** Listens to changes in window size and returns the width. Ref: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/ */
const useViewport = () => {
  // Window is undefined for server-side code execution.
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width }
}

export { useViewport }
