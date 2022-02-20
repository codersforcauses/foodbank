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
    const name = getTitle(result, 'name')
    const about = getPropVal(result, 'about', name)
    const aliasImage = getPropVal(result, 'aliasImage', name)
    const aliasName = getPropVal(result, 'name', name)
    const facing = getPropVal(result, 'facing', name)
    const everydayLikes = getPropVal(result, 'everydayLikes', name)
    const foodGroup = getPropVal(result, 'foodGroup', name)
    const heroLikes = getPropVal(result, 'heroLikes', name)
    const heroUse = getPropVal(result, 'heroUse', name)
    const image = getPropVal(result, 'image', name)
    const imageGif = getPropVal(result, 'imageGif', name)
    const location = getPropVal(result, 'location', name)
    const nameSlug = getPropVal(result, 'nameSlug', name)
    const recipes = getPropVal(result, 'recipes', name)
    const superpowers = getPropVal(result, 'superpowers', name)
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

const getTitle = (result: any, titlePropName: string): string => {
  const titleProp = result.properties[titlePropName]
  if (titleProp.type !== 'title') throw 'Missing title.'
  return titleProp.title[0].plain_text
}

const getPropVal = (result: any, propName: string, title: string): string => {
  if (!(propName in result.properties)) {
    throw new Error('Could not find property "' + propName + '".')
  }
  const prop = result.properties[propName]
  if (prop.type === 'files') {
    if (prop.files.length === 0) {
      throw new Error(
        'Database item "' +
          title +
          '" is missing a file in column "' +
          propName +
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
          propName +
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
          propName +
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
