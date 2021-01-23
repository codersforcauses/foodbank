import React, { useState } from 'react'
import BlueBoy from './Dairy/BlueBoy.jpg'
import YoBoy from './Dairy/YoBoy.jpg'
import MightyMilk from './Dairy/MightyMilk.jpg'
import MilkMaid from './Dairy/MilkMaid.jpg'
import YumYoghurt from './Dairy/YumYoghurt.jpg'
import YoGirl from './Dairy/YoGirl.jpg'
import CheesyCheese from './Dairy/CheesyCheese.jpg'
import SpeedyCheese from './Dairy/SpeedyCheese.jpg'

import BeefyBoy from './Meat/BeefyBoy.jpg'
import LeanMeat from './Meat/LeanMeat.jpg'
import FishCan from './Meat/FishCan.jpg'
import FlyingFish from './Meat/FlyingFish.jpg'
import CheekyChicken from './Meat/CheekyChicken.jpg'
import ChickenDrummer from './Meat/ChickenDrummer.jpg'
import RangerRex from './Meat/RangerRex.jpg'
import CoolKangaroo from './Meat/CoolKangaroo.jpg'
import HannahGoanna from './Meat/HannahGoanna.jpg'
import GoGoGoanna from './Meat/GoGoGoanna.jpg'
import EagerEgg from './Meat/EagerEgg.jpg'
import TheScrambler from './Meat/TheScrambler.jpg'
import FreshFish from './Meat/FreshFish.jpg'
import TheSeaRaider from './Meat/TheSeaRaider.jpg'

import AcesApple from './Fruit/AcesApple.jpg'
import AtomicApple from './Fruit/AtomicApple.jpg'
import FarmerOrange from './Fruit/FarmerOrange.jpg'
import VitaminCLion from './Fruit/VitaminCLion.jpg'
import SportyBanana from './Fruit/SportyBanana.jpg'
import SuperFruity from './Fruit/SuperFruity.jpg'
import MelodyMelon from './Fruit/MelodyMelon.jpg'
import TheMelonator from './Fruit/TheMelonator.jpg'
import FruityPainter from './Fruit/FruityPainter.jpg'
import FruitMob from './Fruit/FruitMob.jpg'

import MixedGrain from './Grains/MixedGrain.jpg'
import Toasty from './Grains/Toasty.jpg'
import HealthyCereal from './Grains/HealthyCereal.jpg'
import SilverSpoon from './Grains/SilverSpoon.jpg'
import PastaBowl from './Grains/PastaBowl.jpg'
import NoodleNinja from './Grains/NoodleNinja.jpg'
import OutbackDamper from './Grains/OutbackDamper.jpg'
import DeadlyDamper from './Grains/DeadlyDamper.jpg'
import PastaChef from './Grains/PastaChef.jpg'
import PastaBlast from './Grains/PastaBlast.jpg'
import PostiePorridge from './Grains/PostiePorridge.jpg'
import PowerfulPorridge from './Grains/PowerfulPorridge.jpg'

import ArtyCarrot from './Vegetables/ArtyCarrot.jpg'
import TheDicer from './Vegetables/TheDicer.jpg'
import SaucyLady from './Vegetables/SaucyLady.jpg'
import AthleticTomato from './Vegetables/AthleticTomato.jpg'
import TinnedBeans from './Vegetables/TinnedBeans.jpg'
import BeanMachine from './Vegetables/BeanMachine.jpg'
import CrunchingCapsicum from './Vegetables/CrunchingCapsicum.jpg'
import CaptainCapsicum from './Vegetables/CaptainCapsicum.jpg'
import CoachCarrot from './Vegetables/CoachCarrot.jpg'
import PurplePrincess from './Vegetables/PurplePrincess.jpg'
import CoolCucumber from './Vegetables/CoolCucumber.jpg'
import MrCucumber from './Vegetables/MrCucumber.jpg'
import DJCorn from './Vegetables/DJCorn.jpg'
import KingCorn from './Vegetables/KingCorn.jpg'
import FootyGirl from './Vegetables/FootyGirl.jpg'
import SuperSweetPotato from './Vegetables/SuperSweetPotato.jpg'
import FreshHerbs from './Vegetables/FreshHerbs.jpg'
import Herbalicious from './Vegetables/Herbalicious.jpg'
import FrozenVegies from './Vegetables/FrozenVegies.jpg'
import SnapFrozen from './Vegetables/SnapFrozen.jpg'
import GarlicDancer from './Vegetables/GarlicDancer.jpg'
import GarlicShield from './Vegetables/GarlicShield.jpg'
import JackarooOnion from './Vegetables/JackarooOnion.jpg'
import OnionRinger from './Vegetables/OnionRinger.jpg'
import WorkingSpud from './Vegetables/WorkingSpud.jpg'
import MasherMan from './Vegetables/MasherMan.jpg'
import MrsBrocc from './Vegetables/MrsBrocc.jpg'
import MeanGreen from './Vegetables/MeanGreen.jpg'
import PeaPod from './Vegetables/PeaPod.jpg'
import QueenPea from './Vegetables/QueenPea.jpg'
import TinnedTradie from './Vegetables/TinnedTradie.jpg'
import VegieSquad from './Vegetables/VegieSquad.jpg'

import ZombieChocc from './ZombieFoods/ZombieChoc.jpg'
import Decay from './ZombieFoods/Decay.jpg'
import ZombieChips from './ZombieFoods/ZombieChips.jpg'
import Illness from './ZombieFoods/Illness.jpg'
import ZombieDonut from './ZombieFoods/ZombieDonut.jpg'
import Obesity from './ZombieFoods/Obesity.jpg'
import ZombieEnergy from './ZombieFoods/ZombieEnergy.jpg'
import ZombieFizz from './ZombieFoods/ZombieFizz.jpg'

import WonderWater from './Other/WonderWater.jpg'
import CoolGlass from './Other/CoolGlass.jpg'
import BushTuckerTrackers from './Other/BushTuckerTrackers.jpg'
import BushTuckerTeam from './Other/BushTuckerTeam.jpg'
import { Button } from 'Components/Button'

interface Character {
  before: string
  after: string
  text: string
}

const imgTransforms: Array<Character> = [
  {
    
    before: BlueBoy,

    after: YoBoy,

    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  
   <div>{}
    <button>Button</button>
   }</div>}
  ,

  {
    before: MilkMaid,
    after: MightyMilk,
    text: 'I am Milk!'
  },

  {
    before: YumYoghurt,
    after: YoGirl,
    text: 'I am Yoghurt Girl!'
  },

  {
    before: CheesyCheese,
    after: SpeedyCheese,
    text: 'I am Cheese!'
  },

  {
    before: LeanMeat,
    after: BeefyBoy,
    text: 'I am Beef!'
  },

  {
    before: FishCan,
    after: FlyingFish,
    text: 'I am Fish!'
  },

  {
    before: CheekyChicken,
    after: ChickenDrummer,
    text: 'I am Chicken!'
  },

  {
    before: RangerRex,
    after: CoolKangaroo,
    text: 'I am a Kangaroo!'
  },

  {
    before: HannahGoanna,
    after: GoGoGoanna,
    text: 'I am a Goanna!'
  },

  {
    before: EagerEgg,
    after: TheScrambler,
    text: 'I am an Egg!'
  },

  {
    before: FreshFish,
    after: TheSeaRaider,
    text: 'I am Fresh Fish'
  },
  {
    before: AcesApple,
    after: AtomicApple,
    text: 'I am an Apple!'
  },

  {
    before: FarmerOrange,
    after: VitaminCLion,
    text: 'I am an Orange!'
  },

  {
    before: SportyBanana,
    after: SuperFruity,
    text: 'I am a Banana!'
  },

  {
    before: MelodyMelon,
    after: TheMelonator,
    text: 'I am Watermelon!'
  },

  {
    before: FruityPainter,
    after: FruitMob,
    text: 'I am a fruit can!'
  },

  {
    before: MixedGrain,
    after: Toasty,
    text: 'I am a Toast!'
  },

  {
    before: HealthyCereal,
    after: SilverSpoon,
    text: 'I am Cereal!'
  },

  {
    before: PastaBowl,
    after: NoodleNinja,
    text: 'I am Noodle!'
  },

  {
    before: OutbackDamper,
    after: DeadlyDamper,
    text: 'I am Damper!'
  },

  {
    before: PastaChef,
    after: PastaBlast,
    text: 'I am Pasta!'
  },

  {
    before: PostiePorridge,
    after: PowerfulPorridge,
    text: 'I am Porridge!'
  },

  {
    before: ArtyCarrot,
    after: TheDicer,
    text: 'I am a Carrot!'
  },

  {
    before: AthleticTomato,
    after: SaucyLady,
    text: 'I am a Tomato!'
  },

  {
    before: TinnedBeans,
    after: BeanMachine,
    text: 'I am Beans!'
  },

  {
    before: CrunchingCapsicum,
    after: CaptainCapsicum,
    text: 'I am a Capsicum!'
  },

  {
    before: CoachCarrot,
    after: PurplePrincess,
    text: 'I am a purple Carrot'
  },

  {
    before: MrCucumber,
    after: CoolCucumber,
    text: 'I am a Cucumber'
  },

  {
    before: DJCorn,
    after: KingCorn,
    text: 'I am Corn!'
  },

  {
    before: FootyGirl,
    after: SuperSweetPotato,
    text: 'I am a Sweet Potato!'
  },

  {
    before: FreshHerbs,
    after: Herbalicious,
    text: 'I am Herbs!'
  },

  {
    before: FrozenVegies,
    after: SnapFrozen,
    text: 'I am Frozen Vegetables!'
  },

  {
    before: GarlicDancer,
    after: GarlicShield,
    text: 'I am a Garlic!'
  },
  {
    before: JackarooOnion,
    after: OnionRinger,
    text: 'I am an Onion!'
  },
  {
    before: WorkingSpud,
    after: MasherMan,
    text: 'I am a Potato!'
  },
  {
    before: MrsBrocc,
    after: MeanGreen,
    text: 'I am a Broccoli!'
  },
  {
    before: PeaPod,
    after: QueenPea,
    text: 'I am Pea!'
  },
  {
    before: TinnedTradie,
    after: VegieSquad,
    text: 'I am tinned vegetables!'
  },
  {
    before: ZombieChocc,
    after: Decay,
    text: 'I am chocolate!'
  },
  {
    before: ZombieChips,
    after: Illness,
    text: 'I am Chips!'
  },
  {
    before: ZombieDonut,
    after: Obesity,
    text: 'I am a Donut!'
  },
  {
    before: ZombieEnergy,
    after: ZombieFizz,
    text: 'I am Energy Drink!'
  },
  {
    before: CoolGlass,
    after: WonderWater,
    text: 'I am Water!'
  },
  {
    before: BushTuckerTrackers,
    after: BushTuckerTeam,
    text: 'We are a team!'
  }
]

const CharacterImg = ({ character }: { character: Character }) => {
  const [image, setImage] = useState(character.before)
  const changeImage = () => {
    setImage(character.after)
  }

  return (
    <span>
      <img
        src={image}
        alt=''
        width={250}
        onClick={changeImage}
        onKeyPress={changeImage}
        role='presentation'
      />
      <p>{character.text}</p>
    </span>
  )
}

const Characters: React.FC = () => {
  return (
    <div>
      Characters:
      {imgTransforms.map((img, index) => (
        <CharacterImg key={index} character={img} />
      ))}
    </div>
  )
}

export default Characters
