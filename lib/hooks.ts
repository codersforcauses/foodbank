import { useState, useEffect } from 'react'

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

  // Return the width so we can use it in our components
  return { width }
}

export { useViewport }
