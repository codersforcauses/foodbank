import React from 'react'
import Link from 'next/link'
import { Recipe } from 'lib/types'
import { primaryScheme } from '@lib/colorSchemes'

interface Props {
  recipe: Recipe
  toggleSliderModal: () => void
}

/** The buttons to navigate to the slideshow or one-page display recipe steps. */
const Buttons: React.FC<Props> = ({ recipe, toggleSliderModal }) => {
  const colorScheme = recipe.colorScheme ? recipe.colorScheme : primaryScheme

  return (
    <div className='flex flex-row space-x-2 items-center'>
      <Link
        href={{
          pathname: '/recipes/recipe/all-steps/',
          query: {
            name: recipe.slug
          }
        }}
        passHref
      >
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
      {/*<Link href={'/recipes/' + recipe.slug + '/slideshow'} passHref>*/}
      <button
        className={
          'w-48 my-4 py-2 px-4 rounded-full ' +
          colorScheme.buttonBg +
          ' ' +
          colorScheme.buttonText
        }
        onClick={toggleSliderModal}
      >
        Let&apos;s Cook
      </button>
      {/*</Link>*/}

      <a
        download
        href={`/pdfs/recipes/${recipe.name}.pdf`}
        className={
          'w-48 my-4 py-2 px-4 rounded-full text-center ' +
          colorScheme.buttonBg +
          ' ' +
          colorScheme.buttonText
        }
      >
        Download
      </a>
    </div>
  )
}

export default Buttons
