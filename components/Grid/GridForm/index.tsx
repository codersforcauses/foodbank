import {
  useState,
  useRef,
  useEffect,
  InputHTMLAttributes,
  useContext,
  ChangeEvent
} from 'react'
import { useForm, RegisterOptions, SubmitHandler } from 'react-hook-form'
import { FormContext } from '@components/Custom/FormComponents/Form/context'
import {
  FieldControl,
  FieldLabel,
  FieldMessage
} from '@components/Custom/FormComponents/utils'
import seedrandom from 'seedrandom'
import shuffle from 'shuffle-array'
import { v4 as uuid_v4 } from 'uuid'
import Image from 'next/image'

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

interface GridProps {
  selectedSet: Array<Character>
  toggleSelect: Function
}

const PASSWORD_LENGTH = 9

const varToString = (varObj: Object) => Object.keys(varObj)[0]

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

export const selectSet = (seed: string) => {
  seedrandom(seed, { global: true })
  const imgSetLength = imgSet.length
  const selectedSet = shuffle(imgSet, { copy: true }).slice(0, PASSWORD_LENGTH)
  selectedSet.map(img => {
    img.id = uuid_v4()
    img.password = randomStringGen(PASSWORD_LENGTH)
    // img.password = img.name // For testing purposes
  })
  return selectedSet
}

const GridDisplay = ({ selectedSet, toggleSelect }: GridProps) => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {selectedSet.map(img => (
          <div key={img.id}>
            <Image
              key={img.id}
              className={`${img.isSelected ? '' : 'opacity-30'}`}
              height={200}
              width={200}
              src={img.image}
              alt={img.name}
              placeholder='blur'
              onClick={() => toggleSelect(img.id)}
            />
            <p className='text-center'>{img.name}</p>
          </div>
        ))}
      </div>
      {/* <ul className='pt-11'>
        {selectedSet.map(img => (
          <li className='text-center' key={img.id}>
            Secret Code: {img.password}
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default GridDisplay

export interface GridFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  grid: Array<Character>
  label: string
  name: string
  description?: string
  rules?: RegisterOptions
}

export const GridField = ({
  color,
  description,
  disabled = false,
  label,
  required = false,
  rules = {},
  ...props
}: GridFieldProps) => {
  const {
    formState,
    disabled: formDisabled,
    register
  } = useContext(FormContext)
  const error: string = formState?.errors?.[props.name]?.message

  return (
    <FieldControl
      name={props.name}
      error={error}
      required={'required' in rules || required}
      disabled={formDisabled || disabled}
    >
      <div className='grid flex-col w-full grid-cols-3 gap-4'>
        {props.grid.map(char => (
          //   <div key={char.id}>
          <FieldLabel key={char.id}>
            <input
              {...props}
              aria-describedby={`${char.name}-label`}
              aria-invalid={!!error}
              id={char.id}
              name='food'
              value={char.password}
              className={['text-lg px-4 py-2 rounded-2xl font-sans input']
                .join(' ')
                .trim()}
              {...register?.(props.name, rules)}
            />
            <Image
              key={char.id}
              className={`${!char.isSelected ? '' : 'opacity-30'}`}
              height={200}
              width={200}
              src={char.image}
              alt={char.name}
              placeholder='blur'
            />
            <p className='text-center'>{char.name}</p>
          </FieldLabel>
          //   </div>
        ))}
        {error ? (
          <FieldMessage>{error}</FieldMessage>
        ) : (
          description && <FieldMessage description>{description}</FieldMessage>
        )}
      </div>
    </FieldControl>
  )
}

interface TestValues {
  username: string
  password: string
}

export const TestForm = () => {
  const { register, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const { username, password } = watch()

  useEffect(() => {
    register('username')
    register('password')
  }, [register])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    values: 'username' | 'password'
  ) => {
    setValue(values, e.target.value)
    console.log(username)
  }

  const onSubmit: SubmitHandler<TestValues> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input onChange={e => handleChange(e, 'username')} value={username} />

      <input onChange={e => handleChange(e, 'password')} value={password} />
      <input type='submit' />
    </form>
  )
}
