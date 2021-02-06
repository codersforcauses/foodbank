import React from 'react'
import { Link } from 'react-router-dom'
import { Recipe } from 'lib/types'

interface Props {
  recipe: Recipe
}

const RecipeTab: React.FC<Props> = ({ recipe }: Props) => {
  const bgColor = 'bg-' + recipe.bgColor
  const headColor = 'text-' + recipe.headColor
  const textColor = 'text-' + recipe.textColor
  const buttonColor = 'bg-' + recipe.headColor
  const buttonTextColor = 'text-' + recipe.buttonTextColor

  return (
    <div
      className={
        'relative grid gap-4 grid-cols-1 sm:grid-cols-2 p-10 ' + bgColor
      }
    >
      <div>
        <h1
          className={'text-4xl underline font-semibold font-serif ' + headColor}
        >
          {recipe.name}
        </h1>
        <h2 className={'text-xl font-serif ' + headColor}>Category</h2>
        <p className={textColor}>{recipe.category}</p>
        <h2 className={'text-xl font-serif ' + headColor}>Tags</h2>
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
        <Link to={'/recipe/' + recipe.slug + '/steps'}>
          <button
            className={
              'w-24 mt-8 py-2 px-4 rounded-full ' +
              buttonColor +
              ' ' +
              buttonTextColor
            }
          >
            To Recipe
          </button>
        </Link>
      </div>
      <img className='w-80 rounded' src={recipe.finalShot} alt={recipe.name} />
      <div>
        <h2 className={'text-2xl font-serif ' + headColor}>Ingredients</h2>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient} className={textColor}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={'text-2xl font-serif ' + headColor}>Equipment</h2>
        <ul>
          {recipe.equipment.map(equipment => (
            <li key={equipment} className={textColor}>
              {equipment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecipeTab
