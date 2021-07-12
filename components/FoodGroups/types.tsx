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

export type { FoodGroupImage, FoodGroupProps }
