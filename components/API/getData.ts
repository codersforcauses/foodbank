import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_KEY
})

const regex = /\?v=([^&]+)/

const getVideos = async () => {
  try {
    let data = await notion.databases.query({
      database_id: process.env.NOTION_VIDEOS_DB_ID ?? ''
    })

    const videos = data.results.map(result => {
      const details = result.properties
      return {
        youtubeVideoID: details.youtubeURL.url.match(regex)[1], // extracts video id from URL
        title: details.title.title[0].plain_text
      }
    })

    return videos
  } catch (e) {
    console.log(e)
    return null
  }
}

export { getVideos }
