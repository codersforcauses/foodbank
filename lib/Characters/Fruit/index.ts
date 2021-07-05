import { Character } from 'lib/types'
import atomicAppleImage from './11. Superhero Food - Atomic Apple.webp'
import acesAppleImage from './12. Everyday Food - Aces Apple.webp'
import sportyBananaImage from './14. Everyday Food - Sporty Banana.webp'
import superFruityImage from './13. Superhero Food - Super Fruity.webp'
import superFruityImageGif from '../No background images/Super-Fruity-Colour.gif'


const acesApple: Character = {
  name: 'Aces Apple',
  image: acesAppleImage,
  aliasName: 'Atomic Apple',
  about: 'Simple snack in an edible package',
  aliasImage: atomicAppleImage,
  imageGif: atomicAppleImage,
  superPowers: 'Contains an army load of antioxidants to fight ilness',
  foodGroup: 'Fruit – Protective foods',
  location: 'Fruity Orchard'
}

const sportyBanana: Character = {
  name: 'Sporty Banana',
  image: sportyBananaImage,
  aliasName: 'Super Fruity',
  about: 'Perfect pick me up – snack on the run',
  aliasImage: superFruityImage,
  imageGif: superFruityImageGif,
  superPowers: 'Packed with potassium to power up the heart',
  foodGroup: 'Fruit – Protective foods',
  location: 'Banana Bunches'
}


export { acesApple, sportyBanana };
