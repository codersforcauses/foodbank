import seedrandom from 'seedrandom'
import shuffle from 'shuffle-array'
import { v4 as uuid_v4 } from 'uuid'

export interface Character {
  id?: string
  image: string
  name: string
  isSelected: boolean
  password?: string
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
  const selectedSet = shuffle(GridSet, { copy: true }).slice(0, PASSWORD_LENGTH)
  selectedSet.map(img => {
    img.id = uuid_v4()
    // img.password = randomStringGen(PASSWORD_LENGTH)
    img.password = img.name // For testing purposes
  })
  return selectedSet
}

export default selectSet

const GridSet: Character[] = [
  {
    image: '/images/Characters/Dairy/BlueBoy.jpg',
    name: 'BlueBoy',
    isSelected: false
  },

  {
    image: '/images/Characters/Dairy/MilkMaid.jpg',
    name: 'MilkMaid',
    isSelected: false
  },

  {
    image: '/images/Characters/Dairy/YumYoghurt.jpg',
    name: 'YumYoghurt',
    isSelected: false
  },

  {
    image: '/images/Characters/Dairy/CheesyCheese.jpg',
    name: 'CheesyCheese',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/LeanMeat.jpg',
    name: 'LeanMeat',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/FishCan.jpg',
    name: 'FishCan',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/CheekyChicken.jpg',
    name: 'CheekyChicken',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/RangerRex.jpg',
    name: 'RangerRex',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/HannahGoanna.jpg',
    name: 'HannahGoanna',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/EagerEgg.jpg',
    name: 'EagerEgg',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/FreshFish.jpg',
    name: 'FreshFish',
    isSelected: false
  },
  {
    image: '/images/Characters/Fruit/AcesApple.jpg',
    name: 'AcesApple',
    isSelected: false
  },

  {
    image: '/images/Characters/Fruit/FarmerOrange.jpg',
    name: 'FarmerOrange',
    isSelected: false
  },

  {
    image: '/images/Characters/Fruit/SportyBanana.jpg',
    name: 'SportyBanana',
    isSelected: false
  },

  {
    image: '/images/Characters/Fruit/MelodyMelon.jpg',
    name: 'MelodyMelon',
    isSelected: false
  },

  {
    image: '/images/Characters/Fruit/FruityPainter.jpg',
    name: 'FruityPainter',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/MixedGrain.jpg',
    name: 'MixedGrain',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/HealthyCereal.jpg',
    name: 'HealthyCereal',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/PastaBowl.jpg',
    name: 'PastaBowl',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/OutbackDamper.jpg',
    name: 'OutbackDamper',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/PastaChef.jpg',
    name: 'PastaChef',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/PostiePorridge.jpg',
    name: 'PostiePorridge',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/ArtyCarrot.jpg',
    name: 'ArtyCarrot',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/AthleticTomato.jpg',
    name: 'AthleticTomato',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/TinnedBeans.jpg',
    name: 'TinnedBeans',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/CrunchingCapsicum.jpg',
    name: 'CrunchingCapsicum',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/CoachCarrot.jpg',
    name: 'CoachCarrot',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/MrCucumber.jpg',
    name: 'MrCucumber',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/DJCorn.jpg',
    name: 'DJCorn',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/FootyGirl.jpg',
    name: 'FootyGirl',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/FreshHerbs.jpg',
    name: 'FreshHerbs',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/FrozenVegies.jpg',
    name: 'FrozenVegies',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/GarlicDancer.jpg',
    name: 'GarlicDancer',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/JackarooOnion.jpg',
    name: 'JackarooOnion',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/WorkingSpud.jpg',
    name: 'WorkingSpud',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/MrsBrocc.jpg',
    name: 'MrsBrocc',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/PeaPod.jpg',
    name: 'PeaPod',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/TinnedTradie.jpg',
    name: 'TinnedTradie',
    isSelected: false
  }
]
