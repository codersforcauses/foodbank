import { useState, useEffect } from 'react'

const useViewport = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  // Return the width so we can use it in our components
  return { width }
}

export { useViewport }
