import seedrandom from 'seedrandom'
import shuffle from 'shuffle-array'

const PASSWORD_LENGTH = 9

interface Character {
  image: string
  name: string
  password?: string
}

const randomStringGen = (length: number) => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
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
    img.password = randomStringGen(PASSWORD_LENGTH)
  })
  return selectedSet
}

export default selectSet
export type { Character }

const GridSet: Character[] = [
  {
    image: '/images/Characters/Dairy/BlueBoy.webp',
    name: 'Blue Boy'
  },

  {
    image: '/images/Characters/Dairy/MilkMaid.webp',
    name: 'Milk Maid'
  },

  {
    image: '/images/Characters/Dairy/YumYoghurt.webp',
    name: 'Yum Yoghurt'
  },

  {
    image: '/images/Characters/Dairy/CheesyCheese.webp',
    name: 'Cheesy Cheese'
  },

  {
    image: '/images/Characters/Meat/LeanMeat.webp',
    name: 'Lean Meat'
  },

  {
    image: '/images/Characters/Meat/FishCan.webp',
    name: 'Fish Can'
  },

  {
    image: '/images/Characters/Meat/CheekyChicken.webp',
    name: 'Cheeky Chicken'
  },

  {
    image: '/images/Characters/Meat/RangerRex.webp',
    name: 'Ranger Rex'
  },

  {
    image: '/images/Characters/Meat/HannahGoanna.webp',
    name: 'Hannah Goanna'
  },

  {
    image: '/images/Characters/Meat/EagerEgg.webp',
    name: 'Eager Egg'
  },

  {
    image: '/images/Characters/Meat/FreshFish.webp',
    name: 'Fresh Fish'
  },
  {
    image: '/images/Characters/Fruit/AcesApple.webp',
    name: 'Aces Apple'
  },

  {
    image: '/images/Characters/Fruit/FarmerOrange.webp',
    name: 'Farmer Orange'
  },

  {
    image: '/images/Characters/Fruit/SportyBanana.webp',
    name: 'Sporty Banana'
  },

  {
    image: '/images/Characters/Fruit/MelodyMelon.webp',
    name: 'Melody Melon'
  },

  {
    image: '/images/Characters/Fruit/FruityPainter.webp',
    name: 'Fruity Painter'
  },

  {
    image: '/images/Characters/Grains/MixedGrain.webp',
    name: 'Mixed Grain'
  },

  {
    image: '/images/Characters/Grains/HealthyCereal.webp',
    name: 'Healthy Cereal'
  },

  {
    image: '/images/Characters/Grains/PastaBowl.webp',
    name: 'Pasta Bowl'
  },

  {
    image: '/images/Characters/Grains/OutbackDamper.webp',
    name: 'Outback Damper'
  },

  {
    image: '/images/Characters/Grains/PastaChef.webp',
    name: 'Pasta Chef'
  },

  {
    image: '/images/Characters/Grains/PostiePorridge.webp',
    name: 'Postie Porridge'
  },

  {
    image: '/images/Characters/Vegetables/ArtyCarrot.webp',
    name: 'Arty Carrot'
  },

  {
    image: '/images/Characters/Vegetables/AthleticTomato.webp',
    name: 'Athletic Tomato'
  },

  {
    image: '/images/Characters/Vegetables/TinnedBeans.webp',
    name: 'Tinned Beans'
  },

  {
    image: '/images/Characters/Vegetables/CrunchingCapsicum.webp',
    name: 'Crunching Capsicum'
  },

  {
    image: '/images/Characters/Vegetables/CoachCarrot.webp',
    name: 'Coach Carrot'
  },

  {
    image: '/images/Characters/Vegetables/MrCucumber.webp',
    name: 'Mr Cucumber'
  },

  {
    image: '/images/Characters/Vegetables/DJCorn.webp',
    name: 'DJ Corn'
  },

  {
    image: '/images/Characters/Vegetables/FootyGirl.webp',
    name: 'Footy Girl'
  },

  {
    image: '/images/Characters/Vegetables/FreshHerbs.webp',
    name: 'Fresh Herbs'
  },

  {
    image: '/images/Characters/Vegetables/FrozenVegies.webp',
    name: 'Frozen Vegies'
  },

  {
    image: '/images/Characters/Vegetables/GarlicDancer.webp',
    name: 'Garlic Dancer'
  },
  {
    image: '/images/Characters/Vegetables/JackarooOnion.webp',
    name: 'Jackaroo Onion'
  },
  {
    image: '/images/Characters/Vegetables/WorkingSpud.webp',
    name: 'Working Spud'
  },
  {
    image: '/images/Characters/Vegetables/MrsBrocc.webp',
    name: 'Mrs Brocc'
  },
  {
    image: '/images/Characters/Vegetables/PeaPod.webp',
    name: 'Pea Pod'
  },
  {
    image: '/images/Characters/Vegetables/TinnedTradie.webp',
    name: 'Tinned Tradie'
  }
]
