import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
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
    const aliasName = getColVal(result, 'name', name)
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

/** Returns the title of a Notion DB item/row. */
const getTitle = (result: any, titlecolName: string): string => {
  const titleProp = result.properties[titlecolName]
  if (titleProp.type !== 'title') throw new Error('Missing title.')
  return titleProp.title[0].plain_text
}

/** Returns a column value of a Notion DB item/row identified by the column name. Title of the item/row is needed for meaningful error messages (make sure to call `getTitle` before any calls to this function).*/
const getColVal = (result: any, colName: string, title: string): string => {
  if (!(colName in result.properties)) {
    throw new Error('Could not find property "' + colName + '".')
  }
  const prop = result.properties[colName]
  if (prop.type === 'files') {
    if (prop.files.length === 0) {
      throw new Error(
        'Database item "' +
          title +
          '" is missing a file in column "' +
          colName +
          '".'
      )
    }
    return prop.files[0].file.url
  } else if (prop.type === 'rich_text') {
    if (prop.rich_text.length === 0) {
      throw new Error(
        'Database item "' +
          title +
          '" is missing text in column "' +
          colName +
          '".'
      )
    }
    return prop.rich_text[0].plain_text
  } else if (prop.type === 'select') {
    if (!prop.select) {
      throw new Error(
        'Database item "' +
          title +
          '" is missing select value in column "' +
          colName +
          '".'
      )
    }
    return prop.select.name
  } else {
    throw new Error(
      'This function cannot handle property of type "' + prop.type + '".'
    )
  }
}

export { getCharsFromTown, getCharsProfile }
