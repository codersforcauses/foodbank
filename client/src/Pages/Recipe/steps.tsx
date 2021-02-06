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

  return (
    <div className='p-10 bg-primary'>
      <h1 className='text-4xl underline font-semibold font-serif text-teal'>
        Recipe Steps
      </h1>
      {slug === kPowFritters.slug
        ? kPowFritters.steps.map(step => (
            <RecipeStep key={step.number} step={step} />
          ))
        : slug === sportyBananaBites.slug
        ? sportyBananaBites.steps.map(step => (
            <RecipeStep key={step.number} step={step} />
          ))
        : slug === superSonicDip.slug
        ? superSonicDip.steps.map(step => (
            <RecipeStep key={step.number} step={step} />
          ))
        : 'Recipe cannot be found!'}
      <Link to={'/recipe/' + slug + '/overview'}>
        <button className='w-24 mt-8 py-2 px-4 rounded-full bg-teal text-black'>
          Back
        </button>
      </Link>
    </div>
  )
}

export default RecipeSteps
