import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { recipes } from 'lib/Recipes'
import { Recipe } from 'lib/types'
import Step from 'components/Recipe/Step'
import { getRecipeDetails } from 'components/API/getData'
import { primaryScheme, tealScheme, orangeScheme } from 'lib/colorSchemes'

interface RecipeStepsProps {
  recipe: Recipe
}

/**
 * A page that displays all steps for a recipe in a single page format.
 */
const RecipeSteps = ({ recipe }: RecipeStepsProps) => {
  // const router = useRouter()
  // const { slug } = router.query
  //
  // let recipe: Recipe | null = null
  //
  // for (const potential_recipe of recipes) {
  //   if (slug === potential_recipe.slug) {
  //     recipe = potential_recipe
  //   }
  // }

  // getting color scheme for the recipe by it's name
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
      <div className={`${colorScheme?.bg} p-10`}>
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
