import Image from 'next/image'

import { Recipe } from '@lib/types'

import headerPlateOne from 'public/images/Extra/header-plate-1.png'

interface Props {
  recipe: Recipe
}

/**
 * Displays a list of required equipment along with an image.
 */
const EquipmentList = ({ recipe }: Props) => {
  const colorScheme = recipe.colorScheme
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center'>
        <div className='static w-3/5 min-w-[auto] recipe_md:w-2/5'>
          <Image src={headerPlateOne} alt='Equipments' />
        </div>
        <h1
          className={`${colorScheme?.header} static font-serif pb-8 opacity-80 rotate-[-5deg] text-[7vw] mt-[-20%] ml-[45px] recipe_md:text-[3rem] recipe_md:mt-[-15%] recipe_md:ml-[45px]`}
        >
          Equipment
        </h1>
      </div>
      <div className='grid md:grid-cols-2 md:gap-12 justify-items-center'>
        <div className='pl-8 font-semibold font-serif md:text-2xl min-w-[100px] max-w-[350px] md:pt-[10%] pb-[30px] !leading-[1.5] tracking-[4px] order-2 md:order-none'>
          <ul>
            {recipe.equipment.map(el => (
              <li key={el}>- {el}</li>
            ))}
          </ul>
        </div>
        <div className='relative order-1 w-52 h-52 md:w-full md:h-auto md:order-none'>
          <Image
            className='self-center object-contain pr-8 rounded-3xl'
            src={recipe.equipmentImg}
            alt='equipments'
            layout='fill'
          />
        </div>
      </div>
    </div>
  )
}

export default EquipmentList
