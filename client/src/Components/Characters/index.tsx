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
  },

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
