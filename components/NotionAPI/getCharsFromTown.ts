import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

import notion from './initNotion'

/** Get characters from a particular town from the Notion DB, based on town slug. */
const getCharsFromTown = async (town: string) => {
  let data = await notion.databases.query({
    database_id: process.env.NOTION_CHARACTERS_DB_ID ?? '',
    filter: {
      property: 'location',
      select: {
        equals: town
      }
    }
  })

  const chars = formatCharData(data)

  return chars
}

const getCharsProfile = async (characterSlug: string) => {
  let data = await notion.databases.query({
    database_id: process.env.NOTION_CHARACTERS_DB_ID ?? '',
    filter: {
      property: 'nameSlug',
      rich_text: {
        equals: characterSlug
      }
    }
  })

  const char = formatCharData(data)[0]

  return char
}

/** Nicely formats Notion Character DB response into an easy-to-access object. */
const formatCharData = (data: QueryDatabaseResponse) => {
  const formattedCharData = data.results.map(result => {
    if (!('properties' in result)) return
    const aboutProp = result.properties.about
    const aboutPlainText =
      'rich_text' in aboutProp ? aboutProp.rich_text[0].plain_text : ''
    const aliasImageProp = result.properties.aliasImage
    const aliasImageUrl =
      'files' in aliasImageProp && 'file' in aliasImageProp.files[0]
        ? aliasImageProp.files[0].file.url
        : ''
    const aliasNameProp = result.properties.aliasName
    const aliasNamePlainText =
      'rich_text' in aliasNameProp ? aliasNameProp.rich_text[0].plain_text : ''
    const facingProp = result.properties.facing
    const facingPlainText =
      'rich_text' in facingProp ? facingProp.rich_text[0].plain_text : ''
    const foodGroupProp = result.properties.foodGroup
    const foodGroupPlainText =
      'rich_text' in foodGroupProp ? foodGroupProp.rich_text[0].plain_text : ''
    const imageProp = result.properties.image
    const imageUrl =
      'files' in imageProp && 'file' in imageProp.files[0]
        ? imageProp.files[0].file.url
        : ''
    const imageGifProp = result.properties.imageGif
    const imageGifUrl =
      'files' in imageGifProp && 'file' in imageGifProp.files[0]
        ? imageGifProp.files[0].file.url
        : ''
    const locationProp = result.properties.location
    const locationSelect =
      'select' in locationProp ? locationProp.select?.name : ''
    const nameProp = result.properties.name
    const namePlainText =
      'title' in nameProp ? nameProp.title[0].plain_text : ''
    const nameSlugProp = result.properties.nameSlug
    const nameSlugPlainText =
      'rich_text' in nameSlugProp ? nameSlugProp.rich_text[0].plain_text : ''
    const superpowersProp = result.properties.superpowers
    const superpowersPlainText =
      'rich_text' in superpowersProp
        ? superpowersProp.rich_text[0].plain_text
        : ''
    const heroUseProp = result.properties.heroUse
    const heroUsePlainText =
      'rich_text' in heroUseProp ? heroUseProp.rich_text[0].plain_text : ''
    const heroLikesProps = result.properties.heroLikes
    const heroLikesPlainText =
      'rich_text' in heroLikesProps
        ? heroLikesProps.rich_text[0].plain_text
        : ''
    const everydayLikesProps = result.properties.everydayLikes
    const everydayLikesPlainText =
      'rich_text' in everydayLikesProps
        ? everydayLikesProps.rich_text[0].plain_text
        : ''
    const recipesProps = result.properties.recipes
    const recipesPlainText =
      'rich_text' in recipesProps ? recipesProps.rich_text[0].plain_text : ''

    return {
      about: aboutPlainText,
      aliasImage: aliasImageUrl,
      aliasName: aliasNamePlainText,
      facing: facingPlainText,
      foodGroup: foodGroupPlainText,
      image: imageUrl,
      imageGif: imageGifUrl,
      location: locationSelect,
      name: namePlainText,
      slug: nameSlugPlainText,
      superpowers: superpowersPlainText,
      heroUse: heroUsePlainText,
      heroLikes: heroLikesPlainText,
      everydayLikes: everydayLikesPlainText,
      recipes: recipesPlainText
    }
  })
  return formattedCharData
}

export { getCharsFromTown, getCharsProfile }
