import { Recipe, RecipeStep } from 'lib/types'
import finalShot from './Super sonic dip final shot.webp'
import ingredientsImg from './Super sonic dip ingredients.webp'
import equipmentImg from './Super sonic dip equipment.webp'
import step1Img from './Super sonic dip step 1.webp'
import step2Img from './Super sonic dip step 2.webp'
import step3Img from './Super sonic dip step 3.webp'
import { primaryScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Chop tomato into very small pieces. Grate garlic into bowl.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Measure yoghurt, cream cheese, relish, cumin and paprika into the bowl. Add chopped tomato and mix until well combined.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Peel carrots. Chop all vegetables into dipping sticks. Place vegetables onto serving platter with dip.'
}

const superSonicDip: Recipe = {
  slug: 'super-sonic-dip',
  name: 'Super Sonic Dip',
  category: 'Snacks',
  tags: [
    'Dip',
    'Vegetables',
    'Snacks',
    'Blah',
    'De',
    'blah',
    'even',
    'more',
    'tags',
    'nice'
  ],
  equipment: [
    'Chopping board',
    'Knife',
    'Fine grater',
    'Bowl',
    'Measuring cups',
    'Measuring spoons',
    'Spoon',
    'Peeler',
    'Serving platter'
  ],
  ingredients: [
    '1 tomato',
    '1 clove garlic',
    '1/2 cup low fat natural/Greek yoghurt',
    '1/2 cup extra light cream cheese',
    '1/4 cup tomato relish or Mexican salsa',
    '1/2 teaspoon paprika',
    '2 carrots',
    '150g snow peas',
    '1 red capsicum',
    '1 punnet cherry tomatoes'
  ],
  steps: [step1, step2, step3],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: primaryScheme
}

export default superSonicDip
