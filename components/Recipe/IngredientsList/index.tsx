import React from 'react'
import { Recipe } from 'lib/types'
import Image from 'next/image'
import styles from 'components/Recipe/Overview/overview.module.css'

import imgFrameOne from 'public/images/Extra/img-frame-white-border.png'
import headerPlateOne from 'public/images/Extra/header-plate-1.png'

interface Props {
  recipe: Recipe
}

/**
 * Displays a list of required ingredients for a recipe along with an image.
 */
const IngredientsList: React.FC<Props> = ({ recipe }) => {
  const colorScheme = recipe.colorScheme
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center'>
        <img
          className={styles['header-plate'] + ' static'}
          src={headerPlateOne.src}
          alt='Ingredients'
        />
        <h1
          className={
            'static font-serif pb-8 ' +
            colorScheme.header +
            ' ' +
            styles['ingredients-header']
          }
        >
          Ingredients
        </h1>
      </div>
      <div className={'grid grid-cols-2 justify-items-center gap-12'}>
        <div
          className={
            styles['ingredients-text'] + ' pl-8 font-semibold font-serif'
          }
        >
          <ul>
            {recipe.ingredients.map(el => (
              <li key={el}>- {el}</li>
            ))}
          </ul>
        </div>

        <img
          className={'rounded-3xl self-center pr-8'}
          src={recipe.ingredientsImg}
          alt='equipment'
        />
      </div>
    </div>
  )
}

export default IngredientsList
