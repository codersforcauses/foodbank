import { Character } from 'lib/types'

// placeholder
import atomicAppleImage from 'public/images/Characters/Fruit/11. Superhero Food - Atomic Apple.webp'
import acesAppleImage from 'public/images/Characters/Fruit/12. Everyday Food - Aces Apple.webp'

import noodleNinjaImageGif from 'public/images/characters/No background images/Noodle-Ninja-Colour.gif'
import pastaBlastPng from 'public/images/characters/No background images/pasta blast.png'

const pastaBowl: Character = {
  name: 'Pasta Bowl',
  image: acesAppleImage.src,
  aliasName: 'Noodle Ninja',
  about: 'Comes in cool shapes and sizes',
  aliasImage: atomicAppleImage.src,
  imageGif: noodleNinjaImageGif.src,
  superPowers: 'Powers up your brain and muscles',
  foodGroup: 'Breads and Cereals - Energy Foods',
  location: 'Grain Field',
  facing: 'right'
}

const pastaChef: Character = {
  name: 'Pasta Chef',
  image: acesAppleImage.src,
  aliasName: 'Pasta Blast',
  about: 'Pasta comes in fun shapes like tubes, shells and wagon wheels.',
  aliasImage: atomicAppleImage.src,
  imageGif: pastaBlastPng.src,
  superPowers:
    '5,4,3,2,1 Blast off! Pasta blast is a powerhouse of energy for your body and mind.',
  foodGroup: 'Breads and Cereals - Energy Foods',
  location: 'Grain Field',
  facing: 'left'
}
export { pastaBowl, pastaChef }
