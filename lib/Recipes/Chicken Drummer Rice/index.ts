import { Recipe, RecipeStep } from 'lib/types'
import finalShot from 'public/images/recipes/Chicken Drummer Rice/Chicken drummer rice final shot.webp'
import ingredientsImg from 'public/images/recipes/Chicken Drummer Rice/Chicken drummer rice ingredients.webp'
import equipmentImg from 'public/images/recipes/Chicken Drummer Rice/Chicken drummer rice equipment.webp'
import step1Img from 'public/images/recipes/Chicken Drummer Rice/Chicken drummer rice step 1.webp'
import step2Img from 'public/images/recipes/Chicken Drummer Rice/Chicken drummer rice step 2.webp'
import step3Img from 'public/images/recipes/Chicken Drummer Rice/Chicken drummer rice step 3.webp'
import step4Img from 'public/images/recipes/Chicken Drummer Rice/Chicken drummer rice step 4.webp'
import step5Img from 'public/images/recipes/Chicken Drummer Rice/Chicken drummer rice step 5.webp'
import { primaryScheme } from 'lib/colorSchemes'


const step1: RecipeStep = {
    number: 1,
    image: step1Img,
    description: 'Peel then dice onion and garlic finely. Chop capsicum into small pieces. On a separate board chop chicken into bite-sized pieces.'
}

const step2: RecipeStep = {
    number: 2, 
    image: step2Img, 
    description: 'Turn frypan on to medium heat and spray with oil. Add chicken, onion, garlic and capsicum to frypan, cook for 3 minutes until brown. Add paprika and stir.'
}

const step3: RecipeStep = {
    number: 3,
    image: step3Img, 
    description: 'Add rice, chicken stock powder and water to frypan, bring to the boil. Put lid on frypan and cook on low for 10 minutes, stirring once.'
}

const step4: RecipeStep = {
    number: 4,
    image: step4Img, 
    description: 'Add frozen peas, tomato paste and tinned tomatoes. Put lid on and cook on low for another 10 minutes, stirring once.'
}

const step5: RecipeStep = {
    number: 5,
    image: step5Img, 
    description: 'Add chilli powder for a spicy twist.'
}

const chickenDrummerRice: Recipe = {
    slug: 'chicken-drummer-rice', 
    name: 'Chicken Drummer Rice',
    category: ['Main'],
    tags: ['Chicken', 'Rice', 'Vegetables'],
    equipment: ['2 chopping boards', 'Knife', 'Frypan with lid', 'Stirring spoon', 'Measuring spoons', 'Measuring cups'], 
    ingredients: ['1 brown onion', '2 garlic cloves', '1 red capsicum', '2 chicken breasts', 'Spray oil', '1 tablespoon paprika',
    '1 cup medium or short grain rice', '2 teaspoons salt reduced chicken stock powder', '4 Â½ cups water', '2 teaspoons tomato paste', 
    '400 g tin diced tomatoes', '1 lemon', 'Â¼ cup fresh parsley'],
    steps: [step1, step2, step3, step4, step5], 
    finalShot: finalShot,
    ingredientsImg: ingredientsImg,
    equipmentImg: equipmentImg,
    colorScheme: primaryScheme
}

export default chickenDrummerRice;
