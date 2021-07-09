import React from 'react'
import {Recipe} from 'lib/types'

interface Props {
    recipe: Recipe
}

const tagStyle = {
    backgroundColor: "rgba(206,207,203,var(--tw-bg-opacity))",
    "--tw-bg-opacity": 1
}

/** Displays the category and tags for a recipe. */
const CategoryInfo: React.FC<Props> = ({recipe}) => {
    const colorScheme = recipe.colorScheme
    return (
        <div>
            <div className='flex flex-row flex-wrap justify-end gap-5 mt-5 mb-5'>
                <h2 className={'text-xl font-serif ' + colorScheme.header}>Category</h2>
                {recipe.category.map(el => {
                    return <p className={colorScheme.text} key={el}>{el}</p>
                })}
            </div>


            <div className='flex flex-row flex-wrap justify-start gap-3 mb-10'>
                <h2 className={'text-xl font-serif ' + colorScheme.header}>Tags: </h2>
                {recipe.tags.map(tag => (
                    <div
                        key={tag}
                        className='mr-3 my-0.5 mt-1.5 px-4 rounded-3xl text-sm'
                        style={tagStyle}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryInfo
