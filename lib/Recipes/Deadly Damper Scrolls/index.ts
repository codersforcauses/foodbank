import {Recipe, RecipeStep} from 'lib/types'
import finalShot from 'public/images/recipes/Deadly Damper Scrolls/Deadly damper scrolls final shot.webp'
import ingredientsImg from 'public/images/recipes/Deadly Damper Scrolls/Deadly damper scrolls ingredients.webp'
import equipmentImg from 'public/images/recipes/Deadly Damper Scrolls/Deadly damper scrolls equipment.webp'
import step1Img from 'public/images/recipes/Deadly Damper Scrolls/Deadly damper scrolls step 1.webp'
import step2Img from 'public/images/recipes/Deadly Damper Scrolls/Deadly damper scrolls step 2.webp'
import step3Img from 'public/images/recipes/Deadly Damper Scrolls/Deadly damper scrolls step 3.webp'
import step4Img from 'public/images/recipes/Deadly Damper Scrolls/Deadly damper scrolls step 4.webp'
import step5Img from 'public/images/recipes/Deadly Damper Scrolls/Deadly damper scrolls step 5.webp'
import {orangeScheme} from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description: 'Heat oven to 180oC. Line baking tray with baking paper or spray with oil. ' +
    'Sift flour and cinnamon into a large bowl. Add yoghurt and honey. Mix together to form a dough.'
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Sprinkle extra flour on to a clean bench. Tip out dough onto bench then gently knead. ' +
    'Roll the dough into a large square shape, roughly fingertip thickness.'
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description:
    'Grate apples. Spread jam over the dough (and mashed banana if using). Sprinkle grated apple over the top. ' +
    'Starting from the long side closest to you, roll the dough to form a log.'
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Cut rolled log into 12 even slices.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Place scrolls cut-side up on baking tray. Bake in oven for 15-20 minutes or until golden brown.\n'
}


const deadlyDumperScrolls: Recipe = {
  slug: 'deadly-damper-scrolls',
  name: 'Deadly Damper Scrolls',
  category: 'Snack',
  tags: ['Sweet', 'snack', 'damper', 'apple'],
  equipment: [
    'Oven',
    'Baking tray',
    'Baking paper',
    'Large mixing bowl',
    'Measuring spoons',
    'Measuring cups',
    'Mixing spoon',
    'Sieve',
    'Grater',
    'Chopping board',
    'Rolling pin'
  ],
  ingredients: [
    'Spray oil',
    '2 cups self-raising flour (plus extra for kneading)',
    '2 teaspoons cinnamon',
    '1 cup low fat natural/Greek yoghurt',
    '1 tablespoon honey',
    '2 apples',
    '2 tablespoons jam',
    '2 mashed bananas'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default deadlyDumperScrolls
