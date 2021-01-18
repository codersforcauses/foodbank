import React from 'react'
import { useParams } from 'react-router'
import RecipeTab from 'Components/RecipeTab'
import { Recipe } from 'lib/types'
import Dip from 'lib/mock/dip.jpg'
import BananaBites from 'lib/mock/banana-bites.jpg'

interface ParamTypes {
  id: string
}

const RecipeOverview: React.FC = () => {
  const { id } = useParams<ParamTypes>()

  // retrieve the recipe using id from DB - STILL TO DO
  const superSonicDip: Recipe = {
    id: id,
    name: 'Super Sonic Dip',
    category: 'Snacks',
    tags: ['Dip', 'Vegetables', 'Snacks'],
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
    bgcolor: 'purple',
    headcolor: 'teal',
    textcolor: 'white',
    buttontextcolor: 'black'
  }

  const sportyBananaBites: Recipe = {
    id: id,
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
    bgcolor: 'teal',
    headcolor: 'purple',
    textcolor: 'black',
    buttontextcolor: 'white'
  }

  const kPowFritters: Recipe = {
    id: id,
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
    bgcolor: 'orange',
    headcolor: 'purple',
    textcolor: 'black',
    buttontextcolor: 'white'
  }

  superSonicDip
  sportyBananaBites
  kPowFritters

  return (
    <div>
      <RecipeTab recipe={superSonicDip} />
    </div>
  )
}

export default RecipeOverview
