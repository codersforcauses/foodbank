import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Mean Green Salad/Mean green salad final shot.webp'
import ingredientsImg from 'public/images/recipes/Mean Green Salad/Mean green salad ingredients.webp'
import equipmentImg from 'public/images/recipes/Mean Green Salad/Mean green salad equipment.webp'
import step1Img from 'public/images/recipes/Mean Green Salad/Mean green salad step 1.webp'
import step2Img from 'public/images/recipes/Mean Green Salad/Mean green salad step 2.webp'
import step3Img from 'public/images/recipes/Mean Green Salad/Mean green salad step 3.webp'
import step4Img from 'public/images/recipes/Mean Green Salad/Mean green salad step 4.webp'
import step5Img from 'public/images/recipes/Mean Green Salad/Mean green salad step 5.webp'
import { primaryScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Chop broccoli and apple into small pieces.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description: 'Chop the cabbage and spring onion finely. Grate carrot'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Add broccoli, apple, cabbage, spring, carrot and sunflower seeds or pepitas into large bowl.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'In a small bowl, mix yoghurt, mayonnaise, Dijon mustard, lemon juice and pepper.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description: 'Pour dressing over salad and mix well.'
}

const meanGreenSalad: Recipe = {
  slug: 'mean-green-salad',
  name: 'Mean Green Salad',
  category: ['Salad'],
  tags: ['Salad', 'Vegetables'],
  equipment: [
    'Chopping board',
    'Knife',
    'Large bowl',
    'Small bowl',
    'Grater',
    'Large spoon',
    'Measuring cups',
    'Measuring spoons',
    'Juicer'
  ],
  ingredients: [
    'Salad:',
    '1 broccoli',
    '1 red apple',
    '¼ cabbage',
    '2 spring onions',
    '1 carrot',
    '¼ cup sunflower seeds or pepitas',
    'Dressing:',
    '½ cup low fat natural/Greek yoghurt',
    '2 tablespoons low fat mayonnaise',
    '1 tablespoon Dijon mustard',
    '1 tablespoon lemon juice',
    'Pepper'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: primaryScheme
}

export default meanGreenSalad
