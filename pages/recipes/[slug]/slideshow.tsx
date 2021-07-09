import { recipes } from 'lib/Recipes';
import { Recipe } from 'lib/types';
import SlideShowButton from 'components/Recipe/Buttons/slideshow'

import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Image from 'next/image'

const RecipeSlideshow: React.FC = () => {
    const [step, setStep] = useState(0);
    
    const router = useRouter();
    const { slug } = router.query;

    let recipe: Recipe | null = null;

    for (const potential_recipe of recipes) {
        if (slug === potential_recipe.slug) {
            recipe = potential_recipe;
        }
    }

    if (!recipe) return <div> Error </div>

    const numSteps = recipe.steps.length;

    const changeIndex = (isIncrement: boolean, num: number) => {
        if (isIncrement) return Math.min(num + 1, numSteps - 1)
        else return Math.max(num - 1, 0);
    }

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <SlideShowButton name='Previous' handleClick={() => { setStep(changeIndex(false, step))}} 
                    shouldRender={ step != 0 ? true: false} />
                <Image src={recipe.steps[step].image} alt="image {step}" />
                <SlideShowButton name='Next' handleClick={() => { setStep(changeIndex(true, step))}} 
                    shouldRender={step != numSteps - 1 ? true: false} />
            </div>
        </div>
    )
}

export default RecipeSlideshow
