import React from 'react'
import { Recipe } from 'lib/types'

interface Props {
  recipe: Recipe
}

const RecipeTab: React.FC<Props> = ({ recipe }: Props) => {
  return (
    <div className='m-10 p-10 bg-purple rounded-xl'>
      <img className='float-right w-96' src={recipe.image} alt={recipe.name} />
      <h1 className='text-4xl text-teal font-black'>{recipe.name}</h1>
      <h3 className='text-2xl text-teal'>Related Characters</h3>
      <p className='text-white'>{recipe.relatedCharacters.join(', ')}</p>
      <h2 className='text-2xl text-teal'>Ingredients</h2>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient} className='text-white'>
            {ingredient}
          </li>
        ))}
      </ul>
      <h2 className='text-2xl text-teal'>Description</h2>
      <p className='text-white'>{recipe.description}</p>
      <br />
      <button className='py-2 px-4 bg-teal rounded-full text-white'>
        Back
      </button>
    </div>
  )
}

export default RecipeTab
