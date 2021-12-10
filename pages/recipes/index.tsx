import React, { useEffect, useState } from 'react'
import Card from 'components/Recipe/List-View/Card'
// import { recipes } from 'lib/Recipes'
import { Recipe } from '@lib/types'
import { Client } from "@notionhq/client";
import getNotionData from '../../components/API/getData'

const RecipesGridView: React.FC = ({ tag, recipes, chars }) => {
  const [filteredCards, setFilteredCards] = useState(recipes)

  const allTags: string | string[] = [] // all tags from all the recipes
  const allCategories: string | string[] = [] // all categories from all the recipes. Some recipes belong to
  // several categories
  console.log("recipessss: ", recipes)
  console.log("charrrs: ", chars)

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
    if (tag !== 'all') {
      filterByTag(tag)
    }
  }, [])

  const recipeCards = filteredCards.map(recipe => {
    const { name, slug, finalShot, character } = recipe
    return (
      <Card
        key={recipe.page_id}
        label={name}
        image={finalShot}
        text={name}
        color='Primary'
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
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
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
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <p
          onClick={() => setFilteredCards(recipes)}
          className='text-lg'
          style={{ cursor: 'pointer' }}
        >
          All
        </p>
      </div>
      <div className='flex justify-center m-10'>
        <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-14'>
          {recipeCards}
        </div>
      </div>
    </div>
  )
}

// Capture the props and send them to the
export const getServerSideProps = async (context: {
  query: { tag: string }
}) => {
  
  const { recipes, chars } = await getNotionData()
  
  if (!context.query.tag) {
    return {
      props: {
        tag: 'all', //pass it to the page props
        // data,
        recipes,
        chars
      }
    }
  }
  return {
    props: {
      tag: context.query.tag, //pass it to the page props
      // data,
      recipes,
      chars
    }
  }
}

export default RecipesGridView
