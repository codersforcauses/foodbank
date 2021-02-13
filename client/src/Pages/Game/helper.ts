import Grains from './energise-resize.png'
import Meat from './meat-resize.png'
import Vegetables from './bankvegetables.png'
import Fruit from './bankfruit.png'
import Dairy from './bankdairy.png'

export enum Food {
  DIARY = 'Dairy',
  MEAT = 'Meat',
  FRUIT = 'Fruit',
  GRAIN = 'Grain',
  VEGETABLES = 'Vegetable'
}

export const diary = [
  'BlueBoy.jpg',
  'YoBoy.jpg',
  'MightyMilk.jpg',
  'MilkMaid.jpg',
  'YumYoghurt.jpg',
  'YoGirl.jpg',
  'CheesyCheese.jpg',
  'SpeedyCheese.jpg'
]

const meat = [
  'BeefyBoy.jpg',
  'LeanMeat.jpg',
  'FishCan.jpg',
  'FlyingFish.jpg',
  'CheekyChicken.jpg',
  'ChickenDrummer.jpg',
  'RangerRex.jpg',
  'CoolKangaroo.jpg',
  'HannahGoanna.jpg',
  'GoGoGoanna.jpg',
  'EagerEgg.jpg',
  'TheScrambler.jpg',
  'TheSeaRaider.jpg',
  'FreshFish.jpg'
]

const fruit = [
  'AcesApple.jpg',
  'AtomicApple.jpg',
  'FarmerOrange.jpg',
  'VitaminCLion.jpg',
  'SportyBanana.jpg',
  'SuperFruity.jpg',
  'MelodyMelon.jpg',
  'TheMelonator.jpg',
  'FruityPainter.jpg',
  'FruitMob.jpg'
]

const grain = [
  'MixedGrain.jpg',
  'Toasty.jpg',
  'HealthyCereal.jpg',
  'SilverSpoon.jpg',
  'PastaBowl.jpg',
  'NoodleNinja.jpg',
  'OutbackDamper.jpg',
  'DeadlyDamper.jpg',
  'PastaChef.jpg',
  'PastaBlast.jpg',
  'PostiePorridge.jpg',
  'PowerfulPorridge.jpg'
]

const vegetables = [
  'ArtyCarrot.jpg',
  'TheDicer.jpg',
  'SaucyLady.jpg',
  'AthleticTomato.jpg',
  'TinnedBeans.jpg',
  'BeanMachine.jpg',
  'CrunchingCapsicum.jpg',
  'CaptainCapsicum.jpg',
  'CoachCarrot.jpg',
  'PurplePrincess.jpg',
  'CoolCucumber.jpg',
  'MrCucumber.jpg',
  'DJCorn.jpg',
  'KingCorn.jpg',
  'FootyGirl.jpg',
  'SuperSweetPotato.jpg',
  'FreshHerbs.jpg',
  'Herbalicious.jpg',
  'FrozenVegies.jpg',
  'SnapFrozen.jpg',
  'GarlicDancer.jpg',
  'GarlicShield.jpg',
  'JackarooOnion.jpg',
  'OnionRinger.jpg',
  'WorkingSpud.jpg',
  'MasherMan.jpg',
  'MrsBrocc.jpg',
  'MeanGreen.jpg',
  'PeaPod.jpg',
  'QueenPea.jpg',
  'TinnedTradie.jpg',
  'VegieSquad.jpg'
]
export const data = {
  BASE_URL: '/characters'
}

export interface FoodImage {
  type: Food
  image: string
  name: string
}

export const allFoods: FoodImage[] = [
  ...diary.map(x => ({
    type: Food.DIARY,
    image: `${data.BASE_URL}/Dairy/${x}`,
    name: x.split('.')[0]
  })),
  ...meat.map(x => ({
    type: Food.MEAT,
    image: `${data.BASE_URL}/Meat/${x}`,
    name: x.split('.')[0]
  })),
  ...fruit.map(x => ({
    type: Food.FRUIT,
    image: `${data.BASE_URL}/Fruit/${x}`,
    name: x.split('.')[0]
  })),
  ...vegetables.map(x => ({
    type: Food.VEGETABLES,
    image: `${data.BASE_URL}/Vegetables/${x}`,
    name: x.split('.')[0]
  })),
  ...grain.map(x => ({
    type: Food.GRAIN,
    image: `${data.BASE_URL}/Grains/${x}`,
    name: x.split('.')[0]
  }))
]

export function getAndRemoveItem<T>(items: T[], id: keyof T): [T, T[]] {
  const random = items[Math.floor(Math.random() * items.length)]
  const filtered = items.filter(x => x[id] !== random[id])
  return [random, filtered]
}

export const backgrounds = [
  {
    start: 1.8,
    end: 0.32,
    x: 80,
    y: 390,
    px: 320,
    py: 0,
    len: 330,
    scale: 1.07,
    name: Food.MEAT,
    src: Meat
  },
  {
    x: 40,
    y: 60,
    px: 350,
    py: 330,
    start: 2.85,
    end: -1.6,
    len: 320,
    scale: 1,
    name: Food.GRAIN,
    src: Grains
  },
  {
    x: 380,
    y: 50,
    px: 9,
    py: 340,
    start: 4.72,
    end: 2.9,
    len: 330,
    scale: 0.265,
    name: Food.VEGETABLES,
    src: Vegetables
  },
  {
    x: 390,
    y: 390,
    px: 10,
    py: 0,
    start: 0.25,
    end: 8.4,
    len: 330,
    scale: 0.27,
    name: Food.FRUIT,
    src: Fruit
  },
  {
    x: 320,
    y: 400,
    px: 75,
    py: 0,
    start: 0.95,
    end: 7.6,
    len: 330,
    scale: 0.27,
    name: Food.DIARY,
    src: Dairy
  }
]
