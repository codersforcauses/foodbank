/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'

export interface CardProps {
  /**
   * Has this recipe been unlocked?
   */
  unlocked?: boolean
  /**
   * Recipe title
   */
  label: string
  /**
   * Image to show
   */
  image: string
  /**
   * Alt text for image
   */
  text: string 
  /**
   * Color of Card
   */
  color: 'Primary' | 'Orange' | 'Teal' | 'Blue'
  /**
   * Optional click handler
   */
  onClick?: () => void
}


const getClassesFromColor = (color: string, unlocked: boolean) => {
  if (unlocked) {
    const fontColor = color === 'Primary' ? 'white': 'black';
    return `unlocked bg-${color.toLowerCase()} text-${fontColor } shadow-xl hover:shadow-2xl`
  }
  else {
    return `locked bg-grey opacity-50 text-black shadow-xl hover:shadow-2xl`
  }
} 

export const Card: React.FC<CardProps> = ({
  unlocked = true,
  label,
  image,
  text,
  color,
  ...props
}) => {
  return (
    <div className={['card', getClassesFromColor(color, unlocked)].join(' ')} {...props}>
        <img src={image} alt={text} className='card-image'></img>
        <h1>{label}</h1>
    </div>
  )
}
