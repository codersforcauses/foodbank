import seedrandom from 'seedrandom'
import shuffle from 'shuffle-array'
import { v4 as uuid_v4 } from 'uuid'

export interface Character {
  id?: string
  image: string
  name: string
  password?: string
  isSelected?: boolean
}

const PASSWORD_LENGTH = 9

const randomStringGen = (length: number) => {
  let result = ''
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
const selectSet = (seed: string) => {
  seedrandom(seed, { global: true })
  const selectedSet: Character[] = shuffle(GridSet, { copy: true }).slice(
    0,
    PASSWORD_LENGTH
  )
  selectedSet.map(img => {
    img.id = uuid_v4()
    // img.password = randomStringGen(PASSWORD_LENGTH)
    img.password = img.name // For testing purposes
    img.isSelected = false
  })
  return selectedSet
}

export default selectSet

const GridSet: Character[] = [
  {
    image: '/images/Characters/Dairy/BlueBoy.jpg',
    name: 'BlueBoy'
  },

  {
    image: '/images/Characters/Dairy/MilkMaid.jpg',
    name: 'MilkMaid'
  },

  {
    image: '/images/Characters/Dairy/YumYoghurt.jpg',
    name: 'YumYoghurt'
  },

  {
    image: '/images/Characters/Dairy/CheesyCheese.jpg',
    name: 'CheesyCheese'
  },

  {
    image: '/images/Characters/Meat/LeanMeat.jpg',
    name: 'LeanMeat'
  },

  {
    image: '/images/Characters/Meat/FishCan.jpg',
    name: 'FishCan'
  },

  {
    image: '/images/Characters/Meat/CheekyChicken.jpg',
    name: 'CheekyChicken'
  },

  {
    image: '/images/Characters/Meat/RangerRex.jpg',
    name: 'RangerRex'
  },

  {
    image: '/images/Characters/Meat/HannahGoanna.jpg',
    name: 'HannahGoanna'
  },

  {
    image: '/images/Characters/Meat/EagerEgg.jpg',
    name: 'EagerEgg'
  },

  {
    image: '/images/Characters/Meat/FreshFish.jpg',
    name: 'FreshFish'
  },
  {
    image: '/images/Characters/Fruit/AcesApple.jpg',
    name: 'AcesApple'
  },

  {
    image: '/images/Characters/Fruit/FarmerOrange.jpg',
    name: 'FarmerOrange'
  },

  {
    image: '/images/Characters/Fruit/SportyBanana.jpg',
    name: 'SportyBanana'
  },

  {
    image: '/images/Characters/Fruit/MelodyMelon.jpg',
    name: 'MelodyMelon'
  },

  {
    image: '/images/Characters/Fruit/FruityPainter.jpg',
    name: 'FruityPainter'
  },

  {
    image: '/images/Characters/Grains/MixedGrain.jpg',
    name: 'MixedGrain'
  },

  {
    image: '/images/Characters/Grains/HealthyCereal.jpg',
    name: 'HealthyCereal'
  },

  {
    image: '/images/Characters/Grains/PastaBowl.jpg',
    name: 'PastaBowl'
  },

  {
    image: '/images/Characters/Grains/OutbackDamper.jpg',
    name: 'OutbackDamper'
  },

  {
    image: '/images/Characters/Grains/PastaChef.jpg',
    name: 'PastaChef'
  },

  {
    image: '/images/Characters/Grains/PostiePorridge.jpg',
    name: 'PostiePorridge'
  },

  {
    image: '/images/Characters/Vegetables/ArtyCarrot.jpg',
    name: 'ArtyCarrot'
  },

  {
    image: '/images/Characters/Vegetables/AthleticTomato.jpg',
    name: 'AthleticTomato'
  },

  {
    image: '/images/Characters/Vegetables/TinnedBeans.jpg',
    name: 'TinnedBeans'
  },

  {
    image: '/images/Characters/Vegetables/CrunchingCapsicum.jpg',
    name: 'CrunchingCapsicum'
  },

  {
    image: '/images/Characters/Vegetables/CoachCarrot.jpg',
    name: 'CoachCarrot'
  },

  {
    image: '/images/Characters/Vegetables/MrCucumber.jpg',
    name: 'MrCucumber'
  },

  {
    image: '/images/Characters/Vegetables/DJCorn.jpg',
    name: 'DJCorn'
  },

  {
    image: '/images/Characters/Vegetables/FootyGirl.jpg',
    name: 'FootyGirl'
  },

  {
    image: '/images/Characters/Vegetables/FreshHerbs.jpg',
    name: 'FreshHerbs'
  },

  {
    image: '/images/Characters/Vegetables/FrozenVegies.jpg',
    name: 'FrozenVegies'
  },

  {
    image: '/images/Characters/Vegetables/GarlicDancer.jpg',
    name: 'GarlicDancer'
  },
  {
    image: '/images/Characters/Vegetables/JackarooOnion.jpg',
    name: 'JackarooOnion'
  },
  {
    image: '/images/Characters/Vegetables/WorkingSpud.jpg',
    name: 'WorkingSpud'
  },
  {
    image: '/images/Characters/Vegetables/MrsBrocc.jpg',
    name: 'MrsBrocc'
  },
  {
    image: '/images/Characters/Vegetables/PeaPod.jpg',
    name: 'PeaPod'
  },
  {
    image: '/images/Characters/Vegetables/TinnedTradie.jpg',
    name: 'TinnedTradie'
  }
]
