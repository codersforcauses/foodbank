import { Recipe } from 'lib/types'
import finalShot from './Sporty banana bites final shot.jpg'
import ingredientsImg from './Sporty banana bites ingredients.jpg'
import equipmentImg from './Sporty banana bites equipment.jpg'

const sportyBananaBites: Recipe = {
  slug: 'sporty-banana-bites',
  name: 'Sport Banana Bites',
  category: 'Snacks',
  tags: ['Snack', 'Dessert', 'Banana'],
  equipment: [
    'Medium bowl',
    'Fork/potato masher',
    'Mixing spoon',
    'Measuring cups',
    'Measuring spoons',
    'Small bowl',
    'Chopping board',
    'Knife'
  ],
  ingredients: [
    '2 medium bananas',
    '125g light cream',
    '1/2 cup dried apricots',
    '1 teaspoon cinnamon',
    '2 tablespoons honey',
    '2 cups rolled oats',
    '1/4 cup desiccated coconut'
  ],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  bgColor: 'teal',
  headColor: 'primary',
  textColor: 'black',
  buttonTextColor: 'white'
}

export default sportyBananaBites
