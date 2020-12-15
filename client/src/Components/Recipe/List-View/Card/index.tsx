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
  color: 'Purple' | 'Orange' | 'Teal' | 'Blue'
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
  unlocked = true,
  label,
  image,
  text,
  color,
  ...props
}) => {
  const mode = unlocked
    ? 'unlocked'
    : 'locked'
  return (
    <div className={[color, mode].join(' ')} {...props}>
        <img src={image} alt={text} className='card-image'></img>
        <h1>{label}</h1>
    </div>
  )
}
