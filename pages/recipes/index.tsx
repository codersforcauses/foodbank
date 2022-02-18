import { useCallback, useEffect, useMemo, useState } from 'react'
import Card from '@components/Recipe/List-View/Card'
// import { recipes } from 'lib/Recipes'
import { Recipe } from '@lib/types'
import { Client } from '@notionhq/client'
import { getAllRecipes } from '@components/API/getData'
import { motion, AnimatePresence } from 'framer-motion'

interface RecipesGridProps {
  tag: string
  recipes: Array<Recipe>
}

const RecipesGridView = ({ tag, recipes }: RecipesGridProps) => {
  const [filteredCards, setFilteredCards] = useState(recipes)

  const allTags: string | string[] = [] // all tags from all the recipes
  const allCategories: string | string[] = [] // all categories from all the recipes. Some recipes belong to

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
  const filterByCategory = useCallback(
    (param: string) => {
      let filtered: Recipe[] = []
      recipes.map(recipe => {
        recipe.category.map(category => {
          if (category === param) filtered.push(recipe)
        })
      })
      setFilteredCards(filtered)
    },
    [recipes]
  )

  // Creating a list of recipes filtered by the passed parameter, maybe a category or tag
  const filterByTag = useCallback(
    (param: string) => {
      let filtered: Recipe[] = []
      recipes.map(recipe => {
        recipe.tags.map(tag => {
          if (tag === param) filtered.push(recipe)
        })
      })
      setFilteredCards(filtered)
    },
    [recipes]
  )

  useEffect(() => {
    if (tag !== 'all') {
      filterByTag(tag)
    }
  })

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
    <div className='grid gap-10 grid-1'>
      <div className='flex justify-center gap-10 mt-10'>
        {allCategories.map(category => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <button
              type='button'
              key={category}
              className='text-lg cursor-pointer'
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          )
        })}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <button
          type='button'
          className='text-lg cursor-pointer'
          onClick={() => setFilteredCards(recipes)}
        >
          All
        </button>
      </div>
      <div className='flex justify-center m-10'>
        <motion.div
          layout
          className='grid mt-6 sm:grid-cols-2 lg:grid-cols-3 gap-14'
        >
          <AnimatePresence>{recipeCards}</AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

// Capture the props and send them to the
export const getServerSideProps = async (context: {
  query: { tag: string }
}) => {
  const { recipes } = await getAllRecipes()
  if (!context.query.tag) {
    return {
      props: {
        tag: 'all', //pass it to the page props
        recipes
      }
    }
  }
  return {
    props: {
      tag: context.query.tag, //pass it to the page props
      recipes
    }
  }
}

export default RecipesGridView
