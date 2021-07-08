import React from 'react'
import { useRouter } from 'next/router'
import { Recipe } from 'lib/types'
import { recipes } from 'lib/Recipes'
import Image from 'next/image'

import starLabel from 'public/images/Extra/star_label.png'
import hintPlate from 'public/images/Extra/hint-plate.png'

// import Buttons from 'components/Recipe/Buttons'
import EquipmentList from 'components/Recipe/EquipmentList'
import IngredientsList from 'components/Recipe/IngredientsList'
// import CategoryInfo from 'components/Recipe/CategoryInfo'

interface ParamTypes {
    /** Slug which identifies recipe, used in the URL. */
    slug: string
}

/**
 * A page displaying an overview of a particular recipe as specified in the URL.
 * It includes information such as the recipe's category, tags, ingredients and
 * equipment. From here, a user can navigate to pages displaying the recipe's
 * steps in a slideshow or one page format.
 */
const RecipeOverview: React.FC = () => {
    // const {slug} = useParams<ParamTypes>()

    const router = useRouter();
    const { slug } = router.query;
    
    console.log(slug)

    let recipe: Recipe | null = null;

    for (const potential_recipe of recipes) {
        if (slug === potential_recipe.slug) {
            recipe = potential_recipe;
        }
    }

    if (!recipe) {
        return <div>Recipe cannot be found!</div>
    } else {
        const colorScheme = recipe.colorScheme
        return (
            <div className={colorScheme.bg}>
                <div className='flex justify-center m-1 '>
                    <div className="flex">
                        <img src={recipe.finalShot} alt={recipe.name} className="recipe-main-image"></img>

                        <div className="label-main-image absolute">
                            <img src={starLabel} alt='label'></img>
                            <div className="absolute recipe-name font-semibold font-serif">
                                {recipe.name.split(' ').map(el => {
                                    return <p key={el}>{el}</p>
                                })}
                            </div>
                        </div>

                        {recipe.character ?
                            <div className="recipe-hero-image absolute">
                                <img src={recipe.character.imageGif} alt='label'
                                     className={recipe.character.facing==='left' ? 'flip-hero-image' : ''}></img>
                                {recipe.hint ?
                                    <div className="flex">
                                        <div className="hint-main-image absolute">
                                            <img src={hintPlate} alt='hint'></img>
                                            <div className="absolute hint-text font-semibold font-serif">
                                                {recipe.hint}
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    null}
                            </div> :
                            null}
                    </div>

                </div>
                <div className="flex justify-center m-1 w-full">
                    <div className="flex flex-col recipe-main-content">
                        <div>
                            <IngredientsList recipe={recipe}/>
                        </div>
                        <div>
                            <EquipmentList recipe={recipe}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeOverview
