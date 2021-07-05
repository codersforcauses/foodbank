import React from 'react'
import {Card} from 'components/Recipe/List-View/Card'
import {recipes} from 'lib/Recipes'

// import "./index.css"

const RecipesGridView: React.FC = () => {
  const recipeCards = recipes.map((recipe) => {
    const {name, slug, finalShot, character} = recipe

    return (
      <Card
        label={name}
        image={finalShot}
        text={name}
        color='Primary'
        key={name}
        slug={slug}
        character={character}
      />
    )
  })

  return (
    <div
      className="flex justify-center m-3">
      <div
        className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-20">
        {recipeCards}
      </div>
    </div>
  )
}

export default RecipesGridView
