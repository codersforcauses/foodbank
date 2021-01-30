import React from 'react'
import { useParams } from 'react-router'
import RecipeTab from 'Components/RecipeTab'
import { Recipe } from 'lib/types'
import Dip from 'lib/mock/dip.jpg'
import BananaBites from 'lib/mock/banana-bites.jpg'

interface ParamTypes {
  slug: string
}

const RecipeOverview: React.FC = () => {
  const { slug } = useParams<ParamTypes>()

  // retrieve the recipe using id from DB - STILL TO DO
  const superSonicDip: Recipe = {
    slug: slug,
    name: 'Super Sonic Dip',
    category: 'Snacks',
    tags: ['Dip', 'Vegetables', 'Snacks', 'Blah', 'De', 'blah', 'even', 'more', 'tags', 'nice'],
    equipment: [
      'Chopping board',
      'Knife',
      'Fine grater',
      'Bowl',
      'Measuring cups',
      'Measuring spoons',
      'Spoon',
      'Peeler',
      'Serving platter'
    ],
    ingredients: [
      '1 tomato',
      '1 clove garlic',
      '1/2 cup low fat natural/Greek yoghurt',
      '1/2 cup extra light cream cheese',
      '1/4 cup tomato relish or Mexican salsa',
      '1/2 teaspoon paprika',
      '2 carrots',
      '150g snow peas',
      '1 red capsicum',
      '1 punnet cherry tomatoes'
    ],
    image: Dip,
    bgColor: 'primary',
    headColor: 'teal',
    textColor: 'white',
    buttonTextColor: 'black'
  }

  const sportyBananaBites: Recipe = {
    slug: 'sporty-banana-bites',
    name: 'Sport Banana Bites',
    category: 'Snacks',
    tags: ['Snack', 'Dessert', 'Banana'],
    equipment: [
      'Medium bowl',
      'Fork/potato masher',
      'Mixing spoon',
      'Measuring cups',
      'Measuring spoons',
      'Small bowl',
      'Chopping board',
      'Knife'
    ],
    ingredients: [
      '2 medium bananas',
      '125g light cream',
      '1/2 cup dried apricots',
      '1 teaspoon cinnamon',
      '2 tablespoons honey',
      '2 cups rolled oats',
      '1/4 cup desiccated coconut'
    ],
    image: BananaBites,
    bgColor: 'teal',
    headColor: 'primary',
    textColor: 'black',
    buttonTextColor: 'white'
  }

  const kPowFritters: Recipe = {
    slug: 'k-pow-fritters',
    name: 'K-pow Fritters',
    category: 'Snacks/Main',
    tags: ['Corn', 'Vegetables', 'Fritters', 'Lunch'],
    equipment: [
      'Bowl',
      'Can opener',
      'Whisk/fork',
      'Chopping board',
      'Knife',
      'Grater',
      'Measuring cups',
      'Mixing spoon',
      'Frypan',
      'Spatula'
    ],
    ingredients: [
      '4 eggs',
      '400g light cream',
      '1/2 cup dried apricots',
      '1 teaspoon cinnamon',
      '2 tablespoons honey',
      '2 cups rolled oats',
      '1/4 cup desiccated coconut'
    ],
    image: BananaBites,
    bgColor: 'orange',
    headColor: 'primary',
    textColor: 'black',
    buttonTextColor: 'white'
  }

  superSonicDip
  sportyBananaBites
  kPowFritters

  return (
    <RecipeTab recipe={superSonicDip} />
  )
}

export default RecipeOverview
