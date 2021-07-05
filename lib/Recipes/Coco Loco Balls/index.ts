import {Recipe, RecipeStep} from 'lib/types'
import finalShot from 'public/images/recipes/Coco Loco Balls/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Coco Loco Balls/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Coco Loco Balls/Equipment.webp'
import step1Img from 'public/images/recipes/Coco Loco Balls/Step 1.webp'
import step2Img from 'public/images/recipes/Coco Loco Balls/Step 2.webp'
import step3Img from 'public/images/recipes/Coco Loco Balls/Step 3.webp'
import {orangeScheme} from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Put banana and cream cheese in a bowl, mash together until smooth. Break up wheat biscuits, add to ' +
    'banana mixture.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Add drinking chocolate powder, cocoa and honey into the bowl and stir until well combined.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Roll one teaspoon of mixture into a ball with hands. Spread coconut onto a plate. Roll the balls in coconut ' +
    'and serve. Refrigerate to store.'
}

const cocoLocoBalls: Recipe = {
  slug: 'coco-loco-balls',
  name: 'Coco Loco Balls',
  category: 'Snacks/Desert',
  tags: ['Dessert', 'Banana', 'Coconut', 'Balls'],
  equipment: [
    'Large bowl',
    'Potato masher or fork',
    'Large spoon',
    'Measuring cups',
    'Measuring spoons',
    'Chopping board',
    'Plate',
  ],
  ingredients: [
    '1 ripe banana',
    '½ cup light cream cheese',
    '4½ wheat biscuits',
    '¼ cup drinking chocolate powder',
    '1 tablespoon cocoa',
    '1 tablespoon honey',
    '1 tablespoon desiccated coconut'
  ],
  steps: [step1, step2, step3],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default cocoLocoBalls
