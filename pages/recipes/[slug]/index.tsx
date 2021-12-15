import React from 'react'
import { Recipe } from "lib/types";
import { getRecipeDetails } from '../../../components/API/getData'
import RecipeOverview from 'components/Recipe/Overview'

export interface RecipeProps {
  recipe: Recipe;
}

const RecipePage:React.FC<RecipeProps> = ({ recipe }) => {

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

export const getServerSideProps = async (context: {
  query: { name: string }
}) => {
  
  // receiving recipe data from db by it's slug (name)
  const { recipe }  = await getRecipeDetails(context.query.name)
  
  return {
    props: {
      recipe
    }
  }
}

export default RecipePage
