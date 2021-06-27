import React from 'react'
import { Link } from 'react-router-dom'
import { Recipe } from 'lib/types'

import EquipmentList from 'Components/Recipe/EquipmentList'
import IngredientsList from 'Components/Recipe/IngredientsList'

interface Props {
  recipe: Recipe
}

interface ButtonsProps {
  recipe: Recipe
}

const Buttons: React.FC<ButtonsProps> = ({ recipe }: ButtonsProps) => {
  const colorScheme = recipe.colorScheme
  return (
    <div className='flex flex-row space-x-2 items-center'>
      <Link to={'/recipe/' + recipe.slug + '/all-steps'}>
        <button
          className={
            'w-48 my-4 py-2 px-4 rounded-full ' +
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
            'w-48 my-4 py-2 px-4 rounded-full ' +
            colorScheme.buttonBg +
            ' ' +
            colorScheme.buttonText
          }
        >
          Let&apos;s Cook
        </button>
      </Link>
    </div>
  )
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
        <IngredientsList recipe={recipe} />
        <EquipmentList recipe={recipe} />
        <Buttons recipe={recipe} />
      </div>
      <div>
        <img
          className='fixed w-2/5 rounded-3xl'
          src={recipe.finalShot}
          alt={recipe.name}
        />
      </div>
    </div>
  )
}

export default RecipeOverview
