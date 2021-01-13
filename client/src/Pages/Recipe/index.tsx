import React from 'react'
import { useParams } from 'react-router'
import RecipeTab from 'Components/RecipeTab'
import { Recipe } from 'lib/types'
import breadSandwich from 'lib/mock/bread_sandwich.jpg'

interface ParamTypes {
  id: string
}

const RecipeOverview: React.FC = () => {
  const { id } = useParams<ParamTypes>()

  // retrieve the recipe using id from DB - STILL TO DO
  const mockRecipe: Recipe = {
    id: id,
    name: 'Bread Sandwich',
    relatedCharacters: ['Broccoli Girl', 'Banana Man'],
    ingredients: ['Bread', 'bread', 'breaD'],
    description: 'A simple lunchtime meal that will fill you up',
    image: breadSandwich
  }

  return (
    <div>
      <RecipeTab recipe={mockRecipe} />
    </div>
  )
}

export default RecipeOverview
