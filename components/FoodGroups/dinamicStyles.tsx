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

const R = (deg: number) => (deg * Math.PI) / 180 // RADIANS

const angleRegions = [
  { region_name: 'grains', start: R(-179), end: R(-90) },
  { region_name: 'grains', start: R(161), end: R(180) },
  { region_name: 'vegetables', start: R(-90), end: R(13) },
  { region_name: 'fruit', start: R(13), end: R(57) },
  { region_name: 'dairy', start: R(57), end: R(103) },
  { region_name: 'meat', start: R(103), end: R(161) }
]

const foodGroupsImages: FoodGroupImage[] = [
  {
    div_id: 'dairy',
    img_styles: 'img-dairy',
    img_id: 'dairy-img',
    img_src: dairy.src,
    map_name: 'dairy_map'
  },
  {
    div_id: 'meat',
    img_styles: 'img-meat',
    img_id: 'meat-img',
    img_src: meat.src,
    map_name: 'meat_map'
  },
  {
    div_id: 'fruit',
    img_styles: 'img-fruit',
    img_id: 'fruit-img',
    img_src: fruit.src,
    map_name: 'fruit_map'
  },
  {
    div_id: 'vegetables',
    img_styles: 'img-vegetables',
    img_id: 'vegetables-img',
    img_src: vegetables.src,
    map_name: 'vegetables_map'
  },
  {
    div_id: 'grains',
    img_styles: 'img-grains',
    img_id: 'grains-img',
    img_src: grains.src,
    map_name: 'grains_map'
  }
]

const resize_map = ({ setRadius, setCenter }: FoodGroupResizeArguments) => {
  const boundingBox = document
    .getElementById('meat')
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
    case 'meat':
      styles = [...meat.styles, ...zoom]
      meat.setStyles(styles)
      dairy.setStyles([''])
      grains.setStyles([''])
      break
    case 'grains':
      styles = [...grains.styles, ...zoom]
      grains.setStyles(styles)
      meat.setStyles([''])
      vegetables.setStyles([''])
      break
    case 'dairy':
      styles = [...dairy.styles, ...zoom]
      dairy.setStyles(styles)
      meat.setStyles([''])
      fruit.setStyles([''])
      break
    case 'fruit':
      styles = [...fruit.styles, ...zoom]
      fruit.setStyles(styles)
      dairy.setStyles([''])
      vegetables.setStyles([''])
      break
    case 'vegetables':
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
    case 'meat':
      grains.setStyles(['z-5'])
      dairy.setStyles(['z-10'])
      meat.setStyles(['z-0'])
      fruit.setStyles(['z-0'])
      vegetables.setStyles(['z-0'])
      break
    case 'grains':
      meat.setStyles(['z-10'])
      vegetables.setStyles(['z-10'])
      grains.setStyles(['z-0'])
      dairy.setStyles(['z-0'])
      break
    case 'dairy':
      meat.setStyles(['z-10'])
      fruit.setStyles(['z-10'])
      dairy.setStyles(['z-0'])
      grains.setStyles(['z-0'])
      vegetables.setStyles(['z-0'])
      break
    case 'fruit':
      dairy.setStyles(['z-10'])
      vegetables.setStyles(['z-5'])
      fruit.setStyles(['z-0'])
      grains.setStyles(['z-0'])
      meat.setStyles(['z-0'])

      break
    case 'vegetables':
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