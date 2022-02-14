import { Client } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.NOTION_API_KEY
})

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

/** Nicely formats Notion Character DB response into an easy-to-access object. */
const formatCharData = (data: QueryDatabaseResponse) => {
  const formattedCharData = data.results.map(result => {
    if (!('properties' in result)) return
    const imageProp = result.properties.image
    const imageUrl =
      'files' in imageProp && 'file' in imageProp.files[0]
        ? imageProp.files[0].file.url
        : ''
    const locationProp = result.properties.location
    const locationSelect =
      'select' in locationProp ? locationProp.select?.name : ''
    const nameProp = result.properties.name
    const namePlainText =
      'title' in nameProp ? nameProp.title[0].plain_text : ''
    return { image: imageUrl, location: locationSelect, name: namePlainText }
  })
  return formattedCharData
}

export { getCharsFromTown }
