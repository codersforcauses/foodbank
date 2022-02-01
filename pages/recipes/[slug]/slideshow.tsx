import { Carousel } from '@components/Custom'
import Image from 'next/image'
import { Recipe } from 'lib/types'

export interface RecipeProps {
  recipe: Recipe
}

const RecipeSlideShow = ({ recipe }: RecipeProps) => {
  if (!recipe) return <div> Error </div>

  return (
    <div className='flex items-center justify-center'>
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
            className='flex flex-col flex-wrap justify-center h-full py-8 keen-slider__slide md:flex-row min-w-32'
          >
            <div className='flex justify-center w-full lg:w-1/2'>
              <div className='py-5 m-auto'>
                <div className='relative z-20 px-6 py-2 font-sans text-5xl font-bold text-white transform border-8 border-black w-max h-max -rotate-12 bg-primary'>{`STEP ${
                  index + 1
                }`}</div>
                <div className='flex justify-center w-full !span-child-relative'>
                  <Image
                    className='!relative !w-full !h-[unset] object-contain border-8'
                    src={recipeStep.image}
                    alt={`step ${index}`}
                    layout='fill'
                    priority={true}
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center w-full px-6 py-5 font-sans text-3xl font-bold md:py-0 lg:w-5/12 min-w-32'>
              {recipeStep.description}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default RecipeSlideShow
