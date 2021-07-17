import { Character } from 'lib/types'
import queenPeaImage from 'public/images/Characters/Vegetables/69. Superhero Food - Queen Pea.webp'
import peaPodImage from 'public/images/Characters/Vegetables/70. Everyday Food - Pea Pod.webp'
import queenPeaImagePng from 'public/images/Characters/No background images/Queen Pea.png'

import saucyLadyImage from 'public/images/Characters/Vegetables/35. Superhero Food - Saucy Lady.webp'
import athleticTomatoImage from 'public/images/Characters/Vegetables/36. Everyday Food - Athletic Tomato.webp'
import saucyLadyImagePng from 'public/images/Characters/No background images/Saucy Lady.png'

import mrCucumberImage from 'public/images/Characters/Vegetables/72. Everyday Food - Mr Cucumber.webp'
import coolCucumberImage from 'public/images/characters/Vegetables/71. Superhero Food - Cool Cucumber.webp'
import coolCucumberImagePng from 'public/images/characters/Vegetables/71. Superhero Food - Cool Cucumber.webp'

import crunchingCapsicumImage from 'public/images/Characters/Vegetables/42. Everyday Food - Crunching Capsicum.webp'
import captainCapsicumImage from 'public/images/Characters/Vegetables/41. Superhero Food - Captain Capsicum.webp'

import freshHerbsImage from 'public/images/Characters/Vegetables/52. Everyday Food - Fresh Herbs.webp'
import herbaliciousImage from 'public/images/Characters/Vegetables/51. Superhero Foods - Herbalicious.webp'

import mrsBroccImage from 'public/images/Characters/Vegetables/8. Everyday Food - Mrs Brocc.webp'
import meanGreenImage from 'public/images/Characters/Vegetables/7. Superhero Food - Mean Green.webp'
import meanGreenImageGif from 'public/images/Characters/No background images/Mean-Green-Colour.gif'

import footyGirlImage from 'public/images/Characters/Vegetables/60. Everyday Food - Footy Girl.webp'
import superSweetPotatoImage from 'public/images/Characters/Vegetables/59. Superhero Food - Super Sweet Potato.webp'

import workingSpudImage from 'public/images/Characters/Vegetables/32. Everyday Food - Working Spud.webp'
import masherManImage from 'public/images/Characters/Vegetables/31. Superhero Food - Masher Man.webp'
import masherManImageGif from 'public/images/Characters/No background images/Masherman-Colour.gif'

import tinnedTradieImage from 'public/images/Characters/Vegetables/62. Everyday Food - Tinned Tradie.webp'
import vegieSquadImage from 'public/images/Characters/Vegetables/61. Superhero Food - Vegie Squad.webp'

import garlicDancerImage from 'public/images/Characters/Vegetables/48. Everyday Food - Garlic Dancer.webp'
import garlicShieldImage from 'public/images/Characters/Vegetables/47. Superhero Food - Garlic Shield.webp'

const garlicDancer: Character = {
  name: 'Garlic Dancer',
  image: garlicDancerImage.src,
  aliasName: 'Garlic Shield',
  about: 'Flavours food for tasty tucker.',
  aliasImage: garlicShieldImage.src,
  imageGif: garlicShieldImage.src,
  superPowers: 'Protects the body against rascal bacteria.',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone - Bursting Bulb',
  facing: 'left'
}

const tinnedTradie: Character = {
  name: 'Tinned Tradie',
  image: tinnedTradieImage.src,
  aliasName: 'Vegie Squad',
  about: 'Convenience contained in a can.',
  aliasImage: vegieSquadImage.src,
  imageGif: vegieSquadImage.src,
  superPowers: 'Builds a super strong body with an army of vitamins.',
  foodGroup: 'Vegetables – protective foods',
  location: 'Supply Store',
  facing: 'right'
}

const workingSpud: Character = {
  name: 'Working Spud',
  image: workingSpudImage.src,
  aliasName: 'Masher Man',
  about: 'Go for stuffed spuds for a tasty twist.',
  aliasImage: masherManImage.src,
  imageGif: masherManImageGif.src,
  superPowers: 'Packed full of carbs, he’s energy for your body and brain.',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone – Hidden Root',
  facing: 'right'
}

const footyGirl: Character = {
  name: 'Footy Girl',
  image: footyGirlImage.src,
  aliasName: 'Super Sweet Potato',
  about: 'Sweet taste roasted or mashed',
  aliasImage: superSweetPotatoImage.src,
  imageGif: superSweetPotatoImage.src,
  superPowers: 'Stacks of Vitamin A for seeing in the dark',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone – Bursting Bulb',
  facing: 'left'
}

const mrsBrocc: Character = {
  name: 'Mrs Brocc',
  image: mrsBroccImage.src,
  aliasName: 'Mean Green',
  about: 'Green goodness shaped like little trees',
  aliasImage: meanGreenImage.src,
  imageGif: meanGreenImageGif.src,
  superPowers: 'Bursting with folate to keep your body’s cells healthy.',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone – Sprouting soil',
  facing: 'left'
}

const freshHerbs: Character = {
  name: 'Fresh Herbs',
  image: freshHerbsImage.src,
  aliasName: 'Herbalicious Salad',
  about: 'Adds fabulous flavour to food',
  aliasImage: herbaliciousImage.src,
  imageGif: herbaliciousImage.src,
  superPowers: 'Perfect way to pack in taste. ',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone – Sprouting Plant',
  facing: 'right'
}

const crunchingCapsicum: Character = {
  name: 'Crunching Capsicum',
  image: crunchingCapsicumImage.src,
  aliasName: 'Captain Capsicum',
  about: 'Crunchy and munchy eaten raw or cooked.',
  aliasImage: captainCapsicumImage.src,
  imageGif: captainCapsicumImage.src,
  superPowers: 'Oodles of Vitamin C in a rainbow of colours.',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone – Sprouting Plant',
  facing: 'right'
}

const peaPod: Character = {
  name: 'Pea Pod',
  image: peaPodImage.src,
  aliasName: 'Queen Pea',
  about: 'Yummy eaten raw. Pick a pod full of peas straight from the garden.',
  aliasImage: queenPeaImage.src,
  imageGif: queenPeaImagePng.src,
  superPowers: 'Protein packed into a small package',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone, Twisting Vine',
  facing: 'right'
}

const athleticTomato: Character = {
  name: 'Athletic Tomato',
  image: athleticTomatoImage.src,
  aliasName: 'Saucy Lady',
  about: 'Undercover fruit disguised as a vegetable.',
  aliasImage: saucyLadyImage.src,
  imageGif: saucyLadyImagePng.src,
  superPowers: 'Seriously full of antioxidants to fight illness.',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone – Sprouting Plant',
  facing: 'left'
}

const mrCucumber: Character = {
  name: 'Mr Cucumber',
  image: mrCucumberImage.src,
  aliasName: 'Cool Cucumber',
  about: 'A tasty and crunchy snack to help you cool down. ',
  aliasImage: coolCucumberImage.src,
  imageGif: coolCucumberImage.src,
  superPowers: 'High amounts of water helps to keep you hydrated. ',
  foodGroup: 'Vegetables – protective foods',
  location: 'Vegie Zone – Twisting Vine',
  facing: 'right'
}

export {
  peaPod,
  athleticTomato,
  crunchingCapsicum,
  mrCucumber,
  freshHerbs,
  mrsBrocc,
  footyGirl,
  workingSpud,
  tinnedTradie,
  garlicDancer
}
