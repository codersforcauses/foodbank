import React from 'react'
import { useRouter } from 'next/router'
import { Recipe } from 'lib/types'
import Image from 'next/image'
import styles from 'components/Recipe/Overview/overview.module.css'

import starLabel from 'public/images/Extra/star_label.png'
import hintPlate from 'public/images/Extra/hint-plate.png'

import Buttons from 'components/Recipe/Buttons'
import EquipmentList from 'components/Recipe/EquipmentList'
import IngredientsList from 'components/Recipe/IngredientsList'
import CategoryInfo from 'components/Recipe/CategoryInfo'

interface ParamTypes {
  recipe: Recipe
}

/**
 * A page displaying an overview of a particular recipe as specified in the URL.
 * It includes information such as the recipe's category, tags, ingredients and
 * equipment. From here, a user can navigate to pages displaying the recipe's
 * steps in a slideshow or one page format.
 */
const RecipeOverview: React.FC = ({ recipe }) => {
  // console.log(recipe.hint)
  // console.log(styles['recipe-name'])
  return (
    <div className={recipe.colorScheme.bg}>
      <div className='flex justify-center m-1'>
        <div className='flex flex-col w-3/4'>
          <div
            className={
              styles['image-container'] +
              ' w-full ' +
              styles['recipe-main-image']
            }
          >
            <Image
              src={recipe.finalShot.src}
              alt={recipe.name}
              layout='fill'
              className={styles['image']}
            />
          </div>
          <div className={styles['label-main-image'] + ' absolute'}>
            <img src={starLabel.src} alt='label'></img>
            <div
              className={
                styles['recipe-name'] + ' absolute font-semibold font-serif'
              }
            >
              {recipe.name.split(' ').map((el: string | null | undefined) => {
                return <p key={el}>{el}</p>
              })}
            </div>
          </div>
          {recipe.character && (
            <div
              className={
                styles['hero-image-container'] +
                ` ${
                  recipe.character.facing === 'left'
                    ? styles['flip-hero-image']
                    : ''
                }`
              }
            >
              <Image
                src={recipe.character.imageGif}
                alt='label'
                layout='fill'
                className={styles['image']}
              ></Image>
            </div>
          )}
          {recipe.hint && (
            <div className='flex'>
              <div className={styles['tip-plate-container']}>
                <Image
                  src={hintPlate.src}
                  alt='hint'
                  layout='fill'
                  className={styles.image}
                ></Image>
                <div
                  className={
                    styles['hint-text'] + ' absolute font-semibold font-serif'
                  }
                >
                  {recipe.hint}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center m-1 w-full'>
        <div className={styles['recipe-main-content'] + ' flex flex-col'}>
          <div>
            <CategoryInfo recipe={recipe} />
          </div>
          <div>
            <IngredientsList recipe={recipe} />
          </div>
          <div>
            <EquipmentList recipe={recipe} />
          </div>
          <div>
            <Buttons recipe={recipe} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeOverview
