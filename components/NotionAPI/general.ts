// This file contains useful functions for creating custom API functions that leverages Notion API.

/** Returns a column value of a Notion DB item/row identified by the column name.
 * Title of the item/row is needed for meaningful error messages (make sure to call `getTitle` before any calls to this function).
 * @param result - A result from a Notion DB query response.
 * @param colName - Name of the column to retrieve a value from.
 * @param title - Title of the database item to retrieve a value from.
 */
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

/** Returns the title of a Notion DB item/row.
 * @param result - A result from a Notion DB query response.
 * @param titleColName - The name of the title column.
 */
const getTitle = (result: any, titleColName: string): string => {
  const titleProp = result.properties[titleColName]
  if (titleProp.type !== 'title') throw new Error('Missing title.')
  return titleProp.title[0].plain_text
}

export { getColVal, getTitle }
