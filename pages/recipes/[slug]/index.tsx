import { Recipe } from 'lib/types'
import { getRecipeDetails } from 'components/API/getData'
import RecipeOverview from 'components/Recipe/Overview'

export interface RecipeProps {
  recipe: Recipe
  data?: any
}

const RecipePage = ({ recipe, data }: RecipeProps) => {
  // console.log("recipe page: ",recipe_page);
  // console.log("Block1: ",block1);

  if (!recipe) return <div>Recipe cannot be found!</div>

  return <RecipeOverview recipe={recipe} data={data} />
}

export const getServerSideProps = async (context: {
  query: { name: string }
}) => {
  // receiving recipe data from db by it's slug (name)
  const { recipe, data, recipe_page, block1 } = await getRecipeDetails(
    context.query.name
  )

  return {
    props: {
      recipe,
      data,
      recipe_page,
      block1
    }
  }
}

export default RecipePage
