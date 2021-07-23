import React, {useEffect} from 'react'

import { PreviousWidth } from '@components/FoodGroups/types'

const resize_map = (previousWidth: PreviousWidth[],
                    coordinates: number [][],
                    setPreviousWidth: React.Dispatch<React.SetStateAction<{ id: string, initialWidth: number }[]>>,
                    setCoordinates: React.Dispatch<React.SetStateAction<number[][]>>) => {
    let newCoordinates: number[][] = []
    let newPreviousWidth: { id: string; initialWidth: number }[] = []

    previousWidth.map((width, index: number) => {
        // @ts-ignore
        let newWidth = document.getElementById(width.id).clientWidth
        let ratio = newWidth / width["initialWidth"]

        let new_coordinates = coordinates[index].map((coordinate: number) => {
            return coordinate * ratio
        })
        newCoordinates.push(new_coordinates)

        newPreviousWidth.push({
            "id": previousWidth[index]["id"],
            "initialWidth": newWidth
        })
    })

    setPreviousWidth(newPreviousWidth)
    setCoordinates(newCoordinates)
}

function WindowResizeHook(params: {
    params: {
        previousWidth: PreviousWidth[],
        coordinates: number [][],
        setPreviousWidth: React.Dispatch<React.SetStateAction<{ id: string, initialWidth: number }[]>>,
        setCoordinates: React.Dispatch<React.SetStateAction<number[][]>>
    }
}) {
    const { previousWidth, coordinates, setPreviousWidth, setCoordinates } = params.params
    
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

export {resize_map, WindowResizeHook}
