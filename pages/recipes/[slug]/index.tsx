import React from 'react'
import { getRecipeDetails } from '../../../components/API/getData'
import RecipeOverview from 'components/Recipe/Overview'

/**
 */
const RecipePage: React.FC = ({ recipe } ) => {

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

  const { recipe }  = await getRecipeDetails(context.query.name)
  
  return {
    props: {
      recipe
    }
  }
}

export default RecipePage
