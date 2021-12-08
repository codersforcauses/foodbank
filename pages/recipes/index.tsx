import React, { useEffect, useState } from 'react'
import Card from 'components/Recipe/List-View/Card'
// import { recipes } from 'lib/Recipes'
import { Recipe } from '@lib/types'
import { Client } from "@notionhq/client";

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
    console.log(recipe)
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
      <div className='flex justify-center m-3'>
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
  const notion = new Client({
    auth: process.env.NOTION_API_KEY
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_RECIPES_DB_ID
  });

  const chars = await notion.databases.query({
    database_id: process.env.NOTION_CHARACTERS_DB_ID,
  })

  //
  // name: 'Garlic Dancer',
  //   image: garlicDancerImage.src,
  //   aliasName: 'Garlic Shield',
  //   about: 'Flavours food for tasty tucker.',
  //   aliasImage: garlicShieldImage.src,
  //   imageGif: garlicShieldImage.src,
  //   superPowers: 'Protects the body against rascal bacteria.',
  //   foodGroup: 'Vegetables – protective foods',
  //   location: 'Vegie Zone - Bursting Bulb',
  //   facing: 'left'

  const getCharacterProps = (charId: String) => {
    let character = chars.results.filter(char => char.id == charId)
    return {
      name: character[0].properties.name.title[0].plain_text,
      aliasName: character[0].properties.aliasName.rich_text[0].plain_text,
      about: character[0].properties.About.rich_text[0].plain_text,
      aliasImage: character[0].properties.aliasImage.files[0].file.url,
      imageGif: character[0].properties.imageGif.files[0].file.url,
      superPowers: character[0].properties.superPowers.rich_text[0].plain_text,
      foodGroup: character[0].properties.foodGroup.rich_text[0].plain_text,
      location: character[0].properties.location.multi_select.map(item => item.name),
      facing: character[0].properties.facing.rich_text[0].plain_text
    }
  }

  const recipes = data.results.map(recipe => ({
    page_id: recipe.id,
    title: recipe.properties.Recipe.title[0].plain_text,
    category: recipe.properties.Category.multi_select.map(category => category.name),
    tags: recipe.properties.Tags.multi_select.map(tag => tag.name),
    equipment: recipe.properties.Equipment.multi_select.map(item => item.name),
    ingredients: recipe.properties.ingredients.multi_select.map(item => item.name),
    equipmentImg: recipe.properties.equipmentImg.files[0].file.url,
    ingredientsImg: recipe.properties.ingredientsImg.files[0].file.url,
    finalShot: recipe.properties.finalShot.files[0].file.url,
    colorScheme: recipe.properties.colorScheme.rich_text[0].plain_text,
    hint: recipe.properties.hint.rich_text[0] ? recipe.properties.hint.rich_text[0].plain_text : '',
    slug: recipe.properties.slug.rich_text[0].plain_text,
    character: getCharacterProps(recipe.properties.characterId.relation[0].id),
    characterId: recipe.properties.characterId.relation[0].id
  }));
  
  if (!context.query.tag) {
    return {
      props: {
        tag: 'all', //pass it to the page props
        data,
        recipes,
        chars
      }
    }
  }
  return {
    props: {
      tag: context.query.tag, //pass it to the page props
      data,
      recipes,
      chars
    }
  }
}

export default RecipesGridView
