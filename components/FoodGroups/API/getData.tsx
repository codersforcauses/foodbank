import { Client } from '@notionhq/client'
import { FoodGroupCharacterImage } from '../Draggable/types'

import { notion_food_dict } from '../Draggable/characterimages'

import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

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

const getFormatData = (data: QueryDatabaseResponse) => {
  const formattedData: FoodGroupCharacterImage[] = []

  // iterate through each record in the character database
  data.results.forEach(characterRecord => {
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
        ...defaultProperties
      })
    } else {
      console.error('[ ERROR ]: Bad type!')
    }
  })
  return formattedData
}

export { getCharacterData, getFormatData }
