import {Recipe, RecipeStep} from 'lib/types'
import finalShot from 'public/images/recipes/Super Sweet Potato Bake/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Super Sweet Potato Bake/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Super Sweet Potato Bake/Equipment.webp'
import step1Img from 'public/images/recipes/Super Sweet Potato Bake/Step 1.webp'
import step2Img from 'public/images/recipes/Super Sweet Potato Bake/Step 2.webp'
import step3Img from 'public/images/recipes/Super Sweet Potato Bake/Step 3.webp'
import step4Img from 'public/images/recipes/Super Sweet Potato Bake/Step 4.webp'
import step5Img from 'public/images/recipes/Super Sweet Potato Bake/Step 5.webp'
import {orangeScheme} from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Slice spring onion and finely dice garlic. Cut potatoes and sweet potato in half ' +
  'and then slice very thinly. Grate cheese.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Spray frypan with oil and turn on to a medium heat. Add garlic and cook until browned.  ' +
    'Stir in flour, chicken stock powder, dried mixed herbs, thyme and pepper.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Add water, milk and Dijon mustard to the frypan and stir until sauce becomes thick. ' +
    'Stir in cream cheese and ½ cup of grated cheese.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Drain corn kernels. Add corn, spring onions and potatoes to the frypan and stir. ' +
    'Flatten the potatoes and cook with the lid on a medium-high heat for 15 minutes.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Sprinkle the remaining cheese on top of the potatoes and cook with the lid on ' +
    'until the cheese is melted and potatoes are soft.'
}


const superSweetPotatoBake: Recipe = {
  slug: 'super-sweet-potato-bake',
  name: 'Super Sweet Potato Bake',
  category: 'Main',
  tags: ['Potato', 'Bake Potato', 'Corn', 'Sweet Potato'], //bake potato, sweet potato tags space or not
  equipment: [
    'Knife',
    'Chopping board',
    'Grater',
    'Frypan with lid',
    'Measuring cups',
    'Measuring Spoons',
    'Strainer'

  ],
  ingredients: [
    '2 spring onions',
    '2 garlic cloves',
    '3 potatoes',
    '1 sweet potato',
    '150g reduced fat cheese',
    'Spray oil',
    '3 tablespoons plain flour',
    '3 teaspoons salt-reduced chicken stock poweder',
    '2 teaspoons dried mixed herbs',
    '1 teaspoon dried thyme',
    'Pepper',
    '1 cup water',
    '1 cup reduced fat milk',
    '1 tablespoon Dijon mustard',
    '125g light cream cheese',
    '420g tin corn kernels'

  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default superSweetPotatoBake