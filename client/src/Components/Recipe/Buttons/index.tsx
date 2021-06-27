import React from 'react'
import { Link } from 'react-router-dom'
import { Recipe } from 'lib/types'

interface Props {
  recipe: Recipe
}

/** The buttons to navigate to the slideshow or one-page display recipe steps. */
const Buttons: React.FC<Props> = ({ recipe }) => {
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

export default Buttons
