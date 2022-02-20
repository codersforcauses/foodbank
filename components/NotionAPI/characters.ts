import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { getColVal, getTitle } from './general'
import { connectFirestoreEmulator } from 'firebase/firestore'

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

/** Get character information identified by its slug. */
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
    if (!('properties' in result)) {
      // This is an empty database row.
      return
    }
    const name = getTitle(result, 'name')
    const about = getColVal(result, 'about', name)
    const aliasImage = getColVal(result, 'aliasImage', name)
    const aliasName = getColVal(result, 'aliasName', name)
    const facing = getColVal(result, 'facing', name)
    const everydayLikes = getColVal(result, 'everydayLikes', name)
    const foodGroup = getColVal(result, 'foodGroup', name)
    const heroLikes = getColVal(result, 'heroLikes', name)
    const heroUse = getColVal(result, 'heroUse', name)
    const image = getColVal(result, 'image', name)
    const imageGif = getColVal(result, 'imageGif', name)
    const location = getColVal(result, 'location', name)
    const nameSlug = getColVal(result, 'nameSlug', name)
    const recipes = getColVal(result, 'recipes', name)
    const superpowers = getColVal(result, 'superpowers', name)
    return {
      about: about,
      aliasImage: aliasImage,
      aliasName: aliasName,
      facing: facing,
      foodGroup: foodGroup,
      image: image,
      imageGif: imageGif,
      location: location,
      name: name,
      slug: nameSlug,
      superpowers: superpowers,
      heroUse: heroUse,
      heroLikes: heroLikes,
      everydayLikes: everydayLikes,
      recipes: recipes
    }
  })
  return formattedCharData
}

export { getCharsFromTown, getCharsProfile }
