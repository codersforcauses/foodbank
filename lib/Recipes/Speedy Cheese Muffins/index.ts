import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Speedy Cheese Muffins/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Speedy Cheese Muffins/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Speedy Cheese Muffins/Equipment.webp'
import step1Img from 'public/images/recipes/Speedy Cheese Muffins/Step 1.webp'
import step2Img from 'public/images/recipes/Speedy Cheese Muffins/Step 2.webp'
import step3Img from 'public/images/recipes/Speedy Cheese Muffins/Step 3.webp'
import step4Img from 'public/images/recipes/Speedy Cheese Muffins/Step 4.webp'
import step5Img from 'public/images/recipes/Speedy Cheese Muffins/Step 5.webp'
import { orangeScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Pre-heat oven to 180°C. Grate pumpkin, finely slice spring onions and drain corn.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Place flour, eggs, milk and vegetable stock powder into a large bowl and combine.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Add spinach, pumpkin, spring onion and corn to egg mixture. Crumble feta with hands into the bowl and stir until combined.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Spray 2 muffin trays with oil and use a spoon to evenly scoop muffin mixture into trays'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Sprinkle pepitas evenly on top of each muffin. Cook for 20-25 minutes or until muffins are golden brown.'
}

const speedyCheeseMuffins: Recipe = {
  slug: 'speedy-cheese-muffins',
  name: 'Speedy Cheese Muffins',
  category: ['Snack'],
  tags: ['Snack', 'Muffins', 'Lunchbox', 'Pumpkin'],
  equipment: [
    'Oven',
    'Grater',
    'Chopping board',
    'Knife',
    'Can opener',
    'Strainer',
    'Large bowl',
    'Measuring cups',
    'Measuring spoons',
    'Large spoon',
    '2 muffin trays',
    'Spoon'
  ],
  ingredients: [
    '¼ pumpkin',
    '3 spring onions',
    '420g tin corn kernels',
    '2 cups wholemeal self-raising flour',
    '2 eggs',
    '1 cup reduced fat milk',
    '2 tablespoons salt-reduced vegetable stock powder',
    '60g baby spinach',
    '100g reduced fat feta',
    'Spray oil',
    '2 tablespoons pepita seeds'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default speedyCheeseMuffins
