import seedrandom from 'seedrandom'
import shuffle from 'shuffle-array'
import { v4 as uuid_v4 } from 'uuid'
import Image from 'next/image'

import BlueBoy from './Dairy/BlueBoy.jpg'
import MilkMaid from './Dairy/MilkMaid.jpg'
import YumYoghurt from './Dairy/YumYoghurt.jpg'
import CheesyCheese from './Dairy/CheesyCheese.jpg'

import LeanMeat from './Meat/LeanMeat.jpg'
import FishCan from './Meat/FishCan.jpg'
import CheekyChicken from './Meat/CheekyChicken.jpg'
import RangerRex from './Meat/RangerRex.jpg'
import HannahGoanna from './Meat/HannahGoanna.jpg'
import EagerEgg from './Meat/EagerEgg.jpg'
import FreshFish from './Meat/FreshFish.jpg'

import AcesApple from './Fruit/AcesApple.jpg'
import FarmerOrange from './Fruit/FarmerOrange.jpg'
import SportyBanana from './Fruit/SportyBanana.jpg'
import MelodyMelon from './Fruit/MelodyMelon.jpg'
import FruityPainter from './Fruit/FruityPainter.jpg'

import MixedGrain from './Grains/MixedGrain.jpg'
import HealthyCereal from './Grains/HealthyCereal.jpg'
import PastaBowl from './Grains/PastaBowl.jpg'
import OutbackDamper from './Grains/OutbackDamper.jpg'
import PastaChef from './Grains/PastaChef.jpg'
import PostiePorridge from './Grains/PostiePorridge.jpg'

import ArtyCarrot from './Vegetables/ArtyCarrot.jpg'
import AthleticTomato from './Vegetables/AthleticTomato.jpg'
import TinnedBeans from './Vegetables/TinnedBeans.jpg'
import CrunchingCapsicum from './Vegetables/CrunchingCapsicum.jpg'
import CoachCarrot from './Vegetables/CoachCarrot.jpg'
import MrCucumber from './Vegetables/MrCucumber.jpg'
import DJCorn from './Vegetables/DJCorn.jpg'
import FootyGirl from './Vegetables/FootyGirl.jpg'
import FreshHerbs from './Vegetables/FreshHerbs.jpg'
import FrozenVegies from './Vegetables/FrozenVegies.jpg'
import GarlicDancer from './Vegetables/GarlicDancer.jpg'
import JackarooOnion from './Vegetables/JackarooOnion.jpg'
import WorkingSpud from './Vegetables/WorkingSpud.jpg'
import MrsBrocc from './Vegetables/MrsBrocc.jpg'
import PeaPod from './Vegetables/PeaPod.jpg'
import TinnedTradie from './Vegetables/TinnedTradie.jpg'

interface Character {
  id?: string
  image: StaticImageData
  name: string
  isSelected: boolean
  password?: string
}

interface SeedProps {
  seed: string
}

const PASSWORD_LENGTH = 9

const varToString = (varObj: Object) => Object.keys(varObj)[0]

const imgSet: Array<Character> = [
  {
    image: BlueBoy,
    name: varToString(BlueBoy),
    isSelected: false
  },

  {
    image: MilkMaid,
    name: varToString(MilkMaid),
    isSelected: false
  },

  {
    image: YumYoghurt,
    name: varToString(YumYoghurt),
    isSelected: false
  },

  {
    image: CheesyCheese,
    name: varToString(CheesyCheese),
    isSelected: false
  },

  {
    image: LeanMeat,
    name: varToString(LeanMeat),
    isSelected: false
  },

  {
    image: FishCan,
    name: varToString(FishCan),
    isSelected: false
  },

  {
    image: CheekyChicken,
    name: varToString(CheekyChicken),
    isSelected: false
  },

  {
    image: RangerRex,
    name: varToString(RangerRex),
    isSelected: false
  },

  {
    image: HannahGoanna,
    name: varToString(HannahGoanna),
    isSelected: false
  },

  {
    image: EagerEgg,
    name: varToString(EagerEgg),
    isSelected: false
  },

  {
    image: FreshFish,
    name: varToString(FreshFish),
    isSelected: false
  },
  {
    image: AcesApple,
    name: varToString(AcesApple),
    isSelected: false
  },

  {
    image: FarmerOrange,
    name: varToString(FarmerOrange),
    isSelected: false
  },

  {
    image: SportyBanana,
    name: varToString(SportyBanana),
    isSelected: false
  },

  {
    image: MelodyMelon,
    name: varToString(MelodyMelon),
    isSelected: false
  },

  {
    image: FruityPainter,
    name: varToString(FruityPainter),
    isSelected: false
  },

  {
    image: MixedGrain,
    name: varToString(MixedGrain),
    isSelected: false
  },

  {
    image: HealthyCereal,
    name: varToString(HealthyCereal),
    isSelected: false
  },

  {
    image: PastaBowl,
    name: varToString(PastaBowl),
    isSelected: false
  },

  {
    image: OutbackDamper,
    name: varToString(OutbackDamper),
    isSelected: false
  },

  {
    image: PastaChef,
    name: varToString(PastaChef),
    isSelected: false
  },

  {
    image: PostiePorridge,
    name: varToString(PostiePorridge),
    isSelected: false
  },

  {
    image: ArtyCarrot,
    name: varToString(ArtyCarrot),
    isSelected: false
  },

  {
    image: AthleticTomato,
    name: varToString(AthleticTomato),
    isSelected: false
  },

  {
    image: TinnedBeans,
    name: varToString(TinnedBeans),
    isSelected: false
  },

  {
    image: CrunchingCapsicum,
    name: varToString(CrunchingCapsicum),
    isSelected: false
  },

  {
    image: CoachCarrot,
    name: varToString(CoachCarrot),
    isSelected: false
  },

  {
    image: MrCucumber,
    name: varToString(MrCucumber),
    isSelected: false
  },

  {
    image: DJCorn,
    name: varToString(DJCorn),
    isSelected: false
  },

  {
    image: FootyGirl,
    name: varToString(FootyGirl),
    isSelected: false
  },

  {
    image: FreshHerbs,
    name: varToString(FreshHerbs),
    isSelected: false
  },

  {
    image: FrozenVegies,
    name: varToString(FrozenVegies),
    isSelected: false
  },

  {
    image: GarlicDancer,
    name: varToString(GarlicDancer),
    isSelected: false
  },
  {
    image: JackarooOnion,
    name: varToString(JackarooOnion),
    isSelected: false
  },
  {
    image: WorkingSpud,
    name: varToString(WorkingSpud),
    isSelected: false
  },
  {
    image: MrsBrocc,
    name: varToString(MrsBrocc),
    isSelected: false
  },
  {
    image: PeaPod,
    name: varToString(PeaPod),
    isSelected: false
  },
  {
    image: TinnedTradie,
    name: varToString(TinnedTradie),
    isSelected: false
  }
]

const randomStringGen = (length: number) => {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const Characters = ({ seed }: SeedProps) => {
  seedrandom(seed, { global: true })
  const imgSetLength = imgSet.length
  const selectedSet = shuffle(imgSet).slice(
    imgSetLength - PASSWORD_LENGTH,
    imgSetLength
  )
  selectedSet.map(img => {
    img.id = uuid_v4()
    img.password = randomStringGen(PASSWORD_LENGTH)
  })
  return (
    <div className='flex content-center justify-center pt-72'>
      {selectedSet.map(img => (
        <div key={img.id} className='h-96 w-96 '>
          <Image
            src={img.image}
            alt={img.name}
            placeholder='blur'
          />
        </div>
      ))}
    </div>
  )
}

export default Characters
