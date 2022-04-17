import { GROUPS } from '../groups'

interface FoodGroupCharacterImage {
  div_id: string
  name: string
  img_src: string
  img_id: string
  type: GROUPS
  bounding_box_id: number
}

interface FoodGroupCharacterImageDynamic extends FoodGroupCharacterImage {
  // start_pos: Vector2
  start_index: number
  end_index: number
}

export type { FoodGroupCharacterImage, FoodGroupCharacterImageDynamic }
