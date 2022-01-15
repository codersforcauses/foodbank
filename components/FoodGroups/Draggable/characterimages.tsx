import dairy from 'public/images/Food Characters/Cheese Chessy.png'
import meat from 'public/images/Food Characters/Meat Lean.png'
import fruit from 'public/images/Food Characters/Apple-Aces.png'
import vegetable from 'public/images/Food Characters/Sweat Potato Footy Girl.png'
import grain from 'public/images/Food Characters/Bread Mixed Grain.png'

import { FoodGroupCharacterImage } from './types'
import { DAIRY, FRUIT, GRAINS, MEAT, VEGETABLES } from '../groups'

const foodGroupsCharacterImages: FoodGroupCharacterImage[] = [
  {
    div_id: 'dairy-character',
    img_src: dairy.src,
    img_id: 'dairy-character-img',
    bounding_box_id: 0,
    type: DAIRY,
    start_pos: { x: 90, y: 2 }
  },
  {
    div_id: 'meat-character',
    img_src: meat.src,
    img_id: 'meat-character-img',
    bounding_box_id: 1,
    type: MEAT,
    start_pos: { x: 90, y: 20 }
  },
  {
    div_id: 'fruit-character',
    img_src: fruit.src,
    img_id: 'fruit-character-img',
    bounding_box_id: 2,
    type: FRUIT,
    start_pos: { x: 90, y: 40 }
  },
  {
    div_id: 'vegetable-character',
    img_src: vegetable.src,
    img_id: 'vegetable-character-img',
    bounding_box_id: 3,
    type: VEGETABLES,
    start_pos: { x: 90, y: 60 }
  },
  {
    div_id: 'grain-character',
    img_src: grain.src,
    img_id: 'grain-character-img',
    bounding_box_id: 4,
    type: GRAINS,
    start_pos: { x: 90, y: 80 }
  }
]

export { foodGroupsCharacterImages }
