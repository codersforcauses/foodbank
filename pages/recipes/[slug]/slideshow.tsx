import { Carousel } from "@components/Custom";
import styles from "./Slideshow.module.css";
import Image from "next/image";
import { Recipe } from 'lib/types';

export interface RecipeProps {
  recipe: Recipe
}

const RecipeSlideShow: React.FC<RecipeProps> = ( { recipe } ) => {

  if (!recipe) return <div> Error </div>;

  return (
    <div
      className="flex justify-center items-center"
      // style={{ height: 'calc(100vh - 4rem)' }}
    >
      <Carousel
        controls
        indicators
        length={recipe.steps.length}
        className="h-full"
      >
        {recipe.steps.map((recipeStep, index) => (
          // make sure to declare a div as below with `keen-slider__slide` as a class for it to work properly
          <div
            key={`recipeStep_${index}`}
            className="keen-slider__slide flex flex-col md:flex-row justify-center flex-wrap h-full min-w-32 py-8"
          >
            <div className='w-full lg:w-1/2 flex justify-center'>
              <div className='m-auto pr-5 py-5 pl-12'>
                <div className='w-max h-max px-6 py-2 transform -rotate-12 text-white text-5xl bg-primary font-sans font-bold border-8 border-black'>{`STEP ${
                  index + 1
                }`}</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className={styles["card-image-container"] + " flex justify-center"}>
                  <Image
                    src={recipeStep.image}
                    alt={`step ${index}`}
                    className={styles.image + " border-8"}
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div
              className="font-sans py-5 md:py-0 font-bold text-3xl px-6 w-fit lg:w-5/12 min-w-32 flex justify-center items-center">
              {recipeStep.description}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default RecipeSlideShow
