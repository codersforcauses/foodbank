import { Recipe, RecipeStep } from 'lib/types'
import finalShot from './Legendary lasagne final shot.webp'
import ingredientsImg from './Legendary lasagne ingredients.webp'
import equipmentImg from './Legendary lasagne equipment.webp'
import step1Img from './Legendary lasagne step 1.webp'
import step2Img from './Legendary lasagne step 2.webp'
import step3Img from './Legendary lasagne step 3.webp'
import step4Img from './Legendary lasagne step 4.webp'
import step5Img from './Legendary lasagne step 5.webp'
import { primaryScheme } from 'lib/colorSchemes'

const step1: RecipeStep = {
    number: 1,
    image: step1Img,
    description: 'Meat Sauce: Drain and rinse beans, place in bowl and mash with a fork. Finely dice onion and garlic. Turn frypan on to medium heat and spray with oil. Add onion, garlic and mince, cook until browned.'
}

const step2: RecipeStep = {
    number: 2, 
    image: step2Img, 
    description: 'Grate carrot and zucchini, add to frypan with mashed beans, passata, beef stock powder, water, tomato paste and herbs. Stir together, then place lid on frypan and cook on low heat for 10 minutes.'
}

const step3: RecipeStep = {
    number: 3,
    image: step3Img, 
    description: 'Break lasagne sheets into pieces, add to frypan, making sure they are covered with meat sauce.'
}

const step4: RecipeStep = {
    number: 4,
    image: step4Img, 
    description: 'Cheese sauce: Grate cheese. In a bowl, mix half the grated cheese together with ricotta, milk and nutmeg.'
}

const step5: RecipeStep = {
    number: 5,
    image: step5Img, 
    description: 'Evenly spread cheese sauce over the top of the meat sauce and sprinkle with remaining grated cheese. Place lid on frypan and cook on low for 10 minutes or until cheese is melted.'
}

const legendaryLasagne: Recipe = {
    slug: 'legendary-lasagne', 
    name: 'Legendary Lasagne',
    category: 'Main',
    tags: ['Pasta', 'Vegetables', 'Meat'],
    equipment: ['Can opener', 'Strainer', 'Fork/potato masher', '2 bowls', 'Knife',
     'Chopping board', 'Measuring cups', 'Measuring spoons', 'Grater', 'Stirring spoon', 'Frypan with lid'], 
    ingredients: ['Meat Sauce:', '400 g tin kidney beans', '1 brown onion', '2 garlic cloves', 'Spray oil', 
    '500 g lean beef mince', '1 carrot', '1 zucchini', '700 mL tomato passata (or 800 g tin crushed tomato)', 
    '1 teaspoon beef stock powder', '1 cup water', '1 tablespoon tomato paste', 
    '1 tablespoon dried mixed herbs (or handful of fresh herbs)', '250 g (1/2 a packet) lasagne sheets', 
    'Cheese sauce:', '250 g reduced fat ricotta', '½ cup low fat milk', '½ teaspoon nutmeg', '100 g reduced fat cheese'],
    steps: [step1, step2, step3, step4, step5], 
    finalShot: finalShot,
    ingredientsImg: ingredientsImg,
    equipmentImg: equipmentImg,
    colorScheme: primaryScheme
}

export default legendaryLasagne;