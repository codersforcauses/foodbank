import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Cheesy Pasta Blast/Final Shot.webp'
import ingredientsImg from 'public/images/recipes/Cheesy Pasta Blast/Ingredients.webp'
import equipmentImg from 'public/images/recipes/Cheesy Pasta Blast/Equipment.webp'
import step1Img from 'public/images/recipes/Cheesy Pasta Blast/Step 1.webp'
import step2Img from 'public/images/recipes/Cheesy Pasta Blast/Step 2.webp'
import step3Img from 'public/images/recipes/Cheesy Pasta Blast/Step 3.webp'
import step4Img from 'public/images/recipes/Cheesy Pasta Blast/Step 4.webp'
import step5Img from 'public/images/recipes/Cheesy Pasta Blast/Step 5.webp'
import { orangeScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
  number: 1,
  image: step1Img,
  description:
    'Measure water, milk, stock powder and macaroni into frypan. Turn frypan on to medium heat, stir gently then cover with lid. ' +
    'Cook for 5 minutes, stirring once. '
}

const step2: RecipeStep = {
  number: 2,
  image: step2Img,
  description:
    'Chop broccoli and carrot into small pieces. Add broccoli, carrot and frozen vegetables to frypan. ' +
    'Stir and put lid back on. Cook for another 5 minutes. '
}

const step3: RecipeStep = {
  number: 3,
  image: step3Img,
  description: 'Grate cheese. Drain tinned tuna with a strainer. '
}

const step4: RecipeStep = {
  number: 4,
  image: step4Img,
  description:
    'Turn frypan to low heat. Add cheese, tuna, ricotta, mustard and pepper to frypan. ' +
    'Cut lemon in half and squeeze juice in to pan. Stir well.'
}

const step5: RecipeStep = {
  number: 5,
  image: step5Img,
  description:
    'Sprinkle parmesan and breadcrumbs over top of pasta. Put lid on frypan, ' +
    'cook until cheese is melted.'
}

const cheesyPastaBlast: Recipe = {
  slug: 'cheesy-pasta-blast',
  name: 'Cheesy Pasta Blast',
  category: ['Main'],
  tags: ['One-pot', 'Pasta', 'Tuna', 'Easy'],
  equipment: [
    'Frypan and lid',
    'Measuring cups',
    'Measuring spoons',
    'Large spoon',
    'Chopping board',
    'Knife',
    'Grater',
    'Can opener',
    'Strainer'
  ],
  ingredients: [
    '2¼ cups water',
    '1¼ cups reduced fat milk',
    '2 teaspoons salt-reduced vegetable stock powder',
    '½ pack (250g) macaroni',
    '1 broccoli',
    '1 carrot',
    '1 cup mixed frozen vegetables',
    '100g reduced fat cheese',
    '425g tin tuna in oil',
    '250g reduced fat ricotta',
    '1 teaspoon Dijon mustard',
    '1 lemon',
    'Pepper',
    '1/3 cup grated parmesan',
    '1/3 cup breadcrumbs'
  ],
  steps: [step1, step2, step3, step4, step5],
  finalShot: finalShot,
  ingredientsImg: ingredientsImg,
  equipmentImg: equipmentImg,
  colorScheme: orangeScheme
}

export default cheesyPastaBlast
