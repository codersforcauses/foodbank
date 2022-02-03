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
  const buttonCSS = `${colorScheme.buttonBg} ${colorScheme.buttonText} w-48 my-4 py-2 px-4 rounded-full text-center text-xs md:text-base`

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
        <button className={buttonCSS}>View All Steps</button>
      </Link>
      <button className={buttonCSS} onClick={toggleSliderModal}>
        Let&apos;s Cook
      </button>
      {/*</Link>*/}

      <a
        className={buttonCSS}
        href={`/pdfs/recipes/${recipe.name}.pdf`}
        download
      >
        Download
      </a>
    </div>
  )
}

export default Buttons
