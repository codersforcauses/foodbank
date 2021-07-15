import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Oodles of Noodles/Oodles of noodles final shot.webp'
import ingredientsImg from 'public/images/recipes/Oodles of Noodles/Oodles of noodles ingredients.webp'
import equipmentImg from 'public/images/recipes/Oodles of Noodles/Oodles of noodles equipment.webp'
import step1Img from 'public/images/recipes/Oodles of Noodles/Oodles of noodles step 1.webp'
import step2Img from 'public/images/recipes/Oodles of Noodles/Oodles of noodles step 2.webp'
import step3Img from 'public/images/recipes/Oodles of Noodles/Oodles of noodles step 3.webp'
import step4Img from 'public/images/recipes/Oodles of Noodles/Oodles of noodles step 4.webp'
import step5Img from 'public/images/recipes/Oodles of Noodles/Oodles of noodles step 5.webp'
import { primaryScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Peel then dice onion and garlic. Turn frypan on to medium heat, spray with oil. Add onion, garlic and mince to frypan. Cook until browned.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Chop snow peas into pieces. Grate zucchini and carrots. Add vegetables to frypan. Cook for 5 minutes or until vegetables a re slightly soft.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description: 'Add coconut, curry powder, stock powder and stir to combine.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description: 'Break up instant noodles into frypan. Stir into mince mixture.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Add milk to frypan. Cook for 5 minutes or until noodles are soft. Add an extra ½ cup of water if needed.'
}

const oodlesOfNoodles: Recipe = {
  slug: 'oodles-of-noodles',
  name: 'Oodles of Noodles',
  category: ['Main'],
  tags: ['Noodles', 'Lunch', 'Dinner', 'Vegetables', 'Chicken'],
  equipment: [
    'Chopping board',
    'Knife',
    'Frypan',
    'Large spoon',
    'Grater',
    'Measuring spoons',
    'Measuring cups'
  ],
  ingredients: [
    '1 brown onion',
    '2 garlic cloves',
    'Spray oil',
    '500 g chicken mince',
    '1 zucchini',
    '100 g snow peas',
    '2 carrots',
    '¼ cup desiccated coconut',
    '2 tablespoons curry powder',
    '1 tablespoon vegetable stock powder',
    '2 instant noodle squares (no sachet)',
    '1 ½ cups reduced fat milk'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: primaryScheme
}

export default oodlesOfNoodles
