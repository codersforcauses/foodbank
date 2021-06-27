import React from 'react'
import { Recipe } from 'lib/types'

interface Props {
  recipe: Recipe
}

/**
 * Displays a list of required equipment along with an image.
 */
const EquipmentList: React.FC<Props> = ({ recipe }) => {
  const colorScheme = recipe.colorScheme
  return (
    <div className='grid grid-cols-2 items-center mt-2'>
      <div>
        <h2 className={'text-2xl font-serif ' + colorScheme.header}>
          Equipment
        </h2>
        <ul>
          {recipe.equipment.map(equipment => (
            <li key={equipment} className={colorScheme.text}>
              {equipment}
            </li>
          ))}
        </ul>
      </div>
      <img
        className='w-80 rounded-3xl'
        src={recipe.equipmentImg}
        alt='ingredients'
      />
    </div>
  )
}

export default EquipmentList
