import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Cool Cucumber Salad/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Cool Cucumber Salad/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Cool Cucumber Salad/Equipment.webp'
import step1Img from 'public/images/recipes/Cool Cucumber Salad/Step 1.webp'
import step2Img from 'public/images/recipes/Cool Cucumber Salad/Step 2.webp'
import step3Img from 'public/images/recipes/Cool Cucumber Salad/Step 3.webp'
import step4Img from 'public/images/recipes/Cool Cucumber Salad/Step 4.webp'
import step5Img from 'public/images/recipes/Cool Cucumber Salad/Step 5.webp'
import { orangeScheme } from 'lib/colorSchemes'
import { mrCucumber } from '@lib/Characters/Vegetables'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Chop lettuce, cucumber and capsicum into small pieces. Finely slice red onion. ' +
    'Slice cherry tomatoes in half.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'In a large bowl mix together lettuce, cucumber, capsicum, onion and tomatoes. Add olives and stir well.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'In a small bowl combine 2 tablespoons of olive oil, 1 tablespoon of vinegar and ½ teaspoon of oregano. ' +
    'Stir with a fork until well combined.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description: 'Pour dressing over the salad and mix well.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Chop feta into bite-sized chunks and spread over the top of the salad.'
}

const coolCucumberSalad: Recipe = {
  slug: 'cool-cucumber-salad',
  name: 'Cool Cucumber Salad',
  category: ['Salad'],
  tags: ['Salad', 'Cucumber', 'Greek Salad'],
  equipment: [
    'Knife',
    'Chopping board Large bowl',
    'Large spoon',
    'Small bowl',
    'Measuring cups',
    'Measuring Spoons',
    'Fork'
  ],
  ingredients: [
    '½ iceberg lettuce',
    '1 cucumber',
    '1 red capsicum',
    '¼ red onion',
    '1 punnet cherry tomatoes',
    '1/3 cup sliced black olives',
    '200g reduced fat feta cheese',
    '2 tablespoons olive oil',
    '1 tablespoon balsamic vinegar',
    '½ teaspoon dried oregano'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme,
  character: mrCucumber
}

export default coolCucumberSalad
