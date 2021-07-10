import React, {useState} from 'react'
import Card from 'components/Recipe/List-View/Card'
import {recipes} from 'lib/Recipes'
import {Recipe} from '@lib/types'


const RecipesGridView: React.FC = () => {


    const [filteredCards, setFilteredCards] = useState(recipes)

    const allTags: string | string[] = [] // all tags from all the recipes
    const allCategories: string | string[] = [] // all categories from all the recipes. Some recipes belong to 
                                                // several categories
    console.log(allTags)
    recipes.map(recipe => {
        // getting all the tags
        recipe.tags.map(tag => {
            if (!allTags.includes(tag)) allTags.push(tag)
        })
        // getting all the categories
        recipe.category.map(category => {
            if (!allCategories.includes(category)) allCategories.push(category)
        })
    })

    // Creating a list of recipes filtered by the passed category
    const filterCategory = (category: string) => {
        let filtered: React.SetStateAction<Recipe[]> = []
        recipes.map(recipe => {
            recipe.category.map(cat => {
                if (cat === category) filtered.push(recipe)
            })
        })
        setFilteredCards(filtered)
    }

    const recipeCards = filteredCards.map((recipe) => {
        const {name, slug, finalShot, character} = recipe
        return (
            <Card
                label={name}
                image={finalShot}
                text={name}
                color='Primary'
                key={name}
                slug={slug}
                character={character}
            />
        )
    })

    return (
        <div className="grid grid-1 gap-10">
            <div className="flex justify-center gap-10 mt-10">
                {allCategories.map(category => {
                    return (
                        <p onClick={e => filterCategory(category)}
                           className="text-lg"
                           style={{cursor: "pointer"}}
                           key={category}>
                            {category}
                        </p>
                    )
                })}
                <p onClick={e => setFilteredCards(recipes)}
                   className="text-lg"
                   style={{cursor: "pointer"}}>
                    All
                </p>
            </div>
            <div className="flex justify-center m-3">

                <div
                    className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14">
                    {recipeCards}
                </div>
            </div>
        </div>
    )
}

export default RecipesGridView
