import { Character } from 'lib/types'
import atomicAppleImage from 'public/images/Characters/Fruit/11. Superhero Food - Atomic Apple.webp'
import acesAppleImage from 'public/images/Characters/Fruit/12. Everyday Food - Aces Apple.webp'
import sportyBananaImage from 'public/images/Characters/Fruit/14. Everyday Food - Sporty Banana.webp'
import superFruityImage from 'public/images/Characters/Fruit/13. Superhero Food - Super Fruity.webp'
import superFruityImageGif from 'public/images/Characters/No background images/Super-Fruity-Colour.gif'

import fruityPainterImage from 'public/images/Characters/Fruit/64. Every Day Food - Fruity Painter.webp'
// (unsupported format image?) import fruitMobImage from 'public/images/Characters/Fruit/63. Superhero Food - Fruit Mob.webp'

const acesApple: Character = {
  name: 'Aces Apple',
  image: acesAppleImage.src,
  aliasName: 'Atomic Apple',
  about: 'Simple snack in an edible package',
  aliasImage: atomicAppleImage.src,
  imageGif: atomicAppleImage.src,
  superPowers: 'Contains an army load of antioxidants to fight ilness',
  foodGroup: 'Fruit – Protective foods',
  location: 'Fruity Orchard',
  facing: 'right'
}

const sportyBanana: Character = {
  name: 'Sporty Banana',
  image: sportyBananaImage.src,
  aliasName: 'Super Fruity',
  about: 'Perfect pick me up – snack on the run',
  aliasImage: superFruityImage.src,
  imageGif: superFruityImageGif.src,
  superPowers: 'Packed with potassium to power up the heart',
  foodGroup: 'Fruit – Protective foods',
  location: 'Banana Bunches',
  facing: 'left'
}

const superFruity: Character = {
  name: 'Super Fruity',
  image: superFruityImage.src,
  aliasName: 'Super Fruity',
  about: 'Perfect pick me up – snack on the run',
  aliasImage: superFruityImage.src,
  imageGif: superFruityImage.src,
  superPowers: 'Packed with potassium to power up the heart',
  foodGroup: 'Fruit – Protective foods',
  location: 'Banana Bunches',
  facing: 'right'
}

const fruityPainter: Character = {
  name: 'Fruity Painter',
  image: fruityPainterImage.src,
  aliasName: 'Fruit Mob',
  about: 'Always on hand for a deadly snack.',
  aliasImage: fruityPainterImage.src, //fruitMobImage once it works
  imageGif: fruityPainterImage.src,
  superPowers: 'Rainbow of nutrients jammed with juice',
  foodGroup: 'Fruit – Protective foods',
  location: 'Supply Store',
  facing: 'right'
}

export { acesApple, sportyBanana, superFruity, fruityPainter }
