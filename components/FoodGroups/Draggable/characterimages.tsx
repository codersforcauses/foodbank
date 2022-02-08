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

export { notion_food_dict }
