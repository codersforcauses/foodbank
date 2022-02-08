import { Client } from '@notionhq/client'
import { FoodGroupCharacterImage } from '../Draggable/types'

import { notion_food_dict } from '../Draggable/characterimages'

import { GROUPS } from '../groups'
import {
  GetDatabaseResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'
import dynamic from 'next/dynamic'
import { ORIGIN_VECTOR2, Vector2 } from '../Draggable/boundingbox'

if (process.env.NOTION_API_KEY === undefined) {
  console.error('[ FATAL ]: NO NOTION_API_KEY IN ENVIRONMENT VARIABLES')
  process.exit(1)
}
if (process.env.NOTION_CHARACTERS_DB_ID === undefined) {
  console.error(
    '[ FATAL ]: NO NOTION_CHARACTERS_DB_ID IN ENVIRONMENT VARIABLES'
  )
  process.exit(1)
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY
})

const getCharacterData = async () => {
  let data = await notion.databases.query({
    database_id: process.env.NOTION_CHARACTERS_DB_ID ?? 'ERROR'
  })

  return { data }
}

const positions: Vector2[] = [
  { x: 72, y: 16 },
  { x: 60, y: 34 },
  { x: 85, y: 35 },
  { x: 65, y: 63 },
  { x: 81, y: 62 }
]

const shuffle = <E,>(array: Array<E>) => {
  let currentIndex: number = array.length

  while (currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }
}

const properties_map: Record<
  GROUPS,
  { bounding_box_id: number; start_pos: Vector2 }
> = {
  [GROUPS.VEGETABLES]: {
    bounding_box_id: 3,
    start_pos: { x: 72, y: 16 }
  },
  [GROUPS.GRAINS]: {
    bounding_box_id: 4,
    start_pos: { x: 60, y: 34 }
  },
  [GROUPS.DAIRY]: {
    bounding_box_id: 0,
    start_pos: { x: 85, y: 35 }
  },
  [GROUPS.MEAT]: {
    bounding_box_id: 1,
    start_pos: { x: 65, y: 63 }
  },
  [GROUPS.FRUIT]: {
    bounding_box_id: 2,
    start_pos: { x: 81, y: 62 }
  },
  [GROUPS.DEFAULT]: { bounding_box_id: 0, start_pos: ORIGIN_VECTOR2 },
  [GROUPS.NONE]: { bounding_box_id: 0, start_pos: ORIGIN_VECTOR2 }
}

const getFormatData = (data: QueryDatabaseResponse) => {
  const formattedData: FoodGroupCharacterImage[] = []

  // shuffle(positions) // Shuffle order for different food types.
  // iterate through each record in the character database
  data.results.forEach((characterRecord, i) => {
    const page = characterRecord as Extract<
      typeof characterRecord,
      { properties: {} }
    >

    const properties = page.properties

    if (
      properties.image.type === 'files' &&
      properties.image.files[0] !== undefined &&
      properties.image.files[0].type === 'file' &&
      properties.foodGroup.type === 'rich_text' &&
      properties.name.type === 'title'
    ) {
      if (properties.foodGroup.rich_text[0] === undefined) {
        // Melody Melon does not have a food type assigned.
        console.error(
          `[ ERROR ]: No food type for ${properties.name.title[0].plain_text}`
        )
        return
      }
      const characterFoodGroup: string =
        properties.foodGroup.rich_text[0].plain_text
      const defaultProperties = {
        name: properties.name.title[0].plain_text,
        img_src: properties.image.files[0].file.url
      }

      if (characterFoodGroup === 'Water') return // Ignore cool glass

      const type = notion_food_dict.get(characterFoodGroup)

      if (type === undefined) {
        console.error(
          `[ ERROR ]: Invalid food type for ${defaultProperties.name}. Got type ${type}`
        )
        return
      }

      formattedData.push({
        div_id: `${type}-character`,
        img_id: `${type}-character-img`,
        type: type,
        bounding_box_id: 0,
        start_pos: ORIGIN_VECTOR2, // FIXME: REMOVE
        // ...properties_map[type],
        ...defaultProperties
      })
    } else {
      console.error('[ ERROR ]: Bad type!')
    }
  })
  // console.log(formattedData)
  return formattedData
}

export { getCharacterData, getFormatData }
