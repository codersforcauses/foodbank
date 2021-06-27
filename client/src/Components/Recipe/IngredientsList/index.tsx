import React from 'react'

import { Recipe } from 'lib/types'

interface Props {
  recipe: Recipe
}

/**
 * Displays a list of required ingredients for a recipe along with an image.
 */
const IngredientsList: React.FC<Props> = ({ recipe }) => {
  const colorScheme = recipe.colorScheme
  return (
    <div className='grid grid-cols-2 items-center mt-2'>
      <div className='my-2'>
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
      <img
        className='w-80 rounded-3xl'
        src={recipe.ingredientsImg}
        alt='equipment'
      />
    </div>
  )
}

export default IngredientsList
