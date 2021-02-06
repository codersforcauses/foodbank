import { Recipe } from './types'
import SuperSonicDipImg from './Recipe Images/Super Sonic Dip/Super sonic dip final shot.jpg'
import SportyBananaBitesImg from './Recipe Images/Sporty Banana Bites/Sporty banana bites final shot.jpg'
import KPowFrittersImg from './Recipe Images/K-Pow Fritters/K-pow fritters final shot.jpg'

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
  image: SuperSonicDipImg,
  bgColor: 'primary',
  headColor: 'teal',
  textColor: 'white',
  buttonTextColor: 'black'
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
  image: SportyBananaBitesImg,
  bgColor: 'teal',
  headColor: 'primary',
  textColor: 'black',
  buttonTextColor: 'white'
}

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
  image: KPowFrittersImg,
  bgColor: 'orange',
  headColor: 'primary',
  textColor: 'black',
  buttonTextColor: 'white'
}

export { superSonicDip, sportyBananaBites, kPowFritters }
