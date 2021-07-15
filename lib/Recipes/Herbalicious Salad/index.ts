import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Herbalicious Salad/Herbalicious salad final shot.webp'
import ingredientsImg from 'public/images/recipes/Herbalicious Salad/Herbalicious salad ingredients.webp'
import equipmentImg from 'public/images/recipes/Herbalicious Salad/Herbalicious salad equipment.webp'
import step1Img from 'public/images/recipes/Herbalicious Salad/Herbalicious salad step 1.webp'
import step2Img from 'public/images/recipes/Herbalicious Salad/Herbalicious salad step 2.webp'
import step3Img from 'public/images/recipes/Herbalicious Salad/Herbalicious salad step 3.webp'
import step4Img from 'public/images/recipes/Herbalicious Salad/Herbalicious salad step 4.webp'
import step5Img from 'public/images/recipes/Herbalicious Salad/Herbalicious salad step 5.webp'
import { primaryScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Cook pasta as per instructions on the packet. Allow to cool. Grate garlic and parmesan into a small bowl. Add olive oil, lemon juice and pepper. '
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Very finely chop basil. Add to bowl and mix until well combined.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description: 'Drain corn and olives. Chop cherry tomatoes and grate carrot.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Put corn, cherry tomatoes, carrot, peas and olives into a large bowl. Add cold pasta and mix until combined.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description: 'Pour dressing over salad and mix until evenly coated.'
}

const herbaliciousSalad: Recipe = {
  slug: 'herbalicious-salad',
  name: 'Herbalicious Salad',
  category: ['Salad'],
  tags: ['Side', 'Main', 'Salad', 'Pasta', 'Vegetables', 'Herbs'],
  equipment: [
    'Chopping board',
    'Knife',
    'Small bowl',
    'Large bowl',
    'Fine grater',
    'Coarse grater',
    'Measuring cups',
    'Measuring spoons',
    'Large spoon',
    'Strainer'
  ],
  ingredients: [
    'Dressing:',
    '1 clove garlic',
    '25 g parmesan cheese',
    '3 tablespoons olive oil',
    '2 teaspoons lemon juice',
    'Pepper',
    '1 bunch fresh basil',
    'Salad:',
    '400 g tin corn kernels',
    '1 carrot',
    '1 punnet cherry tomatoes',
    '1 cup frozen peas, defrosted',
    '½ cup sliced black olives'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: primaryScheme
}

export default herbaliciousSalad
