/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'

export interface CardProps {
  unlocked?: boolean
  recipeTitle: string
  image: string
  imageAltText: string 
  color: 'Primary' | 'Orange' | 'Teal' | 'Blue'
  onClick?: () => void
}


const getClassesFromColor = (color: string, unlocked: boolean) => { 
  if (!unlocked) return `locked bg-grey opacity-50 text-black shadow-xl hover:shadow-2xl`; 
  const fontColor = color === 'Primary' ? 'white': 'black'; 
  return `unlocked bg-${color.toLowerCase()} text-${fontColor} shadow-xl hover:shadow-2xl` };

export const Card: React.FC<CardProps> = ({
  unlocked = true,
  recipeTitle,
  image,
  imageAltText,
  color,
  ...props
}) => {
  return (
    <div className={['card', getClassesFromColor(color, unlocked)].join(' ')} {...props}>
        <img src={image} alt={imageAltText} className='card-image'></img>
        <h1>{recipeTitle}</h1>
    </div>
  )
}
