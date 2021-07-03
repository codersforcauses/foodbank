/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Recipe, RecipeStep } from 'lib/types'
import finalShot from './Power-up pizza final shot.webp'
import ingredientsImg from './Power-up pizza ingredients.webp'
import equipmentImg from './Power-up pizza equipment.webp'
import step1Img from './Power-up pizza step 1.webp'
import step2Img from './Power-up pizza step 2.webp'
import step3Img from './Power-up pizza step 3.webp'
import { orangeScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
    number: 1,
    image: step1Img,
    description: 'Sift flour into bowl. Make a well in the centre, add eggs, milk, oil and dried herbs. Use a spoon to mix together until just combined.'
}

const step2: RecipeStep = {
    number: 2, 
    image: step2Img, 
    description: 'Sprinkle a little flour onto a clean surface, knead dough gently until it is smooth. Roll dough into a large r ectangle shape to fit frypan.'
}

const step3: RecipeStep = {
    number: 3,
    image: step3Img, 
    description: 'Spray frypan with oil. Place dough into frypan.'
}

const powerUpPizza: Recipe = {
    slug: 'power-up-pizza', 
    name: 'Power-Up Pizza',
    category: 'Main',
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
        'Â½ red capsicum',
        '6 small mushrooms',
        '1 small bunch fresh',
        'basil',
        '100 g reduced fat',
        'cheese'
    ],
    steps: [step1, step2, step3], 
    finalShot: finalShot,
    ingredientsImg: ingredientsImg,
    equipmentImg: equipmentImg,
    colorScheme: orangeScheme
}

export default powerUpPizza