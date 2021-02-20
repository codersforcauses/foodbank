import React from 'react'
import { Card } from 'Components/Recipe/List-View/Card'
import { RECIPES } from './recipes'
// import "./index.css"

const RecipesGridView: React.FC = () => {
  const recipeCards = RECIPES.map((recipe) => {
    const {name, fileName, alt} = recipe
    return (
      <Card
        label={name}
        image={"img/" + fileName}
        text={alt}
        color='Primary'
        key={name}
      />
    )
  })

  return (
    <div className="flex justify-center">
    <div className="grid gap-8 grid-cols-4 w-11/12">
    {recipeCards}
    </div>
    </div>
  )
}

export default RecipesGridView
