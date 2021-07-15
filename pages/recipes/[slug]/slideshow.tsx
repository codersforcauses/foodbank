import { Carousel } from '@components/Custom'
import Image from 'next/image'
import { recipes } from 'lib/Recipes'
import { Recipe } from 'lib/types'

import { useRouter } from 'next/router'
import React, { useState } from 'react'

// to be deleted after it's used for recipes
const RecipeSlideShow: React.FC = () => {
  const router = useRouter()
  const { slug } = router.query

  let recipe: Recipe | null = null

  for (const potential_recipe of recipes) {
    if (slug === potential_recipe.slug) {
      recipe = potential_recipe
    }
  }

  if (!recipe) return <div> Error </div>

  return (
    <div className='flex justify-center align-center'>
      <Carousel
        controls
        indicators
        length={recipe.steps.length}
        className='h-72 w-96'
      >
        {recipe.steps.map((recipeStep, index) => (
          // make sure to declare a div as below with `keen-slider__slide` as a class for it to work properly
          <React.Fragment key={recipeStep.image}>
            <div> {recipeStep.description} </div>
            <div className='bg-opacity-25 bg-grey keen-slider__slide'>
              <Image
                src={recipeStep.image}
                alt={`image ${index}`}
                layout='fill'
              />
            </div>
          </React.Fragment>
        ))}
      </Carousel>
    </div>
  )
}

export default RecipeSlideShow
