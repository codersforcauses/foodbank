import { getColVal, getTitle } from './general'
import notion from './initNotion'

const getAllRecipes = async () => {
  let data = await notion.databases.query({
    database_id: process.env.NOTION_RECIPES_DB_ID ?? ''
  })

  const chars = await notion.databases.query({
    database_id: process.env.NOTION_CHARACTERS_DB_ID ?? ''
  })

  const getCharacterProps = (charId: String) => {
    const character = chars.results.filter(char => char.id == charId)
    if (!('properties' in character[0])) return {}
    const nameProp = character[0].properties?.name
    const aliasNameProp = character[0].properties?.aliasName
    const aboutProp = character[0].properties?.About
    const aliasImageProp = character[0].properties?.aliasImage
    const imageGifProp = character[0].properties?.imageGif
    const superPowersProp = character[0].properties?.superPowers
    const foodGroupProp = character[0].properties?.foodGroup
    const locationProp = character[0].properties?.location
    const facingProp = character[0].properties?.facing
    return {
      name: nameProp?.type === 'title' ? nameProp.title[0].plain_text : '',
      aliasName:
        aliasNameProp?.type === 'rich_text'
          ? aliasNameProp.rich_text[0].plain_text
          : '',
      about:
        aboutProp?.type === 'rich_text'
          ? aboutProp.rich_text[0].plain_text
          : '',
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
        facingProp?.type === 'rich_text'
          ? facingProp.rich_text[0].plain_text
          : ''
    }
  }

  const recipes = data.results.map(recipe => {
    if (!('properties' in recipe)) return {}
    const name = getTitle(recipe, 'Recipe')
    const category = getColVal(recipe, 'Category', name)
    const characterId = getColVal(recipe, 'characterId', name)
    const colorScheme = getColVal(recipe, 'colorScheme', name)
    const equipment = getColVal(recipe, 'Equipment', name)
    const equipmentImg = getColVal(recipe, 'equipmentImg', name)
    const finalShot = getColVal(recipe, 'finalShot', name)
    const hint = getColVal(recipe, 'hint', name, true)
    const ingredients = getColVal(recipe, 'ingredients', name)
    const ingredientsImg = getColVal(recipe, 'ingredientsImg', name)
    const slug = getColVal(recipe, 'slug', name)
    const tags = getColVal(recipe, 'Tags', name)
    return {
      name: name,
      category: category,
      character: getCharacterProps(characterId),
      characterId: characterId,
      colorScheme: colorScheme,
      equipment: equipment,
      equipmentImg: equipmentImg,
      finalShot: finalShot,
      hint: hint,
      ingredients: ingredients,
      ingredientsImg: ingredientsImg,
      page_id: recipe.id,
      slug: slug,
      tags: tags
    }
  })

  return { recipes }
}

export default getAllRecipes
