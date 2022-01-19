import Link from 'next/link'
import { Recipe } from 'lib/types'
import { primaryScheme } from 'lib/colorSchemes'

interface Props {
  recipe: Recipe
  toggleSliderModal?: () => void
}

/** The buttons to navigate to the slideshow or one-page display recipe steps. */
const Buttons = ({ recipe, toggleSliderModal }: Props) => {
  const colorScheme = recipe.colorScheme ? recipe.colorScheme : primaryScheme

  return (
    <div className='flex flex-row items-center space-x-2'>
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
          className={`${colorScheme.buttonBg} ${colorScheme.buttonText} w-48 my-4 py-2 px-4 rounded-full`}
        >
          View All Steps
        </button>
      </Link>
      {/*<Link href={'/recipes/' + recipe.slug + '/slideshow'} passHref>*/}
      <button
        className={`${colorScheme.buttonBg} ${colorScheme.buttonText} w-48 my-4 py-2 px-4 rounded-full`}
        onClick={toggleSliderModal}
      >
        Let&apos;s Cook
      </button>
      {/*</Link>*/}

      <a
        className={`${colorScheme.buttonBg} ${colorScheme.buttonText} w-48 my-4 py-2 px-4 rounded-full text-center`}
        href={`/pdfs/recipes/${recipe.name}.pdf`}
        download
      >
        Download
      </a>
    </div>
  )
}

export default Buttons
