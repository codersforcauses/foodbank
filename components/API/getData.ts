import { Client } from "@notionhq/client";
import { Recipe } from "lib/types";


const notion = new Client({
  auth: process.env.NOTION_API_KEY
});

const getAllRecipes = async () => {
  
  const data = await notion.databases.query({
    database_id: process.env.NOTION_RECIPES_DB_ID
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

  const recipes = data.results.map(recipe => ({
    page_id: recipe.id,
    name: recipe.properties.Recipe.title[0].plain_text,
    category: recipe.properties.Category.multi_select.map(category => category.name),
    tags: recipe.properties.Tags.multi_select.map(tag => tag.name),
    equipment: recipe.properties.Equipment.multi_select.map(item => item.name),
    ingredients: recipe.properties.ingredients.multi_select.map(item => item.name),
    equipmentImg: recipe.properties.equipmentImg.files[0].file.url,
    ingredientsImg: recipe.properties.ingredientsImg.files[0].file.url,
    finalShot: recipe.properties.finalShot.files[0].file.url,
    colorScheme: recipe.properties.colorScheme.rich_text[0].plain_text,
    hint: recipe.properties.hint.rich_text[0] ? recipe.properties.hint.rich_text[0].plain_text : '',
    slug: recipe.properties.slug.rich_text[0].plain_text,
    character: getCharacterProps(recipe.properties.characterId.relation[0].id),
    characterId: recipe.properties.characterId.relation[0].id
  }));
  
  
  return { recipes }
}

const getRecipeDetails = async (slug: string) =>  {
  const recipe_data = await notion.databases.query({
    database_id: process.env.NOTION_RECIPES_DB_ID,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug
      }
    }
  })
  
  const characterId = recipe_data.results[0].properties.characterId.relation[0].id
  const character_data = await notion.pages.retrieve({
    page_id: characterId
  })
  
  let character = {
    name: character_data.properties.name.title[0].plain_text,
    aliasName: character_data.properties.aliasName.rich_text[0].plain_text,
    about: character_data.properties.About.rich_text[0].plain_text,
    aliasImage: character_data.properties.aliasImage.files[0].file.url,
    imageGif: character_data.properties.imageGif.files[0].file.url,
    superPowers: character_data.properties.superPowers.rich_text[0].plain_text,
    foodGroup: character_data.properties.foodGroup.rich_text[0].plain_text,
    location: character_data.properties.location.multi_select.map(item => item.name),
    facing: character_data.properties.facing.rich_text[0].plain_text
  }
  
  // recipe_data.character = character

  let recipe = {
    page_id: recipe_data.results[0].id,
    name: recipe_data.results[0].properties.Recipe.title[0].plain_text,
    category: recipe_data.results[0].properties.Category.multi_select.map(category => category.name),
    tags: recipe_data.results[0].properties.Tags.multi_select.map(tag => tag.name),
    equipment: recipe_data.results[0].properties.Equipment.multi_select.map(item => item.name),
    ingredients: recipe_data.results[0].properties.ingredients.multi_select.map(item => item.name),
    equipmentImg: recipe_data.results[0].properties.equipmentImg.files[0].file.url,
    ingredientsImg: recipe_data.results[0].properties.ingredientsImg.files[0].file.url,
    finalShot: recipe_data.results[0].properties.finalShot.files[0].file.url,
    colorSchemeName: recipe_data.results[0].properties.colorScheme.rich_text[0].plain_text,
    hint: recipe_data.results[0].properties.hint.rich_text[0] ? recipe_data.results[0].properties.hint.rich_text[0].plain_text : '',
    slug: recipe_data.results[0].properties.slug.rich_text[0].plain_text,
    character: character,
  }
  
  return { recipe }
}

export { getAllRecipes, getRecipeDetails }
