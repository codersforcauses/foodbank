import React from 'react'
import { useParams } from 'react-router'
import RecipeOverviewTab from 'Components/RecipeOverviewTab'
import { kPowFritters, sportyBananaBites, superSonicDip } from 'lib/Recipes'

interface ParamTypes {
  slug: string
}

const RecipeOverview: React.FC = () => {
  const { slug } = useParams<ParamTypes>()

  if (slug === kPowFritters.slug) {
    return <RecipeOverviewTab recipe={kPowFritters} />
  } else if (slug === sportyBananaBites.slug) {
    return <RecipeOverviewTab recipe={sportyBananaBites} />
  } else if (slug === superSonicDip.slug) {
    return <RecipeOverviewTab recipe={superSonicDip} />
  } else {
    return <div>Recipe cannot be found!</div>
  }
}

export default RecipeOverview
