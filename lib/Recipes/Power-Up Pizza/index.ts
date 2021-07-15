import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Power-Up Pizza/Power-up pizza final shot.webp'
import ingredientsImg from 'public/images/recipes/Power-Up Pizza/Power-up pizza ingredients.webp'
import equipmentImg from 'public/images/recipes/Power-Up Pizza/Power-up pizza equipment.webp'
import step1Img from 'public/images/recipes/Power-Up Pizza/Power-up pizza step 1.webp'
import step2Img from 'public/images/recipes/Power-Up Pizza/Power-up pizza step 2.webp'
import step3Img from 'public/images/recipes/Power-Up Pizza/Power-up pizza step 3.webp'
import step4Img from 'public/images/recipes/Power-Up Pizza/Power-up pizza step 4.webp'
import step5Img from 'public/images/recipes/Power-Up Pizza/Power-up pizza step 5.webp'
import { orangeScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Sift flour into bowl. Make a well in the centre, add eggs, milk, oil and dried herbs. Use a spoon to mix together until just combined.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Sprinkle a little flour onto a clean surface, knead dough gently until it is smooth. Roll dough into a large r ectangle shape to fit frypan.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description: 'Spray frypan with oil. Place dough into frypan.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Toppings: Spread pizza base with tomato paste. Dice or slice all pizza toppings. Spread evenly over pizza base.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Grate cheese and sprinkle across pizza, place the lid on frypan and cook on medium heat for 20 minutes .'
}

const powerUpPizza: Recipe = {
  slug: 'power-up-pizza',
  name: 'Power-Up Pizza',
  category: ['Main'],
  tags: ['Pizza', 'Lunch', 'Dinner', 'Vegetables'],
  equipment: [
    'Large bowl',
    'Sieve',
    'Measuring spoons',
    'Measuring cups',
    'Spatula',
    'Rolling pin',
    'Chopping board',
    'Knife',
    'Grater',
    'Can opener',
    'Frypan with lid'
  ],
  ingredients: [
    '3 ½ cup self - raising flour (plus extra for kneading)',
    '2 eggs',
    '1 cup low fat milk',
    '2 tablespoons olive oil',
    '1 tablespoon dried herbs',
    '100 g tomato paste',
    '100 g lean ham',
    '80 g tinned',
    'pineapple',
    '½ red capsicum',
    '6 small mushrooms',
    '1 small bunch fresh',
    'basil',
    '100 g reduced fat',
    'cheese'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default powerUpPizza
