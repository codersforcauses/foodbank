import { Fragment } from 'react'
import Link from 'next/link'

import { orangeScheme, primaryScheme, tealScheme } from '@lib/colorSchemes'
import { Recipe } from '@lib/types'

import getRecipeDetails from '@components/NotionAPI/getRecipeDetails'
import Step from '@components/Recipe/Step'

interface RecipeStepsProps {
  recipe: Recipe
}

/**
 * A page that displays all steps for a recipe in a single page format.
 */
const RecipeSteps = ({ recipe }: RecipeStepsProps) => {
  // getting color scheme for the recipe by its name
  recipe.colorSchemeName === 'primaryScheme'
    ? (recipe.colorScheme = primaryScheme)
    : ''
  recipe.colorSchemeName === 'orangeScheme'
    ? (recipe.colorScheme = orangeScheme)
    : ''
  recipe.colorSchemeName === 'tealScheme'
    ? (recipe.colorScheme = tealScheme)
    : ''

  if (!recipe) {
    return <div>Recipe cannot be found!</div>
  } else {
    const colorScheme = recipe.colorScheme
    return (
      <div className={`${colorScheme?.bg} px-10 py-10 md:pt-20`}>
        <h1
          className={`${colorScheme?.header} text-4xl underline font-semibold font-serif`}
        >
          Recipe Steps
        </h1>
        {recipe.steps.map(step => (
          <Fragment key={step.number}>
            <Step step={step} colorScheme={colorScheme} />
          </Fragment>
        ))}
        <Link
          href={{
            pathname: '/recipes/recipe/',
            query: {
              name: recipe.slug
            }
          }}
          passHref
        >
          <button
            className={`${colorScheme?.buttonBg} ${colorScheme?.buttonText} w-24 mt-8 py-2 px-4 rounded-full`}
          >
            Back
          </button>
        </Link>
      </div>
    )
  }
}

export const getServerSideProps = async (context: {
  query: { name: string }
}) => {
  // receiving recipe data from db by it's slug (name)
  const { recipe } = await getRecipeDetails(context.query.name)

  return {
    props: {
      recipe
    }
  }
}

export default RecipeSteps
