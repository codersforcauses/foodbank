import React from 'react'
import { useParams } from 'react-router'
import { RecipeTab } from 'Components/RecipeTab'
import { Recipe } from 'lib/types'
import breadSandwich from 'lib/mock/bread_sandwich.jpg'

interface ParamTypes {
  id: string
}

const mockRecipe: Recipe = {
  id: 'bread-sandwich',
  name: 'Bread Sandwich',
  relatedCharacters: ['Broccoli Girl', 'Banana Man'],
  ingredients: ['Bread', 'bread', 'breaD'],
  description: 'A simple lunchtime meal that will fill you up',
  image: breadSandwich
}

const RecipeOverview: React.FC = () => {
  const { id } = useParams<ParamTypes>()
  console.log(id)

  // retrieve the recipe using id from DB - STILL TO DO
  const recipe = mockRecipe

  return (
    <div>
      <RecipeTab recipe={recipe} />
    </div>
  )
}

export default RecipeOverview
