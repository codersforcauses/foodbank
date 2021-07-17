import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Herbalicious Garlic Dip/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Herbalicious Garlic Dip/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Herbalicious Garlic Dip/Equipment.webp'
import step1Img from 'public/images/recipes/Herbalicious Garlic Dip/Step 1.webp'
import step2Img from 'public/images/recipes/Herbalicious Garlic Dip/Step 2.webp'
import step3Img from 'public/images/recipes/Herbalicious Garlic Dip/Step 3.webp'
import step4Img from 'public/images/recipes/Herbalicious Garlic Dip/Step 4.webp'
import step5Img from 'public/images/recipes/Herbalicious Garlic Dip/Step 5.webp'
import { orangeScheme } from 'lib/colorSchemes'
import { garlicDancer } from '@lib/Characters/Vegetables'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Peel garlic clove and dice into very small pieces. Chop basil leaves and slice ' +
    'spring onion into small pieces. Grate cheese.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Add garlic, basil, spring onion, cheese, mayonnaise, Greek yoghurt, salt and pepper.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Slice carrots and capsicum into sticks. Slice off ends of snow peas. Arrange the vegetables, ' +
    'crackers and dip on a platter.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description: ''
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description: ''
}

const herbaliciousGarlicDip: Recipe = {
  slug: 'herbalicious-garlic-dip',
  name: 'Herbalicious Garlic Dip',
  category: ['Snack'],
  tags: ['Dip', 'Garlic', 'Snack', 'Vegetables'],
  equipment: [
    'Chopping board',
    'Knife',
    'Grater',
    'Bowl',
    'Measuring cups',
    'Measuring spoons',
    'Spoon',
    'Serving platter'
  ],
  ingredients: [
    '1 garlic clove',
    '1 handful fresh basil (leaves only)',
    '1 spring onion',
    '100g reduced fat cheese',
    '2 tablespoons mayonnaise',
    '1 cup reduced fat Greek yoghurt',
    'Pinch of salt',
    'Pepper',
    '2 carrots',
    '1 capsicum',
    '150g (12) snow peas',
    '1 packet plain rice crackers'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme,
  character: garlicDancer
}

export default herbaliciousGarlicDip
