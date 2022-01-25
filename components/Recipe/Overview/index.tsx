import { useEffect, useState } from 'react'
import { Recipe } from 'lib/types'
import Image from 'next/image'
import Modal from 'components/Custom/Modal'
import { Breakpoints } from 'lib/types'

import starLabel from 'public/images/Extra/star_label.png'
import hintPlate from 'public/images/Extra/hint-plate.png'

import Slideshow from 'pages/recipes/[slug]/slideshow'
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

interface Screens {
  [key: string]: string
}

/**
 * A page displaying an overview of a particular recipe as specified in the URL.
 * It includes information such as the recipe's category, tags, ingredients and
 * equipment. From here, a user can navigate to pages displaying the recipe's
 * steps in a slideshow or one page format.
 */
const RecipeOverview = ({ recipe, data }: ParamTypes) => {
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
  switch (recipe.colorSchemeName) {
    case 'orangeScheme':
      recipe.colorScheme = orangeScheme
      break
    case 'tealScheme':
      recipe.colorScheme = tealScheme
      break
    default:
      recipe.colorScheme = primaryScheme
  }

  const props = {
    open: true,
    heading: recipe.name
  }

  const adjustWidth = () => {
    /* 
    Find largest breakpoint under current screen size and send width to the Modal component. 
    Default to largest screen size in the tailwind configs.

    Might need a sort function in future but working fine for now
      */

    const fullConfig = resolveConfig(tailwindConfig)
    const screens: Screens = fullConfig.theme.screens
    const largestScreen = Object.keys(screens).reduce((a, b) =>
      parseInt(screens[a]) > parseInt(screens[b]) ? a : b
    )

    let filteredScreens = Object.entries(screens).filter(
      ([_, value]: [string, string]) => parseInt(value) > window.innerWidth
    )

    //console.log(screens)

    let screenWidth =
      filteredScreens.length === 0 ? largestScreen : filteredScreens[0][0]

    setWidth(screenWidth)
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
      <div className={`${recipe.colorScheme?.bg} flex justify-center`}>
        <div className='max-w-screen-2xl '>
          <div className='flex justify-center m-1'>
            <div className='flex flex-col w-3/4'>
              <div className='w-full !span-child-relative mt-[20%] border-solid border-[#434343] border-[3px]'>
                <Image
                  className='!relative !w-full !h-[unset] object-contain'
                  src={recipe.finalShot}
                  alt={recipe.name}
                  layout='fill'
                />
              </div>
              <div className='absolute ml-[-10%] mt-[2%] w-[45%] h-full max-h-[400px] max-w-[450px] min-w-[200px]'>
                <Image src={starLabel} alt='label' />
                <div className='absolute w-1/2 font-serif font-semibold text-[5vw] text-center rotate-[-17deg] align-middle leading-[0.8] tracking-[4px] self-center mt-[-50%] ml-[28%] z-[1] text-shadow-title recipe_md:text-[50px]'>
                  {recipe.name
                    .split(' ')
                    .map((el: string | null | undefined) => {
                      return <p key={el}>{el}</p>
                    })}
                </div>
              </div>
              {recipe.character && (
                <div
                  className={`${
                    recipe.character.facing === 'left' ? 'scale-x-[-1]' : ''
                  } w-2/5 mt-[-35%] ml-[-10%] mr-[-20%] !span-child-relative`}
                >
                  <Image
                    className='!relative !w-full !h-[unset] object-contain'
                    src={recipe.character.imageGif}
                    alt='label'
                    layout='fill'
                  />
                </div>
              )}
              {recipe.hint && (
                <div className='flex'>
                  {/* <div className={styles['tip-plate-container']}> */}
                  <div className='w-2/5 mt-[-75%] ml-[75%] mr-[-15%] !span-child-relative'>
                    <Image
                      className='!relative !w-full !h-[unset] object-contain'
                      src={hintPlate}
                      alt='hint'
                      layout='fill'
                    />
                    <div
                      // className={
                      //   styles['hint-text'] +
                      //   ' absolute font-semibold font-serif '
                      // }
                      className={
                        'absolute w-4/5 font-serif font-semibold rotate-[10deg]' +
                        ' ' +
                        ''
                        // 'mt-[-45%] ml-[15%] text-[2vw] md:mt-[-140%] md:ml-[34px] md:text-[1.5rem] lg:mt-[-150%] lg:ml-[34px] lg:text-2xl xl:mt-[-160%] xl:ml-[50px] xl:text-2xl'
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
            <div className='flex flex-col w-full p-4 bg-[#e9e9e9] mt-[60px] mx-[1%] max-w-[1200px] min-w-[300px] border-[3px] border-solid border-[#434343]'>
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
