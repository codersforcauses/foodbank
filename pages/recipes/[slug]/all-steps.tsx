import React from 'react'
import Link  from 'next/link'
import { useRouter } from 'next/router'
import { recipes } from 'lib/Recipes'
import { Recipe } from 'lib/types'
import Step from 'components/Recipe/Step'

/**
 * A page that displays all steps for a recipe in a single page format.
 */
const RecipeSteps: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  let recipe: Recipe | null = null;

  for (const potential_recipe of recipes) {
    if (slug === potential_recipe.slug) {
      recipe = potential_recipe;
    }
  }

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
        <Link href={'/recipes/' + recipe.slug + '/overview'} passHref>
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
