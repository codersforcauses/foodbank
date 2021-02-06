import { Recipe, RecipeStep } from 'lib/types'
import finalShot from './Sporty banana bites final shot.jpg'
import ingredientsImg from './Sporty banana bites ingredients.jpg'
import equipmentImg from './Sporty banana bites equipment.jpg'
import step1Img from './Sporty banana bites step 1.jpg'
import step2Img from './Sporty banana bites step 2.jpg'
import step3Img from './Sporty banana bites step 3.jpg'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Peel bananas and put into medium bowl with cream cheese. Mash together until smooth.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Finely chop the dried apricots. Add apricots, cinnamon, honey and rolled oats to bowl. Mix ingredients together well.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Put coconut into small bowl. Roll teaspoons of mixture into balls. Roll balls in coconut to coat. Keep in the fridge.'
}

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
  steps: [step1, step2, step3],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  bgColor: 'teal',
  headColor: 'primary',
  textColor: 'black',
  buttonTextColor: 'white'
}

export default sportyBananaBites
