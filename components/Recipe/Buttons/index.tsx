import React from 'react'
import Link from 'next/link'
import { Recipe } from 'lib/types'

interface Props {
  recipe: Recipe
}

/** The buttons to navigate to the slideshow or one-page display recipe steps. */
const Buttons: React.FC<Props> = ({ recipe }) => {
  const colorScheme = recipe.colorScheme
  return (
    <div className='flex flex-row space-x-2 items-center'>
      <Link href={'/recipes/' + recipe.slug + '/all-steps'} passHref>
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
      <Link href={'/recipes/' + recipe.slug + '/slideshow'} passHref>
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
