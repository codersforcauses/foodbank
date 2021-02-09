import React from 'react'
import './index.css'

import grains from './Images/grains.png'
import vegetables from './Images/vegetables.png'
import fruit from './Images/fruit.png'
import dairy from './Images/dairy.png'
import meat from './Images/meat.png'

export interface FoodCategoriesProps {
  isGrainsLocked: boolean
  isVegetablesLocked: boolean
  isFruitLocked: boolean
  isDairyLocked: boolean
  isMeatLocked: boolean
}

export const FoodCategories: React.FC<FoodCategoriesProps> = props => {
  return (
    <div className='absolute h-full w-full inset-0 '>
      <div>
        <img
          className={
            'grains absolute cursor-pointer' +
            (props.isGrainsLocked ? ' locked' : '')
          }
          src={grains}
          alt='grains'
        />
      </div>

      <div>
        <img
          className={
            'vegetables absolute cursor-pointer' +
            (props.isVegetablesLocked ? ' locked' : '')
          }
          src={vegetables}
          alt='vegetables'
        />
      </div>

      <div>
        <img
          className={
            'fruit absolute cursor-pointer' +
            (props.isFruitLocked ? ' locked' : '')
          }
          src={fruit}
          alt='fruit'
        />
      </div>

      <div>
        <img
          className={
            'dairy absolute cursor-pointer' +
            (props.isDairyLocked ? ' locked' : '')
          }
          src={dairy}
          alt='dairy'
        />

        <div>
          <img
            className={
              'meat absolute cursor-pointer' +
              (props.isMeatLocked ? ' locked' : '')
            }
            src={meat}
            alt='meat'
          />
        </div>
      </div>
    </div>
  )
}
