import { useEffect } from 'react'
import { resize_map } from '@components/FoodGroups/dinamicStyles'
import { FoodGroupResizeArguments } from '@components/FoodGroups/types'

export default function WindowResizeHook({
  params
}: {
  params: FoodGroupResizeArguments
}) {
  useEffect(() => {
    function handleResize() {
      resize_map(params)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return null
}
