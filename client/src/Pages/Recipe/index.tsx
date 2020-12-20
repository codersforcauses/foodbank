import React from 'react'
import { useParams } from 'react-router'
import { RecipeTab } from 'Components/RecipeTab'
import { Recipe } from 'lib/types'
import breadSandwich from 'lib/mock/bread_sandwich.jpg'

interface ParamTypes {
  id: string
}

const mockRecipe: Recipe = {
  name: 'Bread Sandwich',
  relatedCharacters: ['Broccoli Girl', 'Banana Man'],
  ingredients: ['Bread', 'Bread', 'Bread'],
  description: 'A simple lunchtime meal that will fill you up',
  image: breadSandwich
}

const RecipeOverview: React.FC = () => {
  const { id } = useParams<ParamTypes>()
  console.log(id)

  return (
    <div className=''>
      <RecipeTab recipe={mockRecipe} />
    </div>
  )
}

export default RecipeOverview
