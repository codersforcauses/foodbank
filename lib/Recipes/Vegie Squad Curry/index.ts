import {Recipe, RecipeStep} from 'lib/types'
import finalShot from 'public/images/recipes/Vegie Squad Curry/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Vegie Squad Curry/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Vegie Squad Curry/Equipment.webp'
import step1Img from 'public/images/recipes/Vegie Squad Curry/Step 1.webp'
import step2Img from 'public/images/recipes/Vegie Squad Curry/Step 2.webp'
import step3Img from 'public/images/recipes/Vegie Squad Curry/Step 3.webp'
import step4Img from 'public/images/recipes/Vegie Squad Curry/Step 4.webp'
import step5Img from 'public/images/recipes/Vegie Squad Curry/Step 5.webp'
import {orangeScheme} from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Finely dice onion and garlic. Spray frypan with oil and turn on to medium heat. Add onion and garlic to frypan. ' +
  'Cook until browned.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Drain lentils using a strainer. Add frozen vegetables and lentils to frypan and stir through with large spoon. ' +
    'Cook with lid on for 10 minutes until vegetables are soft.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Dice tomatoes and coriander leaves into small pieces. Add chopped tomatoes and coriander to frypan and mix well. '
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Add curry powder, vegetable stock powder and coconut milk to frypan and gently stir. Add 3 tablespoons of cornflour and 1 cup of water  ' +
    'to a medium bowl and mix well with a spoon.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Add cornflour mix to frypan. Gently stir as the cornflour begins to thicken the sauce. Cook for 5 minutes then serve.'
}


const vegieSquadCurry: Recipe = {
  slug: 'vegie-squad-curry',
  name: 'Vegie Squad Curry',
  category: ['Main'],
  tags: ['Curry', 'Vegetables', 'Vegetarian'],
  equipment: [
    'Knife',
    'Chopping board',
    'Large spoon',
    'Can opener',
    'Strainer',
    'Measuring spoons',
    'Measuring cups',
    'Bowl',
    'Spoon'

  ],
  ingredients: [
    '1 onion',
    '2 cloves garlic',
    'Spray oil',
    '400g tin brown lentils',
    '500g mixed frozen vegetables',
    '2 tomatoes',
    '1 bunch coriander (leaves only)',
    '2 teaspoons curry powder',
    '1 tablespoon salt-reduced vegetable stock powder',
    '400ml tin light coconut milk',
    '3 tablespoons cornflour',
    '1 cup water'

  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default vegieSquadCurry
