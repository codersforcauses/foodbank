import React from 'react'
import { useParams } from 'react-router'
import RecipeTab from 'Components/RecipeTab'
import { superSonicDip } from 'lib/recipes'

interface ParamTypes {
  slug: string
}

const RecipeOverview: React.FC = () => {
  const { slug } = useParams<ParamTypes>()

  if (superSonicDip.slug === slug) {
    return <RecipeTab recipe={superSonicDip} />
  } else {
    return <div>Recipe cannot be found!</div>
  }
}

export default RecipeOverview
