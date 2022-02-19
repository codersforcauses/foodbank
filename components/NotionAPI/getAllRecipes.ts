import notion from './initNotion'

const getAllRecipes = async () => {
  let data = await notion.databases.query({
    database_id: process.env.NOTION_RECIPES_DB_ID ?? ''
  })

  // pre filter the original data, making sure there's no entries with empty properties
  const filtered_data = data.results.filter(result => {
    if (!('properties' in result)) return
    const CategoryProp = result.properties?.Category
    const RecipeProp = result.properties?.Recipe
    const EquipmentProp = result.properties?.Equipment
    const characterIdProp = result.properties?.characterId
    const colorSchemeProp = result.properties?.colorScheme
    const equipmentImgProp = result.properties?.equipmentImg
    const finalShotProp = result.properties?.finalShot
    const ingredientsProp = result.properties?.ingredients
    const ingredientsImgProp = result.properties?.ingredientsImg
    const slugProp = result.properties?.slug
    return (
      (CategoryProp?.type === 'multi_select'
        ? CategoryProp.multi_select[0]
        : undefined) !== undefined &&
      (RecipeProp?.type === 'title'
        ? RecipeProp.title[0].plain_text
        : undefined) !== undefined &&
      (EquipmentProp?.type === 'multi_select'
        ? EquipmentProp.multi_select[0]
        : undefined) !== undefined &&
      (characterIdProp?.type === 'relation'
        ? characterIdProp.relation[0]
        : undefined) !== undefined &&
      (colorSchemeProp?.type === 'rich_text'
        ? colorSchemeProp.rich_text[0].plain_text
        : undefined) !== undefined &&
      (equipmentImgProp?.type === 'files'
        ? equipmentImgProp.files[0]
        : undefined) !== undefined &&
      (finalShotProp?.type === 'files' ? finalShotProp.files[0] : undefined) !==
        undefined &&
      (ingredientsProp?.type === 'multi_select'
        ? ingredientsProp.multi_select[0]
        : undefined) !== undefined &&
      (ingredientsImgProp?.type === 'files'
        ? ingredientsImgProp.files[0]
        : undefined) !== undefined &&
      (slugProp?.type === 'rich_text'
        ? slugProp.rich_text[0].plain_text
        : undefined) !== undefined
    )
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

  const recipes = filtered_data.map(recipe => {
    if (!('properties' in recipe)) return {}
    const nameProp = recipe.properties.Recipe
    const categoryProp = recipe.properties.Category
    const tagsProp = recipe.properties.Tags
    const equipmentProp = recipe.properties.Equipment
    const ingredientsProp = recipe.properties.ingredients
    const equipmentImgProp = recipe.properties.equipmentImg
    const ingredientsImgProp = recipe.properties.ingredientsImg
    const finalShotProp = recipe.properties.finalShot
    const colorSchemeProp = recipe.properties.colorScheme
    const hintProp = recipe.properties.hint
    const slugProp = recipe.properties.slug
    const characterIdProp = recipe.properties.characterId
    return {
      page_id: recipe.id,
      name: nameProp.type === 'title' ? nameProp.title[0].plain_text : '',
      category:
        categoryProp.type === 'multi_select'
          ? categoryProp.multi_select.map(category => category.name)
          : [],
      tags:
        tagsProp.type === 'multi_select'
          ? tagsProp.multi_select.map(tag => tag.name)
          : [],
      equipment:
        equipmentProp.type === 'multi_select'
          ? equipmentProp.multi_select.map(item => item.name)
          : [],
      ingredients:
        ingredientsProp.type === 'multi_select'
          ? ingredientsProp.multi_select.map(item => item.name)
          : [],
      equipmentImg:
        equipmentImgProp.type === 'files'
          ? equipmentImgProp.files[0].type === 'file'
            ? equipmentImgProp.files[0].file.url
            : ''
          : '',
      ingredientsImg:
        ingredientsImgProp.type === 'files'
          ? ingredientsImgProp.files[0].type === 'file'
            ? ingredientsImgProp.files[0].file.url
            : ''
          : '',
      finalShot:
        finalShotProp.type === 'files'
          ? finalShotProp.files[0].type === 'file'
            ? finalShotProp.files[0].file.url
            : ''
          : '',
      colorScheme:
        colorSchemeProp.type === 'rich_text'
          ? colorSchemeProp.rich_text[0].plain_text
          : '',
      hint:
        hintProp.type === 'rich_text'
          ? hintProp.rich_text[0]
            ? hintProp.rich_text[0].plain_text
            : ''
          : '',
      slug:
        slugProp.type === 'rich_text' ? slugProp.rich_text[0].plain_text : '',
      character: getCharacterProps(
        characterIdProp.type === 'relation'
          ? characterIdProp.relation[0].id
          : ''
      ),
      characterId:
        characterIdProp.type === 'relation'
          ? characterIdProp.relation[0].id
          : ''
    }
  })

  return { recipes }
}

export default getAllRecipes
