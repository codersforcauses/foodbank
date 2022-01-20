import { Client } from "@notionhq/client";




const getCharacterImages = async () => {

  const notion = new Client({
    auth: process.env.NOTION_API_KEY
  });
  
  const chars = await notion.databases.query({
    database_id: process.env.NOTION_CHARACTERS_DB_ID
  })

  const getCharacterProps = (charId: String) => {
    let character = chars.results.filter(char => char.id == charId)
    return {
      name: character[0].properties.name.title[0].plain_text,
      aliasName: character[0].properties.aliasName.rich_text[0].plain_text,
      about: character[0].properties.About.rich_text[0].plain_text,
      aliasImage: character[0].properties.aliasImage.files[0].file.url,
      imageGif: character[0].properties.imageGif.files[0].file.url,
      superPowers: character[0].properties.superPowers.rich_text[0].plain_text,
      foodGroup: character[0].properties.foodGroup.rich_text[0].plain_text,
      location: character[0].properties.location.multi_select.map(item => item.name),
      facing: character[0].properties.facing.rich_text[0].plain_text
    }
  }
  
  
  return { getCharacterProps }
}

export const getServerSideProps = async (context: {
  query: { tag: string }
}) => {
  
  const { recipes } = await getCharacterImages()
  
  if (!context.query.tag) {
    return {
      props: {
        tag: 'all', //pass it to the page props
        recipes,
      }
    }
  }
  return {
    props: {
      tag: context.query.tag, //pass it to the page props
      recipes,
    }
  }
}
// const getRecipeDetails = async (slug: string) =>  {
//   const recipe_data = await notion.databases.query({
//     database_id: process.env.NOTION_RECIPES_DB_ID,
//     filter: {
//       property: "slug",
//       rich_text: {
//         equals: slug
//       }
//     }
//   })

//   const recipe_page = await notion.blocks.children.list({
//     block_id: recipe_data.results[0].id,
//   })
  
//   const steps_db = await notion.databases.query({
//     database_id: recipe_page.results[0].id
//   })
  
//   let steps:Array<RecipeStep> = []
  
//   steps_db.results.map(step => {
//     let data = {
//       number: step.properties.number.title[0].plain_text,
//       image: step.properties.image.files[0].file.url,
//       description: step.properties.description.rich_text[0].plain_text
//     }
//     steps.push(data)
//   })
  
//   steps.sort((a, b) => {
//     return a.number - b.number
//   })
  
//   const characterId = recipe_data.results[0].properties.characterId.relation[0].id
//   const character_data = await notion.pages.retrieve({
//     page_id: characterId
//   })
  
//   let character = {
//     name: character_data.properties.name.title[0].plain_text,
//     aliasName: character_data.properties.aliasName.rich_text[0].plain_text,
//     about: character_data.properties.About.rich_text[0].plain_text,
//     aliasImage: character_data.properties.aliasImage.files[0].file.url,
//     imageGif: character_data.properties.imageGif.files[0].file.url,
//     superPowers: character_data.properties.superPowers.rich_text[0].plain_text,
//     foodGroup: character_data.properties.foodGroup.rich_text[0].plain_text,
//     location: character_data.properties.location.multi_select.map(item => item.name),
//     facing: character_data.properties.facing.rich_text[0].plain_text
//   }
  
//   // recipe_data.character = character

//   let recipe = {
//     page_id: recipe_data.results[0].id,
//     name: recipe_data.results[0].properties.Recipe.title[0].plain_text,
//     category: recipe_data.results[0].properties.Category.multi_select.map(category => category.name),
//     tags: recipe_data.results[0].properties.Tags.multi_select.map(tag => tag.name),
//     equipment: recipe_data.results[0].properties.Equipment.multi_select.map(item => item.name),
//     ingredients: recipe_data.results[0].properties.ingredients.multi_select.map(item => item.name),
//     equipmentImg: recipe_data.results[0].properties.equipmentImg.files[0].file.url,
//     ingredientsImg: recipe_data.results[0].properties.ingredientsImg.files[0].file.url,
//     finalShot: recipe_data.results[0].properties.finalShot.files[0].file.url,
//     colorSchemeName: recipe_data.results[0].properties.colorScheme.rich_text[0].plain_text,
//     hint: recipe_data.results[0].properties.hint.rich_text[0] ? recipe_data.results[0].properties.hint.rich_text[0].plain_text : '',
//     slug: recipe_data.results[0].properties.slug.rich_text[0].plain_text,
//     character: character,
//     steps: steps
//   }
  
//   return { recipe, data: recipe_data, recipe_page, block1: steps_db}
// }

export { getCharacterImages }
