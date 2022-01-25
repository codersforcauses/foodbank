import { Recipe } from 'lib/types'
import Image from 'next/image'

import imgFrameOne from 'public/images/Extra/img-frame-white-border.png'
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
          className={`${colorScheme?.header} static font-serif pb-8 opacity-80 rotate-[-5deg] text-[7vw] mt-[-20%] ml-[45px] recipe_md:text-[3.5rem] recipe_md:mt-[-15%] recipe_md:ml-[45px]`}
        >
          Equipment
        </h1>
      </div>
      <div className='grid grid-cols-2 gap-12 justify-items-center'>
        <div className='pl-8 font-semibold font-serif text-2xl min-w-[100px] max-w-[350px] pt-[10%] pb-[30px] leading-[1.5] tracking-[4px]'>
          <ul>
            {recipe.equipment.map(el => (
              <li key={el}>- {el}</li>
            ))}
          </ul>
        </div>
        <div className='relative w-full h-auto'>
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
