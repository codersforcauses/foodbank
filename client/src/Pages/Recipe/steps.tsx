import React from 'react'
import { useParams } from 'react-router'
import RecipeStepsTab from 'Components/RecipeStepTab'
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
            <RecipeStepsTab key={step.number} step={step} />
          ))
        : slug === sportyBananaBites.slug
        ? sportyBananaBites.steps.map(step => (
            <RecipeStepsTab key={step.number} step={step} />
          ))
        : slug === superSonicDip.slug
        ? superSonicDip.steps.map(step => (
            <RecipeStepsTab key={step.number} step={step} />
          ))
        : 'Recipe cannot be found!'}
    </div>
  )
}

export default RecipeSteps
