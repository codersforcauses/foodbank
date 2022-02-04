import dairy from 'public/images/Food Characters/Cheese Chessy.png'
import meat from 'public/images/Food Characters/Meat Lean.png'
import fruit from 'public/images/Food Characters/Apple-Aces.png'
import vegetable from 'public/images/Food Characters/Sweat Potato Footy Girl.png'
import grain from 'public/images/Food Characters/Bread Mixed Grain.png'

import dairy_1 from 'public/images/Food Characters/Milk Mighty 2.png'
import meat_1 from 'public/images/Food Characters/Fish Flying.png'
import fruit_1 from 'public/images/Food Characters/Banana Super Fruity.png'
import vegetable_1 from 'public/images/Food Characters/Cucumber Business.png'
import grain_1 from 'public/images/Food Characters/Bread Toasty.png'

import { FoodGroupCharacterImage } from './types'
import { GROUPS } from '../groups'
import { getFormatData } from '../API/getData'

// const foodGroupsCharacterImages: FoodGroupCharacterImage[] = getFormatData()

let notion_food_dict = new Map<string, GROUPS>([
  // OLD - REMOVE ONCE DATABASE IS MIGRATED
  ['Vegetables – protective foods', GROUPS.VEGETABLES],
  ['Breads and Cereals – Energy Foods', GROUPS.GRAINS],
  ['Dairy foods – body building', GROUPS.DAIRY],
  ['Meat/Protein – body building', GROUPS.MEAT],
  ['Fruit – Protective foods', GROUPS.FRUIT],

  // TEMP - REMOVE THIS MAP ONCE MIGRATED TO NAMES
  [GROUPS.VEGETABLES, GROUPS.VEGETABLES],
  [GROUPS.GRAINS, GROUPS.GRAINS],
  [GROUPS.DAIRY, GROUPS.DAIRY],
  [GROUPS.MEAT, GROUPS.MEAT],
  [GROUPS.FRUIT, GROUPS.FRUIT]
])

// const foodGroupsCharacterImages: FoodGroupCharacterImage[] = [
//   {
//     div_id: 'dairy-character',
//     img_src: dairy.src,
//     img_id: 'dairy-character-img',
//     bounding_box_id: 0,
//     type: GROUPS.DAIRY,
//     start_pos: { x: 90, y: 2 }
//   },
//   {
//     div_id: 'meat-character',
//     img_src: meat.src,
//     img_id: 'meat-character-img',
//     bounding_box_id: 1,
//     type: GROUPS.MEAT,
//     start_pos: { x: 90, y: 20 }
//   },
//   {
//     div_id: 'fruit-character',
//     img_src: fruit.src,
//     img_id: 'fruit-character-img',
//     bounding_box_id: 2,
//     type: GROUPS.FRUIT,
//     start_pos: { x: 90, y: 40 }
//   },
//  {
//     div_id: 'vegetable-character',
//     img_src: vegetable.src,
//     img_id: 'vegetable-character-img',
//     bounding_box_id: 3,
//     type: GROUPS.VEGETABLES,
//     start_pos: { x: 90, y: 60 }
//   },
//   {
//     div_id: 'grain-character',
//     img_src: grain.src,
//     img_id: 'grain-character-img',
//     bounding_box_id: 4,
//     type: GROUPS.GRAINS,
//     start_pos: { x: 90, y: 80 }
//   },
//   {
//     div_id: 'dairy-character',
//     img_src: dairy_1.src,
//     img_id: 'dairy-character-img',
//     bounding_box_id: 0,
//     type: GROUPS.'dairy',
//     start_pos: { x: 90, y: 2 }
//   },
//   {
//     div_id: 'meat-character',
//     img_src: meat_1.src,
//     img_id: 'meat-character-img',
//     bounding_box_id: 1,
//     type: GROUPS.'meat',
//     start_pos: { x: 90, y: 20 }
//   },
//   {
//     div_id: 'fruit-character',
//     img_src: fruit_1.src,
//     img_id: 'fruit-character-img',
//     bounding_box_id: 2,
//     type: GROUPS.'fruit',
//     start_pos: { x: 90, y: 40 }
//   },
//   {
//     div_id: 'vegetable-character',
//     img_src: vegetable_1.src,
//     img_id: 'vegetable-character-img',
//     bounding_box_id: 3,
//     type: GROUPS.'vegetables',
//     start_pos: { x: 90, y: 60 }
//   },
//   {
//     div_id: 'grain-character',
//     img_src: grain_1.src,
//     img_id: 'grain-character-img',
//     bounding_box_id: 4,
//     type: GROUPS.'grains',
//     start_pos: { x: 90, y: 80 }
//   }
// ]

export { notion_food_dict }
