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

let initialCoordinates = [
  [20, 520, 140, 10, 415, 445, 200, 525], // dairy
  [5, 140, 410, 5, 320, 420, 125, 325], //meat
  [20, 10, 410, 115, 250, 350], // fruit
  [10, 5, 325, 160, 410, 500, 10, 400], // vegetables
  [40, 540, 50, 270, 200, 70, 410, 5, 410, 410]
] // grains

let initialWidths = [
  {
    id: 'dairy-img',
    initialWidth: 433
  },
  {
    id: 'meat-img',
    initialWidth: 424
  },
  {
    id: 'fruit-img',
    initialWidth: 420
  },
  {
    id: 'vegetables-img',
    initialWidth: 422
  },
  {
    id: 'grains-img',
    initialWidth: 424
  }
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

const get_wheel_height = () => {
  const bounding_boxes = ['meat', 'dairy', 'fruit', 'vegetables', 'grains'].map(
    x => {
      let slice = document.getElementById(x)
      if (slice == null) {
        console.error("couldn't get element ")
        return { top: 0, bottom: 0 }
      }
      return slice.getBoundingClientRect()
    }
  )
  return (
    Math.max.apply(
      null,
      bounding_boxes.map(box => box.bottom)
    ) -
    Math.min.apply(
      null,
      bounding_boxes.map(box => box.top)
    )
  )
}

const resize_map = ({
  previousWidth,
  coordinates,
  previousFlexHeight,
  setPreviousWidth,
  setCoordinates,
  setFlexHeight
}: FoodGroupResizeArguments) => {
  let newCoordinates: number[][] = []
  let newPreviousWidth: WidthState[] = []

  console.log(get_wheel_height())
  setFlexHeight(get_wheel_height())

  previousWidth.map(
    (width: { id: string; initialWidth: number }, index: number) => {
      let newWidth = document.getElementById(width.id)
      if (newWidth == null) {
        console.error("couldn't get element ")
        return
      }
      let ratio = newWidth.clientWidth / width.initialWidth

      let new_coordinates = coordinates[index].map((coordinate: number) => {
        return coordinate * ratio
      })
      // console.log(ratio, newCoordinates, coordinates)
      newCoordinates.push(new_coordinates)

      newPreviousWidth.push({
        id: previousWidth[index].id,
        initialWidth: newWidth.clientWidth
      })
    }
  )

  setPreviousWidth(newPreviousWidth)
  setCoordinates(newCoordinates)
}

const handleMouseOver = (
  group_id: string,
  { meat, grains, dairy, fruit, vegetables }: FoodGroupStates
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
  initialCoordinates,
  initialWidths,
  handleMouseOver,
  handleMouseOut,
  foodGroupsImages
}
