import { Recipe } from 'lib/types'
import finalShot from './K-pow fritters final shot.jpg'
import ingredientsImg from './K-pow fritters ingredients.jpg'
import equipmentImg from './K-pow fritters equipment.jpg'

const kPowFritters: Recipe = {
  slug: 'k-pow-fritters',
  name: 'K-pow Fritters',
  category: 'Snacks/Main',
  tags: ['Corn', 'Vegetables', 'Fritters', 'Lunch'],
  equipment: [
    'Bowl',
    'Can opener',
    'Whisk/fork',
    'Chopping board',
    'Knife',
    'Grater',
    'Measuring cups',
    'Mixing spoon',
    'Frypan',
    'Spatula'
  ],
  ingredients: [
    '4 eggs',
    '400g light cream',
    '1/2 cup dried apricots',
    '1 teaspoon cinnamon',
    '2 tablespoons honey',
    '2 cups rolled oats',
    '1/4 cup desiccated coconut'
  ],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  bgColor: 'orange',
  headColor: 'primary',
  textColor: 'black',
  buttonTextColor: 'white'
}

export default kPowFritters
