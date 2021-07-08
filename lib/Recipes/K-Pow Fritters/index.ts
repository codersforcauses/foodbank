import { Recipe, RecipeStep } from 'lib/types'
import { peaPod } from 'lib/Characters/Vegetables/index'
import finalShot from 'public/images/recipes/K-Pow Fritters/K-pow fritters final shot.webp'
import ingredientsImg from 'public/images/recipes/K-Pow Fritters/K-pow fritters ingredients.webp'
import equipmentImg from 'public/images/recipes/K-Pow Fritters/K-pow fritters equipment.webp'
import step1Img from 'public/images/recipes/K-Pow Fritters/K-pow fritters step 1.webp'
import step2Img from 'public/images/recipes/K-Pow Fritters/K-pow fritters step 2.webp'
import step3Img from 'public/images/recipes/K-Pow Fritters/K-pow fritters step 3.webp'
import step4Img from 'public/images/recipes/K-Pow Fritters/K-pow fritters step 4.webp'
import step5Img from 'public/images/recipes/K-Pow Fritters/K-pow fritters step 5.webp'
import { orangeScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Crack eggs into bowl. Add creamed corn and whisk together.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Drain corn kernels. Chop spring onions and parsley. Grate cheese.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Add corn, spring onions, parsley, cheese, flour, peas and pepper to bowl. Mix to combine.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Spray frypan with oil and turn to medium heat. Add spoonfuls of mixture into an, leaving space between each one.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Cook for 2-4 minutes each side until browned and cooked through. Repeat with remaining mixture.'
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
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme,
  character: peaPod,
  hint: 'Cold fritters are a tasty lunchbox idea.'
}

export default kPowFritters
