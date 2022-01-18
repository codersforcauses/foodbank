import React, { useEffect, useState } from 'react'
import { Recipe } from 'lib/types'
import Image from 'next/image'
import Modal from 'components/Custom/Modal'
import styles from 'components/Recipe/Overview/overview.module.css'
import { Breakpoints } from 'lib/types'

import starLabel from 'public/images/Extra/star_label.png'
import hintPlate from 'public/images/Extra/hint-plate.png'

import Slideshow from 'pages/recipes/[slug]/slideshow'
import RecipeSteps from 'pages/recipes/[slug]/all-steps'
import Buttons from 'components/Recipe/Buttons'
import EquipmentList from 'components/Recipe/EquipmentList'
import IngredientsList from 'components/Recipe/IngredientsList'
import CategoryInfo from 'components/Recipe/CategoryInfo'
import { primaryScheme, tealScheme, orangeScheme } from 'lib/colorSchemes'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'

interface ParamTypes {
  recipe: Recipe
  data?: any
}

/**
 * A page displaying an overview of a particular recipe as specified in the URL.
 * It includes information such as the recipe's category, tags, ingredients and
 * equipment. From here, a user can navigate to pages displaying the recipe's
 * steps in a slideshow or one page format.
 */
const RecipeOverview: React.FC<ParamTypes> = ({ recipe, data }) => {
  const [sliderModalState, setSliderModalState] = useState(false)
  const [width, setWidth] = useState('lg')

  useEffect(() => {
    adjustWidth()
    window.onresize = adjustWidth
  }, [])

  const toggleSliderModal = () => {
    setSliderModalState(!sliderModalState)
  }

  // getting color scheme for the recipe by it's name
  switch(recipe.colorSchemeName) {
    case 'orangeScheme' :
      recipe.colorScheme = orangeScheme;
      break;
    case'tealScheme' :
    recipe.colorScheme = tealScheme;
    break;
    default:
      recipe.colorScheme = primaryScheme;
  }


  let props = {
    open: true,
    heading: recipe.name
  }

  const adjustWidth = () => {
    const fullConfig = resolveConfig(tailwindConfig)
    const screens = fullConfig.theme.screens
    let screenSize = 'xl'
    let test = Object.entries(screens).filter(([key,value]) => value.match(/(\d+)/)[0] > window.innerWidth)
    if (test[0] === undefined) {screenSize = 'xl'}
    else {screenSize = test[0][0]}


    setWidth(screenSize)
    //TODO: Screensize not updating!!!!
  }

  return (
    <>
      {sliderModalState && (
        <Modal
          {...props}
          onClose={toggleSliderModal}
          size={width as Breakpoints}
        >
          <Slideshow recipe={recipe} />
        </Modal>
      )}

      <div className={recipe.colorScheme?.bg + ' flex justify-center'}>
        <div className='max-w-screen-2xl '>
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
                  src={recipe.finalShot}
                  alt={recipe.name}
                  layout='fill'
                  className={styles['image']}
                />
              </div>
              <div className={styles['label-main-image'] + ' absolute'}>
                <Image src={starLabel} alt='label'></Image>
                <div
                  className={
                    styles['recipe-name'] + ' absolute font-semibold font-serif'
                  }
                >
                  {recipe.name
                    .split(' ')
                    .map((el: string | null | undefined) => {
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
                  />
                </div>
              )}
              {recipe.hint && (
                <div className='flex'>
                  <div className={styles['tip-plate-container']}>
                    <Image
                      src={hintPlate}
                      alt='hint'
                      layout='fill'
                      className={styles.image}
                    />
                    <div
                      className={
                        styles['hint-text'] +
                        ' absolute font-semibold font-serif '
                        // styles['hint-text'] + ' text-5xl'
                      }
                    >
                      {recipe.hint}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='flex justify-center m-1 max-w-screen-2xl'>
            <div className={styles['recipe-main-content'] + ' flex flex-col'}>
              <CategoryInfo recipe={recipe} />
              <IngredientsList recipe={recipe} />
              <EquipmentList recipe={recipe} />
              <Buttons recipe={recipe} toggleSliderModal={toggleSliderModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeOverview
