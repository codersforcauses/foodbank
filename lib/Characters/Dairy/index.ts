import { Character } from 'lib/types'

// placeholder
import atomicAppleImage from 'public/images/Characters/Fruit/11. Superhero Food - Atomic Apple.webp'
import acesAppleImage from 'public/images/Characters/Fruit/12. Everyday Food - Aces Apple.webp'

import speedyCheeseImageGif from 'public/images/characters/No background images/Cheese-Speedy-Colour.gif'

const cheesyCheese: Character = {
  name: 'Cheesy Cheese',
  image: acesAppleImage.src,
  aliasName: 'Speedy Cheese',
  about: 'Chock-a-block with flavour, sliced or grated.',
  aliasImage: atomicAppleImage.src,
  imageGif: speedyCheeseImageGif.src,
  superPowers: 'Crazy full of calcium for super strong bones.',
  foodGroup: 'Dairy foods – body building',
  location: 'Dairy Park',
  facing: 'right'
}

export { cheesyCheese }
