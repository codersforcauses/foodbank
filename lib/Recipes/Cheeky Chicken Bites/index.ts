import {Recipe, RecipeStep} from 'lib/types'
import finalShot from 'public/images/recipes/Cheeky Chicken Bites/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Cheeky Chicken Bites/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Cheeky Chicken Bites/Equipment.webp'
import step1Img from 'public/images/recipes/Cheeky Chicken Bites/Step 1.webp'
import step2Img from 'public/images/recipes/Cheeky Chicken Bites/Step 2.webp'
import step3Img from 'public/images/recipes/Cheeky Chicken Bites/Step 3.webp'
import step4Img from 'public/images/recipes/Cheeky Chicken Bites/Step 4.webp'
import step5Img from 'public/images/recipes/Cheeky Chicken Bites/Step 5.webp'
import {orangeScheme} from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Finely dice onion and garlic. Grate zucchini'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'In a large bowl add chicken mince, ½ cup of breadcrumbs, onion, garlic, zucchini, mixed herbs, cumin, chicken stock ' +
    'and ¼ cup parmesan cheese. Mix Well.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Add remaining breadcrumbs to a small bowl. Shape chicken mixture into small nugget-sized patties ' +
    'and roll in breadcrumbs to coat.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Spray sandwich press with oil and turn on. Place the chicken patties onto the sandwich press and gently close the lid. ' +
    'Cook for 5 minutes or until cooked through.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Top each chicken patty with a small amount of salsa and sprinkle with remaining cheese. Serve warm.'
}


const cheekyChickenBites: Recipe = {
  slug: 'cheeky-chicken-bites',
  name: 'Cheeky Chicken Bites',
  category: 'Snacks',
  tags: ['Chicken', 'Bites', 'Kids', 'Nuggets'],
  equipment: [
    'Chopping board',
    'Knife',
    'Grater',
    'Large bowl',
    'Large Spoon',
    'Measuring cups',
    'Measuring spoons',
    'Sandwich press',
    'Small bowl',
    'Tongs',
    'Plate'
  ],
  ingredients: [
    '½ red onion',
    '1 garlic clove',
    '1 zucchini',
    '500g chicken mince',
    '1 cup breadcrumbs',
    '2 teaspoons dried mixed herbs',
    '1 teaspoon ground cumin',
    '1 teaspoon salt-reduced chicken stock powder',
    '½ cup grated parmesan cheese',
    'Spray oil',
    '½ cup tomato salsa'

  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default cheekyChickenBites