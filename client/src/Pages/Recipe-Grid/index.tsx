import React from 'react'
import { Card } from 'Components/Recipe/List-View/Card'
import { RECIPES } from './recipes'
// import "./index.css"

const RecipesGridView: React.FC = () => {
  const recipeCards = RECIPES.map(recipe => {
    const { name, fileName, alt } = recipe
    return (
      <Card
        recipeTitle={name}
        image={'img/' + fileName}
        imageAltText={alt}
        color='Primary'
        key={name}
      />
    )
  })

  return (
    <div className='flex justify-center m-4'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10'>
        {recipeCards}
      </div>
    </div>
  )
}

export default RecipesGridView
