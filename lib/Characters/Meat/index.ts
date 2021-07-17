import { Character } from 'lib/types'

// placeholder
import atomicAppleImage from 'public/images/Characters/Fruit/11. Superhero Food - Atomic Apple.webp'
import acesAppleImage from 'public/images/Characters/Fruit/12. Everyday Food - Aces Apple.webp'

import beefyBoyImageGif from 'public/images/Characters/No background images/Beefy-Boy-Colour.gif'

import cheekyChickenImage from 'public/images/Characters/Meat/44. Everyday Food - Cheeky Chicken.webp'
import chickenDrummerImage from 'public/images/Characters/Meat/43. Superhero Food - Chicken Drummer.webp'

const chickenDrummer: Character = {
  name: 'Cheeky Chicken',
  image: cheekyChickenImage.src,
  aliasName: 'Chicken Drummer',
  about: 'A scrumptious way to help you beat hunger at lunch or dinner.',
  aliasImage: chickenDrummerImage.src,
  imageGif: chickenDrummerImage.src,
  superPowers: 'Chock - full of protein for healthy skin, nails and hair.',
  foodGroup: 'Meat/Protein – body building',
  location: 'Clucky Coup',
  facing: 'left'
}

const cheekyChicken: Character = {
  name: 'Cheeky Chicken',
  image: cheekyChickenImage.src,
  aliasName: 'Chicken Drummer',
  about: 'A scrumptious way to help you beat hunger at lunch or dinner.',
  aliasImage: chickenDrummerImage.src,
  imageGif: cheekyChickenImage.src,
  superPowers: 'Chock - full of protein for healthy skin, nails and hair.',
  foodGroup: 'Meat/Protein – body building',
  location: 'Clucky Coup',
  facing: 'left'
}

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

export { leanMeat, cheekyChicken, chickenDrummer }
