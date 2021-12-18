import { Carousel } from '@components/Custom'
import { recipes } from 'lib/Recipes'
import { Recipe } from 'lib/types'
import styles from "./Slideshow.module.css";


import { useRouter } from 'next/router'
import Image from 'next/image'
import React, { useState } from 'react'

const RecipeSlideShow: React.FC = ({ recipe } ) => {

  if (!recipe) return <div> Error </div>
  return (
    <div
      className='flex justify-center items-center h-auto'
      // style={{ height: 'calc(100vh - 4rem)' }}
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
            key={`recipeStep_${index}`}
            className='keen-slider__slide flex flex-col md:flex-row justify-center flex-wrap h-full min-w-32'
          >
            <div className={styles['card-image-container'] + " flex justify-center"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={recipeStep.image}
                alt={`step ${index}`}
                className={styles.image }
                layout='fill'
              />
            </div>
            <div className='py-5 md:py-0 text-xl px-14 w-full min-w-32 flex justify-center items-center my-10'>
              {index + 1}. {recipeStep.description}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default RecipeSlideShow
