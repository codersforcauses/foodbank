import { Character } from 'lib/types'
import queenPeaImage from 'public/images/Characters/Vegetables/69. Superhero Food - Queen Pea.webp'
import peaPodImage from 'public/images/Characters/Vegetables/70. Everyday Food - Pea Pod.webp'
import queenPeaImagePng from 'public/images/Characters/No background images/Queen Pea.png'

import saucyLadyImage from 'public/images/Characters/Vegetables/35. Superhero Food - Saucy Lady.webp'
import athleticTomatoImage from 'public/images/Characters/Vegetables/36. Everyday Food - Athletic Tomato.webp'
import saucyLadyImagePng from 'public/images/Characters/No background images/Saucy Lady.png'

const peaPod: Character = {
  name: 'Pea Pod',
  image: peaPodImage,
  aliasName: 'Queen Pea',
  about: 'Yummy eaten raw. Pick a pod full of peas straight from the garden.',
  aliasImage: queenPeaImage ,
  imageGif: queenPeaImagePng,
  superPowers: 'Protein packed into a small package',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone, Twisting Vine'
}

const athleticTomato: Character = {
  name: 'Athletic Tomato',
  image: athleticTomatoImage,
  aliasName: 'Saucy Lady',
  about: 'Undercover fruit disguised as a vegetable.',
  aliasImage: saucyLadyImage ,
  imageGif: saucyLadyImagePng,
  superPowers: 'Seriously full of antioxidants to fight illness.',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone – Sprouting Plant'
}


export { peaPod, athleticTomato };
