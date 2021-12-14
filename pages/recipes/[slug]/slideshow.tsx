import { Carousel } from '@components/Custom'
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
    <div
      className='flex justify-center items-center bg-orange'
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      <Carousel
        controls
        indicators
        length={recipe.steps.length}
        className='h-full'
      >
        {recipe.steps.map((recipeStep, index) => (
          // make sure to declare a div as below with `keen-slider__slide` as a class for it to work properly
          <div
            key={recipeStep.image.src}
            className='keen-slider__slide flex flex-col md:flex-row justify-center flex-wrap h-full min-w-32'
          >
            <div className='w-full lg:w-1/2 flex justify-center'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={recipeStep.image.src}
                alt={`step ${index}`}
                className='object-scale-down bg-contain'
              />
            </div>
            <div className='py-5 md:py-0 text-xl px-14 w-full lg:w-1/2 min-w-32 flex justify-center items-center'>
              {recipeStep.description}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default RecipeSlideShow
