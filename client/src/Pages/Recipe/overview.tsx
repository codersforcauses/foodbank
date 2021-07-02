import React from 'react'
import { useParams } from 'react-router'
import { Recipe } from 'lib/types'
import { recipes } from 'lib/Recipes'

import Buttons from 'Components/Recipe/Buttons'
import EquipmentList from 'Components/Recipe/EquipmentList'
import IngredientsList from 'Components/Recipe/IngredientsList'
import CategoryInfo from 'Components/Recipe/CategoryInfo'

interface ParamTypes {
  /** Slug which identifies recipe, used in the URL. */
  slug: string
}

/**
 * A page displaying an overview of a particular recipe as specified in the URL.
 * It includes information such as the recipe's category, tags, ingredients and
 * equipment. From here, a user can navigate to pages displaying the recipe's
 * steps in a slideshow or one page format.
 */
const RecipeOverview: React.FC = () => {
  const { slug } = useParams<ParamTypes>()

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
      <div
        className={
          'relative grid gap-4 grid-cols-1 sm:grid-cols-2 p-10 ' + colorScheme.bg
        }
      >
        <div>
          <h1
            className={
              'text-4xl underline font-semibold font-serif ' + colorScheme.header
            }
          >
            {recipe.name}
          </h1>
          <CategoryInfo recipe={recipe} />
          <IngredientsList recipe={recipe} />
          <EquipmentList recipe={recipe} />
          <Buttons recipe={recipe} />
        </div>
        <div>
          <img
            className='relative w-4/5 rounded-3xl'
            src={recipe.finalShot}
            alt={recipe.name}
          />
        </div>
      </div>
    )
  }
}

export default RecipeOverview
