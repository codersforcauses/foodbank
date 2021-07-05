import {Recipe, RecipeStep} from 'lib/types'
import finalShot from 'public/images/recipes/Noodle Ninja Salad/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Noodle Ninja Salad/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Noodle Ninja Salad/Equipment.webp'
import step1Img from 'public/images/recipes/Noodle Ninja Salad/Step 1.webp'
import step2Img from 'public/images/recipes/Noodle Ninja Salad/Step 2.webp'
import step3Img from 'public/images/recipes/Noodle Ninja Salad/Step 3.webp'
import step4Img from 'public/images/recipes/Noodle Ninja Salad/Step 4.webp'
import step5Img from 'public/images/recipes/Noodle Ninja Salad/Step 5.webp'
import {orangeScheme} from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Gently pull apart rice noodles and place into a small bowl. Add boiling water and let noodles soften ' +
    'for 5 minutes. Drain using a strainer and place noodles into a large bowl.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Peel zucchini into long strips until you reach the core. Peel carrot into long strips. ' +
    'Add zucchini and carrot strips to the large bowl.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Cut cherry tomatoes in half, cut capsicum into strips and drain corn using a strainer, and add to the bowl. ' +
    'Add bean sprouts and mix well.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Finely grate garlic and juice both halves of the lime. Add garlic, lime juice, sweet chilli sauce and olive oil ' +
    'into a small bowl and combine.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Finely chop mint. Pour dressing over salad, toss to mix through and sprinkle mint on top to serve.'
}


const noodleNinjaSalad: Recipe = {
  slug: 'noodle-ninja-salad',
  name: 'Noodle Ninja Salad',
  category: 'Salads',
  tags: ['Noodles'],
  equipment: [
    '2 small bowls Strainer',
    'Large bowl',
    'Peeler',
    'Chopping',
    'Board',
    'Knife',
    'Can opener',
    'Tongs',
    'Fine grater',
    'Juicer',
    'Measuring Spoons',
    'Spoon'
  ],
  ingredients: [
    '100g thin rice noodles',
    '4 cups boiling water',
    '1 zucchini',
    '1 carrot',
    '1 punnet cherry tomatoes',
    '1 red capsicum',
    '420g tin corn kernels',
    '125g bean sprouts',
    '1 garlic clove',
    '1 lime',
    '3 tablespoons sweet',
    'chilli sauce',
    '2 teaspoons olive oil',
    '½ bunch fresh mint (leaves only)'

  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default noodleNinjaSalad
