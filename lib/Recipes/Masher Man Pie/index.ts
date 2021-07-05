import {Recipe, RecipeStep} from 'lib/types'
import finalShot from './Final Shot.webp'
import ingredientsImg from './Ingredients.webp'
import equipmentImg from './Equipment.webp'
import step1Img from './Step 1.webp'
import step2Img from './Step 2.webp'
import step3Img from './Step 3.webp'
import step4Img from './Step 4.webp'
import step5Img from './Step 5.webp'
import {orangeScheme} from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Dice onion and garlic. Spray frypan with oil and turn on to a medium heat. Add onion, garlic and beef ' +
  'to the frypan. Cook until browned.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Chop carrot into small pieces. Drain peas and corn with a strainer. Add carrot, peas, corn and stock powder into the frypan. ' +
    'Stir to combine.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Add baked beans into frypan and stir to combine. Turn frypan down to low heat. Grate potatoes.' 
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Spread grated potatoes on top of meat mixture in frypan. Grate cheese. '
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Spread grated cheese on top of meat and potato mixture. Place lid on frypan and cook for 10 minutes or until cheese is melted.'
}


const masherManPie: Recipe = {
  slug: 'masher-man-pie',
  name: 'Masher Man Pie',
  category: 'Main',
  tags: ['Pie', 'Potato', 'Beef', 'Baked Beans'],
  equipment: [
    'Chopping board',
    'Knife',
    'Frypan with lid',
    'Measuring spoons',
    'Strainer',
    'Can opener',
    'Grater'

  ],
  ingredients: [
    '1 brown onion',
    '2 garlic cloves',
    'Spray oil',
    '500g lean beef mince',
    '2 carrots',
    '420g tin peas and corn',
    ' 1 tablespoon salt - reduced beef stock powder',
    '420g tin baked beans',
    '4 medium potatoes',
    '100g reduced fat cheese'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default masherManPie