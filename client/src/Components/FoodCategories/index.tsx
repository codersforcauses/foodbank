import React from 'react'

import './index.css'

import Grains from './Categories/grains'
import Vegetables from './Categories/vegetables'
import Fruit from './Categories/fruit'
import Dairy from './Categories/dairy'
import Meat from './Categories/meat'

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

export const FoodCategories = (props: FoodCategoriesProps) => {
  return (
    <div className='food-categories-container'>
      <div>
        <img
          className={'grains' + (props.isGrainsLocked ? ' locked' : '')}
          src={grains}
          alt='grains'
        />
      </div>

      <div>
        <img
          className={'vegetables' + (props.isVegetablesLocked ? ' locked' : '')}
          src={vegetables}
          alt='vegetables'
        />
      </div>

      <div>
        <img
          className={'fruit' + (props.isFruitLocked ? ' locked' : '')}
          src={fruit}
          alt='fruit'
        />
      </div>

      <div>
        <img
          className={'dairy' + (props.isDairyLocked ? ' locked' : '')}
          src={dairy}
          alt='dairy'
        />

        <div>
          <img
            className={'meat' + (props.isMeatLocked ? ' locked' : '')}
            src={meat}
            alt='meat'
          />
        </div>
      </div>
    </div>
  )
}
