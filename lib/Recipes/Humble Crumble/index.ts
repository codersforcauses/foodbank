import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Humble Crumble/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Humble Crumble/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Humble Crumble/Equipment.webp'
import step1Img from 'public/images/recipes/Humble Crumble/Step 1.webp'
import step2Img from 'public/images/recipes/Humble Crumble/Step 2.webp'
import step3Img from 'public/images/recipes/Humble Crumble/Step 3.webp'
import step4Img from 'public/images/recipes/Humble Crumble/Step 4.webp'
import step5Img from 'public/images/recipes/Humble Crumble/Step 5.webp'
import { orangeScheme } from 'lib/colorSchemes'
import { acesApple, fruityPainter } from '@lib/Characters/Fruit'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Topping: Mix the oats, coconut, wheat flakes and cinnamon in a large bowl.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Turn the frypan on to medium heat. Add honey and 2 tablespoons of margarine. Once melted, pour in the topping and stir for 2-3 minutes. ' +
    'Remove mixture from the pan and place back into bowl. Turn frypan off.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Base: Chop apple into small pieces. Turn frypan on to medium heat. Add 1 tablespoon of margarine to frypan. ' +
    'Add apple and stir for 5 minutes until browned.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Add peaches and juice into the frypan. Add 1 teaspoon cinnamon and cornflour, and stir well for 3 minutes.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description: 'Turn off the frypan. Sprinkle topping over the fruit and serve.'
}

const humbleCrumble: Recipe = {
  slug: 'humble-crumble',
  name: 'Humble Crumble',
  category: ['Dessert'],
  tags: ['Apple', 'Dessert', 'Peach'], // apple(s), peach(es) for tags change when i know
  equipment: [
    'Large Bowl',
    'Measuring cups',
    'Measuring spoons',
    'Large Spoon',
    'Frypan',
    'Chopping board',
    'Knife',
    'Can opener'
  ],
  ingredients: [
    '1 cup rolled oats', //toppings how to separate them? ideas?
    '¾ cup shredded coconut',
    '1 cup wheat flake cereal',
    '1 teaspoon ground cinnamon',
    '1 tablespoon honey',
    '2 tablespoons margarine',
    '4 green apples', //base
    '1 tablespoon margarine',
    '825g tin peaches, in juice',
    '1 teaspoon ground cinnamon',
    '1 teaspoon cornflour'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme,
  character: fruityPainter
}

export default humbleCrumble
