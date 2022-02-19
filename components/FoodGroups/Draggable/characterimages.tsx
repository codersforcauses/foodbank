import { GROUPS } from '../groups'

let notion_food_dict = new Map<string, GROUPS>([
  // OLD - REMOVE ONCE DATABASE IS MIGRATED (Note that the dash is different from -)
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
