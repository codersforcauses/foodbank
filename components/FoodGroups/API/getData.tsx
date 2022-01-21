import { Client } from "@notionhq/client";
import { FoodGroupCharacterImage } from "../Draggable/types";

import grain from 'public/images/Food Characters/Bread Mixed Grain.png'
import { notion_food_dict } from "../Draggable/characterimages";

import { DAIRY, FRUIT, GRAINS, MEAT, VEGETABLES } from '../groups'

const notion = new Client({
  auth: process.env.NOTION_API_KEY
});

const getCharacterData = async () => {
  
  let data = await notion.databases.query({
    database_id: process.env.NOTION_CHARACTERS_DB_ID ?? ''
  })

  return { data }

}

const getFormatData = (data: any) => {

  const formattedData: FoodGroupCharacterImage[] = []

  // iterate through each record in the character database, switch case for each foodgroup using notion_food_dict to obtain foodgroup
  data.results.forEach((characterRecord:any) => {
    if(characterRecord.properties.foodGroup.rich_text[0]?.text.content){
      const characterFoodGroup:string = characterRecord.properties.foodGroup.rich_text[0].text.content
      switch(notion_food_dict.get(characterFoodGroup)){
        case('vegetables'):
          formattedData.push(
            {
              div_id: 'vegetables-character',
              img_src: characterRecord.properties.image.files[0]?.file.url,
              img_id: 'vegetables-character-img',
              bounding_box_id: 3,
              type: VEGETABLES,
              start_pos: { x: 90, y: 60 }
            }
          )
        break;
        case('grain'):
          formattedData.push(
            {
              div_id: 'grain-character',
              img_src: characterRecord.properties.image.files[0]?.file.url,
              img_id: 'grain-character-img',
              bounding_box_id: 4,
              type: GRAINS,
              start_pos: { x: 90, y: 80 }
            }
          )
        break;
        case('dairy'):
        formattedData.push(
          {
            div_id: 'dairy-character',
            img_src: characterRecord.properties.image.files[0]?.file.url,
            img_id: 'dairy-character-img',
            bounding_box_id: 0,
            type: DAIRY,
            start_pos: { x: 90, y: 2 }
          }
        )
        break;
        case('meat'):
        formattedData.push(
          {
            div_id: 'meat-character',
            img_src: characterRecord.properties.image.files[0]?.file.url,
            img_id: 'meat-character-img',
            bounding_box_id: 1,
            type: MEAT,
            start_pos: { x: 90, y: 20 }
          }
        )
        break;
        case('fruit'):
        formattedData.push(
          {
            div_id: 'fruit-character',
            img_src: characterRecord.properties.image.files[0]?.file.url,
            img_id: 'fruit-character-img',
            bounding_box_id: 2,
            type: FRUIT,
            start_pos: { x: 90, y: 40 }
          }
        )
        break;
      }
    }
    
  })
  
  return formattedData
}

export { getCharacterData , getFormatData}
