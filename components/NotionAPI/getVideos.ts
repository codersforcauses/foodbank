import notion from './initNotion'

const regex = /\?v=([^&]+)/

const getVideos = async () => {
  try {
    let data = await notion.databases.query({
      database_id: process.env.NOTION_VIDEOS_DB_ID ?? ''
    })

    const videos = data.results.map(result => {
      if (
        'properties' in result &&
        'url' in result.properties.youtubeURL &&
        'title' in result.properties.title
      ) {
        return {
          // @ts-ignore: Object is possibly 'null'. Don't know how to resolve this error, null coalescing does not work...
          youtubeVideoID: result.properties.youtubeURL.url.match(regex)[1], // extracts video id from URL
          title: result.properties.title.title[0].plain_text
        }
      } else throw new Error('Database schema error')
    })

    return videos
  } catch (e) {
    console.log(e)
    return null
  }
}

export default getVideos
