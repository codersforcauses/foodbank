import { Recipe, RecipeStep } from '@lib/types'

import notion from './initNotion'

const getRecipeDetails = async (slug: string) => {
  const recipe_data = await notion.databases.query({
    database_id: process.env.NOTION_RECIPES_DB_ID ?? '',
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug
      }
    }
  })

  const recipe_page = await notion.blocks.children.list({
    block_id: recipe_data.results[0]?.id
  })

  const steps_db = await notion.databases.query({
    database_id: recipe_page.results[0]?.id
  })

  let steps: RecipeStep[] = []

  steps_db.results.map(step => {
    if (!('properties' in step)) return {}
    const numberProp = step.properties?.number
    const imageProp = step.properties?.image
    const descriptionProp = step.properties?.description
    const data = {
      number:
        numberProp?.type === 'title'
          ? Number(numberProp.title[0].plain_text)
          : 0,
      image:
        imageProp?.type === 'files'
          ? imageProp.files[0].type === 'file'
            ? imageProp.files[0].file.url
            : ''
          : '',
      description:
        descriptionProp?.type === 'rich_text'
          ? descriptionProp.rich_text[0].plain_text
          : ''
    }
    steps.push(data)
  })

  steps.sort((a, b) => {
    return a.number - b.number
  })

  if (!('properties' in recipe_data.results[0])) return {}
  const characterIdProp = recipe_data.results[0].properties?.characterId
  const characterId =
    characterIdProp?.type === 'relation' ? characterIdProp.relation[0].id : ''
  const character_data = await notion.pages.retrieve({
    page_id: characterId
  })
  if (!('properties' in character_data)) return {}
  const characterNameProp = character_data.properties?.name
  const aliasNameProp = character_data.properties?.aliasName
  const aboutProp = character_data.properties?.About
  const aliasImageProp = character_data.properties?.aliasImage
  const imageGifProp = character_data.properties?.imageGif
  const superPowersProp = character_data.properties?.superPowers
  const foodGroupProp = character_data.properties?.foodGroup
  const locationProp = character_data.properties?.location
  const facingProp = character_data.properties?.facing

  const character = {
    name:
      characterNameProp?.type === 'title'
        ? characterNameProp.title[0].plain_text
        : '',
    aliasName:
      aliasNameProp?.type === 'rich_text'
        ? aliasNameProp.rich_text[0].plain_text
        : '',
    about:
      aboutProp?.type === 'rich_text' ? aboutProp.rich_text[0].plain_text : '',
    aliasImage:
      aliasImageProp?.type === 'files'
        ? aliasImageProp.files[0].type === 'file'
          ? aliasImageProp.files[0].file.url
          : ''
        : '',
    imageGif:
      imageGifProp?.type === 'files'
        ? imageGifProp.files[0].type === 'file'
          ? imageGifProp.files[0].file.url
          : ''
        : '',
    superPowers:
      superPowersProp?.type === 'rich_text'
        ? superPowersProp.rich_text[0].plain_text
        : '',
    foodGroup:
      foodGroupProp?.type === 'rich_text'
        ? foodGroupProp.rich_text[0].plain_text
        : '',
    location:
      locationProp?.type === 'multi_select'
        ? locationProp.multi_select.map(item => item.name)
        : '',
    facing:
      facingProp?.type === 'rich_text' ? facingProp.rich_text[0].plain_text : ''
  }

  // recipe_data.character = character
  const recipeNameProp = recipe_data.results[0].properties?.Recipe
  const categoryProp = recipe_data.results[0].properties?.Category
  const tagsProp = recipe_data.results[0].properties?.Tags
  const equipmentProp = recipe_data.results[0].properties?.Equipment
  const ingredientsProp = recipe_data.results[0].properties?.ingredients
  const equipmentImgProp = recipe_data.results[0].properties?.equipmentImg
  const ingredientsImgProp = recipe_data.results[0].properties?.ingredientsImg
  const finalShotProp = recipe_data.results[0].properties?.finalShot
  const colorSchemeNameProp = recipe_data.results[0].properties?.colorScheme
  const hintProp = recipe_data.results[0].properties?.hint
  const slugProp = recipe_data.results[0].properties?.slug

  const recipe: Recipe = {
    page_id: recipe_data.results[0]?.id,
    name:
      recipeNameProp?.type === 'title'
        ? recipeNameProp.title[0].plain_text
        : '',
    category:
      categoryProp?.type === 'multi_select'
        ? categoryProp.multi_select.map(category => category.name)
        : [],
    tags:
      tagsProp?.type === 'multi_select'
        ? tagsProp.multi_select.map(tag => tag.name)
        : [],
    equipment:
      equipmentProp?.type === 'multi_select'
        ? equipmentProp.multi_select.map(item => item.name)
        : [],
    ingredients:
      ingredientsProp?.type === 'multi_select'
        ? ingredientsProp.multi_select.map(item => item.name)
        : [],
    equipmentImg:
      equipmentImgProp?.type === 'files'
        ? equipmentImgProp.files[0].type === 'file'
          ? equipmentImgProp.files[0].file.url
          : ''
        : '',
    ingredientsImg:
      ingredientsImgProp?.type === 'files'
        ? ingredientsImgProp.files[0].type === 'file'
          ? ingredientsImgProp.files[0].file.url
          : ''
        : '',
    finalShot:
      finalShotProp?.type === 'files'
        ? finalShotProp.files[0].type === 'file'
          ? finalShotProp.files[0].file.url
          : ''
        : '',
    colorSchemeName:
      colorSchemeNameProp?.type === 'rich_text'
        ? colorSchemeNameProp.rich_text[0].plain_text
        : '',
    hint:
      hintProp?.type === 'rich_text'
        ? hintProp.rich_text[0]
          ? hintProp.rich_text[0].plain_text
          : ''
        : '',
    slug:
      slugProp?.type === 'rich_text' ? slugProp.rich_text[0].plain_text : '',
    character: character,
    steps: steps
  }

  return { recipe, data: recipe_data, recipe_page, block1: steps_db }
}

export default getRecipeDetails
