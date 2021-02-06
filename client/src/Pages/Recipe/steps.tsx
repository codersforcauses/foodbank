import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import RecipeStep from 'Components/RecipeStep'
import { kPowFritters, sportyBananaBites, superSonicDip } from 'lib/Recipes'

interface ParamTypes {
  slug: string
}

const RecipeSteps: React.FC = () => {
  const { slug } = useParams<ParamTypes>()
  const recipe =
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
          <RecipeStep key={step.number} step={step} colorScheme={colorScheme} />
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
