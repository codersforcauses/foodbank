import { Recipe } from 'lib/types'
import finalShot from './Super sonic dip final shot.jpg'
import ingredientsImg from './Super sonic dip ingredients.jpg'
import equipmentImg from './Super sonic dip equipment.jpg'

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
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  bgColor: 'primary',
  headColor: 'teal',
  textColor: 'white',
  buttonTextColor: 'black'
}

export default superSonicDip
