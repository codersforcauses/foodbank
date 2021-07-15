import React from 'react'
import { useRouter } from 'next/router'
import { Recipe } from 'lib/types'
import { recipes } from 'lib/Recipes'

import RecipeOverview from 'components/Recipe/Overview'

/**
 */
const RecipePage: React.FC = () => {
  const router = useRouter()
  const { slug } = router.query

  let recipe: Recipe | null = null

  for (const potential_recipe of recipes) {
    if (slug === potential_recipe.slug) {
      recipe = potential_recipe
    }
  }

  if (!recipe) {
    return <div>Recipe cannot be found!</div>
  } else {
    return (
      <>
        <RecipeOverview recipe={recipe} />
      </>
    )
  }
}

export default RecipePage
