import { useState, useRef, useEffect } from 'react'
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

interface GridProps {
  seed: string
}

const PASSWORD_LENGTH = 9

const varToString = (varObj: Object) => Object.keys(varObj)[0]

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

const imgSet: Array<Character> = [
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

const Characters = ({ seed }: GridProps) => {
  seedrandom(seed, { global: true })
  const imgSetLength = imgSet.length
  const selectedSet = shuffle(imgSet, { copy: true }).slice(0, PASSWORD_LENGTH)
  selectedSet.map(img => {
    img.id = uuid_v4()
    // img.password = randomStringGen(PASSWORD_LENGTH)
    img.password = img.name // For testing purposes
  })
  return (
    <>
      <div className='flex content-center justify-center pt-72'>
        {selectedSet.map(img => (
          <Image
            key={img.id}
            className='h-96 w-96'
            src={img.image}
            alt={img.name}
            placeholder='blur'
          />
        ))}
      </div>
      <ul className='pt-11'>
        {selectedSet.map(img => (
          <li className='text-center' key={img.id}>
            Password: {img.password}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Characters
