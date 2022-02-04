import { Client } from '@notionhq/client'
import { FoodGroupCharacterImage } from '../Draggable/types'

import { notion_food_dict } from '../Draggable/characterimages'

import { GROUPS } from '../groups'

if (process.env.NOTION_API_KEY === undefined) {
  console.log('[ FATAL ]: NO NOTION_API_KEY IN ENVIRONMENT VARIABLES')
  process.exit(1)
}
if (process.env.NOTION_CHARACTERS_DB_ID === undefined) {
  console.log('[ FATAL ]: NO NOTION_CHARACTERS_DB_ID IN ENVIRONMENT VARIABLES')
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

const getFormatData = (data: any) => {
  const formattedData: FoodGroupCharacterImage[] = []

  // iterate through each record in the character database, switch case for each foodgroup using notion_food_dict to obtain foodgroup
  data.results.forEach((characterRecord: any) => {
    if (characterRecord.properties.foodGroup.rich_text[0]?.text.content) {
      const characterFoodGroup: string =
        characterRecord.properties.foodGroup.rich_text[0].text.content
      switch (notion_food_dict.get(characterFoodGroup)) {
        case 'vegetables':
          formattedData.push({
            div_id: 'vegetables-character',
            img_src: characterRecord.properties.image.files[0]?.file.url,
            img_id: 'vegetables-character-img',
            bounding_box_id: 3,
            type: GROUPS.VEGETABLES,
            start_pos: { x: 72, y: 16 }
          })
          break
        case 'grain':
          formattedData.push({
            div_id: 'grain-character',
            img_src: characterRecord.properties.image.files[0]?.file.url,
            img_id: 'grain-character-img',
            bounding_box_id: 4,
            type: GROUPS.GRAINS,
            start_pos: { x: 60, y: 34 }
          })
          break
        case 'dairy':
          formattedData.push({
            div_id: 'dairy-character',
            img_src: characterRecord.properties.image.files[0]?.file.url,
            img_id: 'dairy-character-img',
            bounding_box_id: 0,
            type: GROUPS.DAIRY,
            start_pos: { x: 85, y: 35 }
          })
          break
        case 'meat':
          formattedData.push({
            div_id: 'meat-character',
            img_src: characterRecord.properties.image.files[0]?.file.url,
            img_id: 'meat-character-img',
            bounding_box_id: 1,
            type: GROUPS.MEAT,
            start_pos: { x: 65, y: 63 }
          })
          break
        case 'fruit':
          formattedData.push({
            div_id: 'fruit-character',
            img_src: characterRecord.properties.image.files[0]?.file.url,
            img_id: 'fruit-character-img',
            bounding_box_id: 2,
            type: GROUPS.FRUIT,
            start_pos: { x: 81, y: 62 }
          })
          break
      }
    }
  })

  return formattedData
}

export { getCharacterData, getFormatData }
