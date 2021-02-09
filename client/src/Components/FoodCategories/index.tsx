import React from 'react'
import './index.css'

import grains from './Images/grains.png'
import vegetables from './Images/vegetables.png'
import fruit from './Images/fruit.png'
import dairy from './Images/dairy.png'
import meat from './Images/meat.png'

import FoodCategory from './food-category'

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
      <FoodCategory
        className='grains absolute cursor-pointer'
        image={grains}
        alt='grains'
        isLocked={props.isGrainsLocked}
      ></FoodCategory>

      <FoodCategory
        className='vegetables absolute cursor-pointer'
        image={vegetables}
        alt='vegetables'
        isLocked={props.isVegetablesLocked}
      ></FoodCategory>

      <FoodCategory
        className='fruit absolute cursor-pointer'
        image={fruit}
        alt='fruit'
        isLocked={props.isFruitLocked}
      ></FoodCategory>

      <FoodCategory
        className='dairy absolute cursor-pointer'
        image={dairy}
        alt='dairy'
        isLocked={props.isDairyLocked}
      ></FoodCategory>

      <FoodCategory
        className='meat absolute cursor-pointer'
        image={meat}
        alt='meat'
        isLocked={props.isMeatLocked}
      ></FoodCategory>
    </div>
  )
}
