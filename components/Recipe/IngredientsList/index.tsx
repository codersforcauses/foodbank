import React from 'react'
import {Recipe} from 'lib/types'
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
const IngredientsList: React.FC<Props> = ({recipe}) => {
    const colorScheme = recipe.colorScheme
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center">
                <img
                    className={styles["header-plate"] + ' static'}
                    src={headerPlateOne.src}
                    alt='Ingredients'
                />
                <h1 className={'static font-serif pb-8 ' + colorScheme.header + " " + styles["ingredients-header"]}>
                    Ingredients
                </h1>
            </div>
            <div className={styles["content-block"] + ' flex flex-row justify-center flex-wrap'}>
                <div className={styles["ingredients-text"] + ' flex flex-shrink-0 font-semibold font-serif'}>
                    <ul>
                        {recipe.ingredients.map(ingredient => (

                            <li key={ingredient}>
                                - {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles["image-box-1"] + ' flex'}>
                    <img
                        className={styles["frame-image"] + ' static'}
                        src={imgFrameOne.src}
                        alt='frame-one'
                    />
                    <img
                        className={styles["ingredients-image"] + ' rounded-3xl static'}
                        src={recipe.ingredientsImg.src}
                        alt='equipment'
                    />
                </div>
            </div>
        </div>
    )
}

export default IngredientsList
