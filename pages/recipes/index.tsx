import React, {useEffect, useState } from 'react'
import Card from 'components/Recipe/List-View/Card'
import { recipes } from 'lib/Recipes'
import { Recipe } from '@lib/types'


const RecipesGridView: React.FC = ( props ) => {
  const [filteredCards, setFilteredCards] = useState(recipes)

  const allTags: string | string[] = [] // all tags from all the recipes
  const allCategories: string | string[] = [] // all categories from all the recipes. Some recipes belong to
  // several categories

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
  const filterByCategory = (param: string) => {
    let filtered: React.SetStateAction<Recipe[]> = []
    recipes.map(recipe => {
      recipe.category.map(category => {
        if (category === param) filtered.push(recipe)
      })
    })
    setFilteredCards(filtered)
  }
  
  // Creating a list of recipes filtered by the passed parameter, maybe a category or tag
  const filterByTag = (param: string) => {
    let filtered: React.SetStateAction<Recipe[]> = []
    recipes.map(recipe => {
      recipe.tags.map(tag => {
        if (tag === param) filtered.push(recipe)
      })
    })
    setFilteredCards(filtered)
  }
  
  useEffect(() => {
    if (props.tag !== 'all') {
      filterByTag(props.tag)
    }
  }, []);
  

  const recipeCards = filteredCards.map(recipe => {
    const { name, slug, finalShot, character } = recipe
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
    <div className='grid grid-1 gap-10'>
      <div className='flex justify-center gap-10 mt-10'>
        {allCategories.map(category => {
          return (
            <p
              onClick={() => filterByCategory(category)}
              className='text-lg'
              style={{ cursor: 'pointer' }}
              key={category}
            >
              {category}
            </p>
          )
        })}
        <p
          onClick={() => setFilteredCards(recipes)}
          className='text-lg'
          style={{ cursor: 'pointer' }}
        >
          All
        </p>
      </div>
      <div className='flex justify-center m-3'>
        <div className='mt-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-14'>
          {recipeCards}
        </div>
      </div>
    </div>
  )
}

// Capture the props and send them to the 
export const getServerSideProps = async (context: { query: { tag: string } }) => {
  if (!context.query.tag) {
    return {
      props: {
        tag: 'all' //pass it to the page props
      }
    }
  }
  return {
    props: {
      tag: context.query.tag //pass it to the page props
    }
  }
}

export default RecipesGridView
