import seedrandom from 'seedrandom'
import shuffle from 'shuffle-array'
import { v4 as uuid_v4 } from 'uuid'

export interface Character {
  id?: string
  image: string
  name: string
  password?: string
  isSelected: boolean
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
    name: 'Milk Maid',
    isSelected: false
  },

  {
    image: '/images/Characters/Dairy/YumYoghurt.jpg',
    name: 'Yum Yoghurt',
    isSelected: false
  },

  {
    image: '/images/Characters/Dairy/CheesyCheese.jpg',
    name: 'Cheesy Cheese',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/LeanMeat.jpg',
    name: 'Lean Meat',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/FishCan.jpg',
    name: 'Fish Can',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/CheekyChicken.jpg',
    name: 'Cheeky Chicken',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/RangerRex.jpg',
    name: 'Ranger Rex',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/HannahGoanna.jpg',
    name: 'Hannah Goanna',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/EagerEgg.jpg',
    name: 'Eager Egg',
    isSelected: false
  },

  {
    image: '/images/Characters/Meat/FreshFish.jpg',
    name: 'Fresh Fish',
    isSelected: false
  },
  {
    image: '/images/Characters/Fruit/AcesApple.jpg',
    name: 'Aces Apple',
    isSelected: false
  },

  {
    image: '/images/Characters/Fruit/FarmerOrange.jpg',
    name: 'Farmer Orange',
    isSelected: false
  },

  {
    image: '/images/Characters/Fruit/SportyBanana.jpg',
    name: 'Sporty Banana',
    isSelected: false
  },

  {
    image: '/images/Characters/Fruit/MelodyMelon.jpg',
    name: 'Melody Melon',
    isSelected: false
  },

  {
    image: '/images/Characters/Fruit/FruityPainter.jpg',
    name: 'Fruity Painter',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/MixedGrain.jpg',
    name: 'Mixed Grain',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/HealthyCereal.jpg',
    name: 'Healthy Cereal',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/PastaBowl.jpg',
    name: 'Pasta Bowl',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/OutbackDamper.jpg',
    name: 'Outback Damper',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/PastaChef.jpg',
    name: 'Pasta Chef',
    isSelected: false
  },

  {
    image: '/images/Characters/Grains/PostiePorridge.jpg',
    name: 'Postie Porridge',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/ArtyCarrot.jpg',
    name: 'Arty Carrot',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/AthleticTomato.jpg',
    name: 'Athletic Tomato',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/TinnedBeans.jpg',
    name: 'Tinned Beans',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/CrunchingCapsicum.jpg',
    name: 'Crunching Capsicum',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/CoachCarrot.jpg',
    name: 'Coach Carrot',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/MrCucumber.jpg',
    name: 'Mr Cucumber',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/DJCorn.jpg',
    name: 'DJ Corn',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/FootyGirl.jpg',
    name: 'Footy Girl',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/FreshHerbs.jpg',
    name: 'Fresh Herbs',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/FrozenVegies.jpg',
    name: 'Frozen Vegies',
    isSelected: false
  },

  {
    image: '/images/Characters/Vegetables/GarlicDancer.jpg',
    name: 'Garlic Dancer',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/JackarooOnion.jpg',
    name: 'Jackaroo Onion',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/WorkingSpud.jpg',
    name: 'Working Spud',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/MrsBrocc.jpg',
    name: 'Mrs Brocc',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/PeaPod.jpg',
    name: 'Pea Pod',
    isSelected: false
  },
  {
    image: '/images/Characters/Vegetables/TinnedTradie.jpg',
    name: 'Tinned Tradie',
    isSelected: false
  }
]
