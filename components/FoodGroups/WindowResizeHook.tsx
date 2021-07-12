import React, {useEffect, useState} from 'react'
import { resize_map } from '@components/FoodGroups/dinamicStyles'

export default function WindowResizeHook({ params }) {
    const {previousWidth, coordinates, setPreviousWidth, setCoordinates} = params
    useEffect(() => {
        function handleResize() {
            resize_map(previousWidth, coordinates, setPreviousWidth, setCoordinates)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return null
}
