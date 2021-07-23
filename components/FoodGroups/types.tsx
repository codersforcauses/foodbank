interface FoodGroupImage {
    div_id: string,
    img_styles: string,
    img_src: string,
    img_id: string,
    map_name: string,
}

interface FoodGroupProps {
    open: boolean
    onClose: () => void
}

interface PreviousWidth {
    id: string, 
    initialWidth: number 
}

interface Coordinates {
    coordinates: number [][]
}

interface SetPreviousWidth {
    setPreviousWidth: React.Dispatch<React.SetStateAction<{ id: string, initialWidth: number }[]>>,
}

interface SetCoordinates {
    setCoordinates: React.Dispatch<React.SetStateAction<number[][]>>

}


export type { FoodGroupImage, FoodGroupProps, Coordinates, SetCoordinates, PreviousWidth, SetPreviousWidth }
