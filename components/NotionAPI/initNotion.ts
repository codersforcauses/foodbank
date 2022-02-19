import { Client } from '@notionhq/client'

if (process.env.NOTION_API_KEY === undefined) {
  console.error('[ FATAL ]: NO NOTION_API_KEY IN ENVIRONMENT VARIABLES')
  process.exit(1)
}
if (process.env.NOTION_CHARACTERS_DB_ID === undefined) {
  console.error(
    '[ FATAL ]: NO NOTION_CHARACTERS_DB_ID IN ENVIRONMENT VARIABLES'
  )
  process.exit(1)
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY
})

export default notion
