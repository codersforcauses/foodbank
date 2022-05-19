import { FOOD_GROUPS, GROUPS } from '@components/FoodGroups/groups'
import { zoom } from '@components/FoodGroups/styles'
import {
  FoodGroupImage,
  FoodGroupResizeArguments,
  FoodGroupStates
} from '@components/FoodGroups/types'
import { Vector2 } from '@components/FoodGroups/vector'

import dairy from 'public/images/FoodGroups/dairy-shadow.png'
import fruit from 'public/images/FoodGroups/fruit-shadow.png'
import grains from 'public/images/FoodGroups/grains-shadow.png'
import meat from 'public/images/FoodGroups/meat-shadow.png'
import vegetables from 'public/images/FoodGroups/vegetables-shadow.png'

const WHEEL_IMAGES: Record<string, StaticImageData> = {
  [GROUPS.DAIRY]: dairy,
  [GROUPS.MEAT]: meat,
  [GROUPS.FRUIT]: fruit,
  [GROUPS.GRAINS]: grains,
  [GROUPS.VEGETABLES]: vegetables
}

const R = (deg: number) => (deg * Math.PI) / 180 // RADIANS

const angleRegions = [
  { region_name: GROUPS.GRAINS, start: R(-179), end: R(-90) },
  { region_name: GROUPS.GRAINS, start: R(161), end: R(180) },
  { region_name: GROUPS.VEGETABLES, start: R(-90), end: R(13) },
  { region_name: GROUPS.FRUIT, start: R(13), end: R(57) },
  { region_name: GROUPS.DAIRY, start: R(57), end: R(103) },
  { region_name: GROUPS.MEAT, start: R(103), end: R(161) }
]

const foodGroupsImages: FoodGroupImage[] = FOOD_GROUPS.map(group => {
  return {
    div_id: group,
    img_styles: group,
    img_id: `${group}-img`,
    img_src: WHEEL_IMAGES[group].src,
    map_name: `${group}_map`
  }
})

const resize_map = ({ setRadius, setCenter }: FoodGroupResizeArguments) => {
  const boundingBox = document
    .getElementById(GROUPS.MEAT) // ANY PART
    ?.parentElement?.getBoundingClientRect()
  if (boundingBox === undefined) {
    console.error('[ ERROR ] Could not get parent bounding box')
    return
  }
  const radius = boundingBox.width / 2
  const center: Vector2 = {
    x: boundingBox.x + boundingBox.width / 2,
    y: boundingBox.y + boundingBox.height / 2
  }
  setRadius(radius)
  setCenter(center)
}

const handleMouseOver = (group_id: GROUPS, allStates: FoodGroupStates) => {
  // Set zoom styles
  const currentStyles = allStates[group_id].styles
  const styles = [...currentStyles, ...zoom]
  allStates[group_id].setStyles(styles)
}

const handleMouseOut = (
  group_id: GROUPS,
  { meat, grains, dairy, fruit, vegetables }: FoodGroupStates
) => {
  switch (group_id) {
    case GROUPS.MEAT:
      grains.setStyles(['z-5'])
      dairy.setStyles(['z-10'])
      meat.setStyles(['z-0'])
      fruit.setStyles(['z-0'])
      vegetables.setStyles(['z-0'])
      break
    case GROUPS.GRAINS:
      meat.setStyles(['z-10'])
      vegetables.setStyles(['z-10'])
      grains.setStyles(['z-0'])
      dairy.setStyles(['z-0'])
      break
    case GROUPS.DAIRY:
      meat.setStyles(['z-10'])
      fruit.setStyles(['z-10'])
      dairy.setStyles(['z-0'])
      grains.setStyles(['z-0'])
      vegetables.setStyles(['z-0'])
      break
    case GROUPS.FRUIT:
      dairy.setStyles(['z-10'])
      vegetables.setStyles(['z-5'])
      fruit.setStyles(['z-0'])
      grains.setStyles(['z-0'])
      meat.setStyles(['z-0'])
      break
    case GROUPS.VEGETABLES:
      grains.setStyles(['z-10'])
      fruit.setStyles(['z-10'])
      dairy.setStyles(['z-0'])
      vegetables.setStyles(['z-0'])
      break
  }
}

export {
  angleRegions,
  foodGroupsImages,
  handleMouseOut,
  handleMouseOver,
  resize_map
}
