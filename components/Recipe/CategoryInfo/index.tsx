import React from 'react'
import { Recipe, ColorScheme } from 'lib/types'
import Link from 'next/link'
import { primaryScheme } from '@lib/colorSchemes'


interface Props {
  recipe: Recipe
}
const tagStyle = {
  backgroundColor: 'rgba(206,207,203,var(--tw-bg-opacity))',
  '--tw-bg-opacity': 1
}

const textStyle = ' mr-1 px-3 py-2 rounded-3xl text-md'

/** Displays the category and tags for a recipe. */
const CategoryInfo: React.FC<Props> = ({ recipe }) => {
  const colorScheme = recipe.colorScheme ?? primaryScheme
  return (
    <div>
      <div className='flex flex-row flex-wrap justify-start gap-5 mt-5 mb-5'>
        <h2 className={'text-2xl font-serif ' + colorScheme.header}>
          Category:
        </h2>
        {recipe.category.map(el => {
          return (
            <div className={textStyle} style={tagStyle} key={el}>
              {el}
            </div>
          )
        })}
      </div>

      <div className='flex flex-row flex-wrap justify-start gap-3 mb-10'>
        <h2 className={'text-2xl font-serif ' + colorScheme.header}>Tags: </h2>
        {recipe.tags.map(tag => (
          <div key={tag} className={textStyle} style={tagStyle}>
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
