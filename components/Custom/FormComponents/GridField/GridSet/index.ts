import seedrandom from 'seedrandom'
import shuffle from 'shuffle-array'
import { v4 as uuid_v4 } from 'uuid'

export interface Character {
  id?: string
  image: string
  name: string
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
  const selectedSet: Character[] = shuffle(GridSet, { copy: true }).slice(
    0,
    PASSWORD_LENGTH
  )
  selectedSet.map(img => {
    img.id = uuid_v4()
    img.password = randomStringGen(PASSWORD_LENGTH)
  })
  return selectedSet
}

export default selectSet

const GridSet: Character[] = [
  {
    image: '/images/Characters/Dairy/BlueBoy.jpg',
    name: 'Blue Boy'
  },

  {
    image: '/images/Characters/Dairy/MilkMaid.jpg',
    name: 'Milk Maid'
  },

  {
    image: '/images/Characters/Dairy/YumYoghurt.jpg',
    name: 'Yum Yoghurt'
  },

  {
    image: '/images/Characters/Dairy/CheesyCheese.jpg',
    name: 'Cheesy Cheese'
  },

  {
    image: '/images/Characters/Meat/LeanMeat.jpg',
    name: 'Lean Meat'
  },

  {
    image: '/images/Characters/Meat/FishCan.jpg',
    name: 'Fish Can'
  },

  {
    image: '/images/Characters/Meat/CheekyChicken.jpg',
    name: 'Cheeky Chicken'
  },

  {
    image: '/images/Characters/Meat/RangerRex.jpg',
    name: 'Ranger Rex'
  },

  {
    image: '/images/Characters/Meat/HannahGoanna.jpg',
    name: 'Hannah Goanna'
  },

  {
    image: '/images/Characters/Meat/EagerEgg.jpg',
    name: 'Eager Egg'
  },

  {
    image: '/images/Characters/Meat/FreshFish.jpg',
    name: 'Fresh Fish'
  },
  {
    image: '/images/Characters/Fruit/AcesApple.jpg',
    name: 'Aces Apple'
  },

  {
    image: '/images/Characters/Fruit/FarmerOrange.jpg',
    name: 'Farmer Orange'
  },

  {
    image: '/images/Characters/Fruit/SportyBanana.jpg',
    name: 'Sporty Banana'
  },

  {
    image: '/images/Characters/Fruit/MelodyMelon.jpg',
    name: 'Melody Melon'
  },

  {
    image: '/images/Characters/Fruit/FruityPainter.jpg',
    name: 'Fruity Painter'
  },

  {
    image: '/images/Characters/Grains/MixedGrain.jpg',
    name: 'Mixed Grain'
  },

  {
    image: '/images/Characters/Grains/HealthyCereal.jpg',
    name: 'Healthy Cereal'
  },

  {
    image: '/images/Characters/Grains/PastaBowl.jpg',
    name: 'Pasta Bowl'
  },

  {
    image: '/images/Characters/Grains/OutbackDamper.jpg',
    name: 'Outback Damper'
  },

  {
    image: '/images/Characters/Grains/PastaChef.jpg',
    name: 'Pasta Chef'
  },

  {
    image: '/images/Characters/Grains/PostiePorridge.jpg',
    name: 'Postie Porridge'
  },

  {
    image: '/images/Characters/Vegetables/ArtyCarrot.jpg',
    name: 'Arty Carrot'
  },

  {
    image: '/images/Characters/Vegetables/AthleticTomato.jpg',
    name: 'Athletic Tomato'
  },

  {
    image: '/images/Characters/Vegetables/TinnedBeans.jpg',
    name: 'Tinned Beans'
  },

  {
    image: '/images/Characters/Vegetables/CrunchingCapsicum.jpg',
    name: 'Crunching Capsicum'
  },

  {
    image: '/images/Characters/Vegetables/CoachCarrot.jpg',
    name: 'Coach Carrot'
  },

  {
    image: '/images/Characters/Vegetables/MrCucumber.jpg',
    name: 'Mr Cucumber'
  },

  {
    image: '/images/Characters/Vegetables/DJCorn.jpg',
    name: 'DJ Corn'
  },

  {
    image: '/images/Characters/Vegetables/FootyGirl.jpg',
    name: 'Footy Girl'
  },

  {
    image: '/images/Characters/Vegetables/FreshHerbs.jpg',
    name: 'Fresh Herbs'
  },

  {
    image: '/images/Characters/Vegetables/FrozenVegies.jpg',
    name: 'Frozen Vegies'
  },

  {
    image: '/images/Characters/Vegetables/GarlicDancer.jpg',
    name: 'Garlic Dancer'
  },
  {
    image: '/images/Characters/Vegetables/JackarooOnion.jpg',
    name: 'Jackaroo Onion'
  },
  {
    image: '/images/Characters/Vegetables/WorkingSpud.jpg',
    name: 'Working Spud'
  },
  {
    image: '/images/Characters/Vegetables/MrsBrocc.jpg',
    name: 'Mrs Brocc'
  },
  {
    image: '/images/Characters/Vegetables/PeaPod.jpg',
    name: 'Pea Pod'
  },
  {
    image: '/images/Characters/Vegetables/TinnedTradie.jpg',
    name: 'Tinned Tradie'
  }
]
