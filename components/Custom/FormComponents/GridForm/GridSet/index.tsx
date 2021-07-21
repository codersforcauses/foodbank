import BlueBoy from '@public/images/Characters/Dairy/BlueBoy.jpg'
import MilkMaid from '@public/images/Characters/Dairy/MilkMaid.jpg'
import YumYoghurt from '@public/images/Characters/Dairy/YumYoghurt.jpg'
import CheesyCheese from '@public/images/Characters/Dairy/CheesyCheese.jpg'

import LeanMeat from '@public/images/Characters/Meat/LeanMeat.jpg'
import FishCan from '@public/images/Characters/Meat/FishCan.jpg'
import CheekyChicken from '@public/images/Characters/Meat/CheekyChicken.jpg'
import RangerRex from '@public/images/Characters/Meat/RangerRex.jpg'
import HannahGoanna from '@public/images/Characters/Meat/HannahGoanna.jpg'
import EagerEgg from '@public/images/Characters/Meat/EagerEgg.jpg'
import FreshFish from '@public/images/Characters/Meat/FreshFish.jpg'

import AcesApple from '@public/images/Characters/Fruit/AcesApple.jpg'
import FarmerOrange from '@public/images/Characters/Fruit/FarmerOrange.jpg'
import SportyBanana from '@public/images/Characters/Fruit/SportyBanana.jpg'
import MelodyMelon from '@public/images/Characters/Fruit/MelodyMelon.jpg'
import FruityPainter from '@public/images/Characters/Fruit/FruityPainter.jpg'

import MixedGrain from '@public/images/Characters/Grains/MixedGrain.jpg'
import HealthyCereal from '@public/images/Characters/Grains/HealthyCereal.jpg'
import PastaBowl from '@public/images/Characters/Grains/PastaBowl.jpg'
import OutbackDamper from '@public/images/Characters/Grains/OutbackDamper.jpg'
import PastaChef from '@public/images/Characters/Grains/PastaChef.jpg'
import PostiePorridge from '@public/images/Characters/Grains/PostiePorridge.jpg'

import ArtyCarrot from '@public/images/Characters/Vegetables/ArtyCarrot.jpg'
import AthleticTomato from '@public/images/Characters/Vegetables/AthleticTomato.jpg'
import TinnedBeans from '@public/images/Characters/Vegetables/TinnedBeans.jpg'
import CrunchingCapsicum from '@public/images/Characters/Vegetables/CrunchingCapsicum.jpg'
import CoachCarrot from '@public/images/Characters/Vegetables/CoachCarrot.jpg'
import MrCucumber from '@public/images/Characters/Vegetables/MrCucumber.jpg'
import DJCorn from '@public/images/Characters/Vegetables/DJCorn.jpg'
import FootyGirl from '@public/images/Characters/Vegetables/FootyGirl.jpg'
import FreshHerbs from '@public/images/Characters/Vegetables/FreshHerbs.jpg'
import FrozenVegies from '@public/images/Characters/Vegetables/FrozenVegies.jpg'
import GarlicDancer from '@public/images/Characters/Vegetables/GarlicDancer.jpg'
import JackarooOnion from '@public/images/Characters/Vegetables/JackarooOnion.jpg'
import WorkingSpud from '@public/images/Characters/Vegetables/WorkingSpud.jpg'
import MrsBrocc from '@public/images/Characters/Vegetables/MrsBrocc.jpg'
import PeaPod from '@public/images/Characters/Vegetables/PeaPod.jpg'
import TinnedTradie from '@public/images/Characters/Vegetables/TinnedTradie.jpg'

export interface Character {
  id?: string
  image: StaticImageData
  name: string
  isSelected: boolean
  password?: string
}

const imgSet: Character[] = [
  {
    image: BlueBoy,
    name: 'BlueBoy',
    isSelected: false
  },

  {
    image: MilkMaid,
    name: 'MilkMaid',
    isSelected: false
  },

  {
    image: YumYoghurt,
    name: 'YumYoghurt',
    isSelected: false
  },

  {
    image: CheesyCheese,
    name: 'CheesyCheese',
    isSelected: false
  },

  {
    image: LeanMeat,
    name: 'LeanMeat',
    isSelected: false
  },

  {
    image: FishCan,
    name: 'FishCan',
    isSelected: false
  },

  {
    image: CheekyChicken,
    name: 'CheekyChicken',
    isSelected: false
  },

  {
    image: RangerRex,
    name: 'RangerRex',
    isSelected: false
  },

  {
    image: HannahGoanna,
    name: 'HannahGoanna',
    isSelected: false
  },

  {
    image: EagerEgg,
    name: 'EagerEgg',
    isSelected: false
  },

  {
    image: FreshFish,
    name: 'FreshFish',
    isSelected: false
  },
  {
    image: AcesApple,
    name: 'AcesApple',
    isSelected: false
  },

  {
    image: FarmerOrange,
    name: 'FarmerOrange',
    isSelected: false
  },

  {
    image: SportyBanana,
    name: 'SportyBanana',
    isSelected: false
  },

  {
    image: MelodyMelon,
    name: 'MelodyMelon',
    isSelected: false
  },

  {
    image: FruityPainter,
    name: 'FruityPainter',
    isSelected: false
  },

  {
    image: MixedGrain,
    name: 'MixedGrain',
    isSelected: false
  },

  {
    image: HealthyCereal,
    name: 'HealthyCereal',
    isSelected: false
  },

  {
    image: PastaBowl,
    name: 'PastaBowl',
    isSelected: false
  },

  {
    image: OutbackDamper,
    name: 'OutbackDamper',
    isSelected: false
  },

  {
    image: PastaChef,
    name: 'PastaChef',
    isSelected: false
  },

  {
    image: PostiePorridge,
    name: 'PostiePorridge',
    isSelected: false
  },

  {
    image: ArtyCarrot,
    name: 'ArtyCarrot',
    isSelected: false
  },

  {
    image: AthleticTomato,
    name: 'AthleticTomato',
    isSelected: false
  },

  {
    image: TinnedBeans,
    name: 'TinnedBeans',
    isSelected: false
  },

  {
    image: CrunchingCapsicum,
    name: 'CrunchingCapsicum',
    isSelected: false
  },

  {
    image: CoachCarrot,
    name: 'CoachCarrot',
    isSelected: false
  },

  {
    image: MrCucumber,
    name: 'MrCucumber',
    isSelected: false
  },

  {
    image: DJCorn,
    name: 'DJCorn',
    isSelected: false
  },

  {
    image: FootyGirl,
    name: 'FootyGirl',
    isSelected: false
  },

  {
    image: FreshHerbs,
    name: 'FreshHerbs',
    isSelected: false
  },

  {
    image: FrozenVegies,
    name: 'FrozenVegies',
    isSelected: false
  },

  {
    image: GarlicDancer,
    name: 'GarlicDancer',
    isSelected: false
  },
  {
    image: JackarooOnion,
    name: 'JackarooOnion',
    isSelected: false
  },
  {
    image: WorkingSpud,
    name: 'WorkingSpud',
    isSelected: false
  },
  {
    image: MrsBrocc,
    name: 'MrsBrocc',
    isSelected: false
  },
  {
    image: PeaPod,
    name: 'PeaPod',
    isSelected: false
  },
  {
    image: TinnedTradie,
    name: 'TinnedTradie',
    isSelected: false
  }
]

export default imgSet
