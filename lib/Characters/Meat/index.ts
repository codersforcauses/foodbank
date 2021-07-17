import { Character } from 'lib/types'

// placeholder
import atomicAppleImage from 'public/images/Characters/Fruit/11. Superhero Food - Atomic Apple.webp'
import acesAppleImage from 'public/images/Characters/Fruit/12. Everyday Food - Aces Apple.webp'

import beefyBoyImageGif from 'public/images/Characters/No background images/Beefy-Boy-Colour.gif'

const leanMeat: Character = {
  name: 'Lean Meat',
  image: acesAppleImage.src,
  aliasName: 'Beefy Boy',
  about: 'Try trimmed and terrific beef in a hearty stew.',
  aliasImage: atomicAppleImage.src,
  imageGif: beefyBoyImageGif.src,
  superPowers: 'Jam-packed with protein and iron to build muscles.',
  foodGroup: 'Meat/Protein – body building',
  location: 'Grazing Land',
  facing: 'left'
}

export { leanMeat }
