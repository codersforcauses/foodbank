import React from 'react'
import { Recipe } from 'lib/types'

interface Props {
  recipe: Recipe
}

const RecipeTab: React.FC<Props> = ({ recipe }: Props) => {
  const bgcolor = 'bg-' + recipe.bgcolor
  const headcolor = 'text-' + recipe.headcolor
  const textcolor = 'text-' + recipe.textcolor
  const buttoncolor = 'bg-' + recipe.headcolor
  const buttontextcolor = 'text-' + recipe.buttontextcolor

  return (
    <div className={'relative grid gap-4 grid-cols-1 sm:grid-cols-2 m-10 p-10 rounded-xl ' + bgcolor}>
      <div>
        <h1 className={'text-4xl underline font-semibold font-serif ' + headcolor}>
          {recipe.name}
        </h1>
        <h3 className={'text-xl font-serif ' + headcolor}>Category</h3>
        <p className={textcolor}>{recipe.category}</p>
        <h3 className={'text-xl font-serif ' + headcolor}>Tags</h3>
        <div className='flex flex-row flex-wrap'>
          {recipe.tags.map(tag => (
            <div key={tag} className='mr-3 my-0.5 px-4 rounded-3xl bg-light-grey text-sm'>{tag}</div>
          ))}   
        </div>
        <button className={'w-24 mt-8 py-2 px-4 rounded-full ' + buttoncolor + ' ' + buttontextcolor}>To Recipe</button>
      </div>
      <img className='w-80' src={recipe.image} alt={recipe.name} />
      <div>
        <h2 className={'text-2xl font-serif ' + headcolor}>Ingredients</h2>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient} className={textcolor}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={'text-2xl font-serif ' + headcolor}>Equipment</h2>
        <ul>
          {recipe.equipment.map(equipment => (
            <li key={equipment} className={textcolor}>
              {equipment}
            </li>
          ))}
        </ul>
      </div>
      <button className='absolute -top-2 -right-2 p-1.5 w-9 bg-grey rounded-full'>X</button>
    </div>
  )
}

export default RecipeTab
