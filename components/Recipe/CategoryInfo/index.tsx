import Link from 'next/link'

import { primaryScheme } from '@lib/colorSchemes'
import { Recipe } from '@lib/types'

interface Props {
  recipe: Recipe
}
/** Displays the category and tags for a recipe. */
const CategoryInfo = ({ recipe }: Props) => {
  const colorScheme = recipe.colorScheme ?? primaryScheme
  return (
    <div>
      <div className='flex flex-row flex-wrap justify-start gap-5 mt-5 mb-5'>
        <h2 className={`${colorScheme.header} text-2xl font-serif`}>
          Category:
        </h2>
        {recipe.category.map(el => {
          return (
            <div
              key={el}
              className='px-3 py-2 mr-1 rounded-3xl text-md bg-[rgba(206,207,203,1)]'
            >
              {el}
            </div>
          )
        })}
      </div>

      <div className='flex flex-row flex-wrap justify-start gap-3 mb-10'>
        <h2 className={`${colorScheme.header} text-2xl font-serif`}>Tags: </h2>
        {recipe.tags.map(tag => (
          <div
            key={tag}
            className='px-3 py-2 mr-1 rounded-3xl text-md bg-[rgba(206,207,203,1)]'
          >
            <Link
              href={{
                pathname: '/recipes',
                query: {
                  tag: tag
                }
              }}
            >
              <a>{tag}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryInfo
