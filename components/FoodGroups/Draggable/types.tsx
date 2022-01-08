import { Vector2 } from './boundingbox'

interface FoodGroupCharacterImage {
  div_id: string
  img_src: string
  img_id: string
  type: string
  bounding_box_id: number
  start_pos: Vector2
}

export type { FoodGroupCharacterImage }