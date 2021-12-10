import React from 'react'
import { useRouter } from 'next/router'
import { Recipe } from 'lib/types'
// import { recipes } from 'lib/Recipes'
import getNotionData from '../../../components/API/getData'

import RecipeOverview from 'components/Recipe/Overview'

/**
 */
const RecipePage: React.FC = ({ recipes, chars } ) => {
  const router = useRouter()
  const { slug } = router.query



  console.log(recipes)
  console.log(chars)
  let recipe: Recipe | null = null

  for (const potential_recipe of recipes) {
    console.log(potential_recipe)
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
        {/*<h1>recipeeeee!</h1>*/}
      </>
    )
  }
}

export const getServerSideProps = async () => {

  const { recipes, chars } = await getNotionData()

  return {
    props: {
      recipes,
      chars
    }
  }
}

export default RecipePage
