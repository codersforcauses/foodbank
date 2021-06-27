import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { kPowFritters, sportyBananaBites, superSonicDip } from 'lib/Recipes'
import { Recipe } from 'lib/types'
import Step from 'Components/Recipe/Step'

interface ParamTypes {
  /** Slug which identifies recipe, used in the URL. */
  slug: string
}

/**
 * A page that displays all steps for a recipe in a single page format.
 */
const RecipeSteps: React.FC = () => {
  const { slug } = useParams<ParamTypes>()

  // Identify the recipe from the slug in the URL.
  const recipe: Recipe | null =
    slug === kPowFritters.slug
      ? kPowFritters
      : slug === sportyBananaBites.slug
      ? sportyBananaBites
      : slug === superSonicDip.slug
      ? superSonicDip
      : null

  if (!recipe) {
    return <div>Recipe cannot be found!</div>
  } else {
    const colorScheme = recipe.colorScheme
    return (
      <div className={'p-10 ' + colorScheme.bg}>
        <h1
          className={
            'text-4xl underline font-semibold font-serif ' + colorScheme.header
          }
        >
          Recipe Steps
        </h1>
        {recipe.steps.map(step => (
          <Step key={step.number} step={step} colorScheme={colorScheme} />
        ))}
        <Link to={'/recipe/' + recipe.slug + '/overview'}>
          <button
            className={
              'w-24 mt-8 py-2 px-4 rounded-full ' +
              [colorScheme.buttonBg, colorScheme.buttonText].join(' ')
            }
          >
            Back
          </button>
        </Link>
      </div>
    )
  }
}

export default RecipeSteps
