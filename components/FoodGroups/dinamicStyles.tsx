import dairy from 'public/images/FoodGroups/dairy-shadow.png'
import meat from 'public/images/FoodGroups/meat-shadow.png'
import fruit from 'public/images/FoodGroups/fruit-shadow.png'
import grains from 'public/images/FoodGroups/grains-shadow.png'
import vegetables from 'public/images/FoodGroups/vegetables-shadow.png'

import {
  FoodGroupImage,
  FoodGroupResizeArguments,
  FoodGroupStates,
  WidthState
} from '@components/FoodGroups/types'
import { Vector2 } from './Draggable/boundingbox'
import { FoodGroupCharacterImage } from './Draggable/types'
import { DAIRY, FOOD_GROUPS, FRUIT, GRAINS, MEAT, VEGETABLES } from './groups'

const WHEEL_IMAGES: Record<string, StaticImageData> = {
  [DAIRY]: dairy,
  [MEAT]: meat,
  [FRUIT]: fruit,
  [GRAINS]: grains,
  [VEGETABLES]: vegetables
}

const R = (deg: number) => (deg * Math.PI) / 180 // RADIANS

const angleRegions = [
  { region_name: GRAINS, start: R(-179), end: R(-90) },
  { region_name: GRAINS, start: R(161), end: R(180) },
  { region_name: VEGETABLES, start: R(-90), end: R(13) },
  { region_name: FRUIT, start: R(13), end: R(57) },
  { region_name: DAIRY, start: R(57), end: R(103) },
  { region_name: MEAT, start: R(103), end: R(161) }
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
    .getElementById(MEAT)
    ?.parentElement?.getBoundingClientRect()
  if (boundingBox === undefined) {
    console.error('[ ERROR ] Could not get parent bounding box')
    return
  }
  const radius = boundingBox.height / 2
  const center: Vector2 = {
    x: boundingBox.x + boundingBox.width / 2,
    y: boundingBox.y + boundingBox.height / 2
  }
  setRadius(radius)
  setCenter(center)
}

const handleMouseOver = (
  group_id: string,
  { meat, grains, dairy, fruit, vegetables }: FoodGroupStates,
  character?: FoodGroupCharacterImage
) => {
  let styles
  let zoom = ['transform', 'scale-105', 'z-10']
  switch (group_id) {
    case MEAT:
      styles = [...meat.styles, ...zoom]
      meat.setStyles(styles)
      dairy.setStyles([''])
      grains.setStyles([''])
      break
    case GRAINS:
      styles = [...grains.styles, ...zoom]
      grains.setStyles(styles)
      meat.setStyles([''])
      vegetables.setStyles([''])
      break
    case DAIRY:
      styles = [...dairy.styles, ...zoom]
      dairy.setStyles(styles)
      meat.setStyles([''])
      fruit.setStyles([''])
      break
    case FRUIT:
      styles = [...fruit.styles, ...zoom]
      fruit.setStyles(styles)
      dairy.setStyles([''])
      vegetables.setStyles([''])
      break
    case VEGETABLES:
      styles = [...vegetables.styles, ...zoom]
      vegetables.setStyles(styles)
      grains.setStyles([''])
      fruit.setStyles([''])
      break
  }
}

const handleMouseOut = (
  group_id: string,
  { meat, grains, dairy, fruit, vegetables }: FoodGroupStates
) => {
  // const group_id = e.target.parentNode.parentNode.attributes["id"].value
  let styles
  switch (group_id) {
    case MEAT:
      grains.setStyles(['z-5'])
      dairy.setStyles(['z-10'])
      meat.setStyles(['z-0'])
      fruit.setStyles(['z-0'])
      vegetables.setStyles(['z-0'])
      break
    case GRAINS:
      meat.setStyles(['z-10'])
      vegetables.setStyles(['z-10'])
      grains.setStyles(['z-0'])
      dairy.setStyles(['z-0'])
      break
    case DAIRY:
      meat.setStyles(['z-10'])
      fruit.setStyles(['z-10'])
      dairy.setStyles(['z-0'])
      grains.setStyles(['z-0'])
      vegetables.setStyles(['z-0'])
      break
    case FRUIT:
      dairy.setStyles(['z-10'])
      vegetables.setStyles(['z-5'])
      fruit.setStyles(['z-0'])
      grains.setStyles(['z-0'])
      meat.setStyles(['z-0'])

      break
    case VEGETABLES:
      grains.setStyles(['z-10'])
      fruit.setStyles(['z-10'])
      dairy.setStyles(['z-0'])
      vegetables.setStyles(['z-0'])

      break
  }
}

export {
  resize_map,
  handleMouseOver,
  handleMouseOut,
  foodGroupsImages,
  angleRegions
}
