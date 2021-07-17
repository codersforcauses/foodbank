import { Recipe, RecipeStep } from 'lib/types'
import finalShot from "public/images/recipes/Rockin' Rice Pudding/Rockin' Rice Pudding final shot.webp"
import ingredientsImg from "public/images/recipes/Rockin' Rice Pudding/Rockin' Rice Pudding ingredients.webp"
import equipmentImg from "public/images/recipes/Rockin' Rice Pudding/Rockin' Rice Pudding equipment.webp"
import step1Img from "public/images/recipes/Rockin' Rice Pudding/Rockin' Rice Pudding step 1.webp"
import step2Img from "public/images/recipes/Rockin' Rice Pudding/Rockin' Rice Pudding step 2.webp"
import step3Img from "public/images/recipes/Rockin' Rice Pudding/Rockin' Rice Pudding step 3.webp"
import step4Img from "public/images/recipes/Rockin' Rice Pudding/Rockin' Rice Pudding step 4.webp"
import step5Img from "public/images/recipes/Rockin' Rice Pudding/Rockin' Rice Pudding step 5.webp"
import { orangeScheme } from 'lib/colorSchemes'
import { fruityPainter } from '@lib/Characters/Fruit'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Gently pull apart rice noodles and place into a small bowl. Add boiling water and let noodles soften ' +
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

const rockinRicePudding: Recipe = {
  slug: 'rockin-rice-pudding',
  name: 'Rockin’ Rice Pudding',
  category: ['Dessert'],
  tags: ['Rice', 'Fruit', 'Sweet'],
  equipment: [
    'Frypan and lid',
    'Measuring cups',
    'Measuring spoons',
    'Large bowl',
    'Mixing spoon',
    'Fork or potato masher',
    'Sieve',
    'Can opener'
  ],
  ingredients: [
    '3/4 cup Arborio rice',
    '1 1/2 cup water',
    '1 cup low fat milk',
    '2 teaspoons all spice or cinnamon',
    '1 teaspoon vanilla essence',
    '800 g tin fruit, in juice',
    '3 bananas',
    '2 tablespoons honey',
    '2 tablespoons coconut'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme,
  character: fruityPainter
}

export default rockinRicePudding
