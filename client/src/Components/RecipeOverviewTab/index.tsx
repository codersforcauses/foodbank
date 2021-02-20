import React from 'react'
import { Link } from 'react-router-dom'
import { Recipe } from 'lib/types'

interface Props {
  recipe: Recipe
}

const RecipeOverview: React.FC<Props> = ({ recipe }: Props) => {
  const colorScheme = recipe.colorScheme

  return (
    <div
      className={
        'relative grid gap-4 grid-cols-1 sm:grid-cols-2 p-10 ' + colorScheme.bg
      }
    >
      <div>
        <h1
          className={
            'text-4xl underline font-semibold font-serif ' + colorScheme.header
          }
        >
          {recipe.name}
        </h1>
        <h2 className={'text-xl font-serif ' + colorScheme.header}>Category</h2>
        <p className={colorScheme.text}>{recipe.category}</p>
        <h2 className={'text-xl font-serif ' + colorScheme.header}>Tags</h2>
        <div className='flex flex-row flex-wrap'>
          {recipe.tags.map(tag => (
            <div
              key={tag}
              className='mr-3 my-0.5 px-4 rounded-3xl bg-light-grey text-sm'
            >
              {tag}
            </div>
          ))}
        </div>
        <div className='flex flex-row space-x-2'>
          <Link to={'/recipe/' + recipe.slug + '/all-steps'}>
            <button
              className={
                'w-48 mt-8 py-2 px-4 rounded-full ' +
                colorScheme.buttonBg +
                ' ' +
                colorScheme.buttonText
              }
            >
              View All Steps
            </button>
          </Link>
          <Link to={'/recipe/' + recipe.slug + '/slideshow'}>
            <button
              className={
                'w-48 mt-8 py-2 px-4 rounded-full ' +
                colorScheme.buttonBg +
                ' ' +
                colorScheme.buttonText
              }
            >
              View Slideshow
            </button>
          </Link>
        </div>
      </div>
      <img className='w-80 rounded' src={recipe.finalShot} alt={recipe.name} />
      <div>
        <h2 className={'text-2xl font-serif ' + colorScheme.header}>
          Ingredients
        </h2>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient} className={colorScheme.text}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={'text-2xl font-serif ' + colorScheme.header}>
          Equipment
        </h2>
        <ul>
          {recipe.equipment.map(equipment => (
            <li key={equipment} className={colorScheme.text}>
              {equipment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecipeOverview
