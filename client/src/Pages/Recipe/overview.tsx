import React from 'react'
import { useParams } from 'react-router'
import RecipeTab from 'Components/RecipeTab'
import { kPowFritters, sportyBananaBites, superSonicDip } from 'lib/Recipes'

interface ParamTypes {
  slug: string
}

const RecipeOverview: React.FC = () => {
  const { slug } = useParams<ParamTypes>()

  if (slug === kPowFritters.slug) {
    return <RecipeTab recipe={kPowFritters} />
  } else if (slug === sportyBananaBites.slug) {
    return <RecipeTab recipe={sportyBananaBites} />
  } else if (slug === superSonicDip.slug) {
    return <RecipeTab recipe={superSonicDip} />
  } else {
    return <div>Recipe cannot be found!</div>
  }
}

export default RecipeOverview
