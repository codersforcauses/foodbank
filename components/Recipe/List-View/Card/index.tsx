/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import styles from './Card.module.css'
import {Character} from '@lib/types'
import explosion from 'public/images/Extra/explosion.png'
import Image from 'next/image'

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
  /**
   * Slug part of the recipe url
   */
  slug: string
  /**
   * Character for the recipe
   */
  character?: Character
}

const getClassesFromColor = (color: string, unlocked: boolean) => {
  if (unlocked) {
    switch (color) {
      case 'Primary':
        return `relative unlocked bg-primary text-white shadow-xl hover:shadow-2xl`
      
      case 'Teal':
        return `relative unlocked bg-teal text-black shadow-xl hover:shadow-2xl`
      
      case 'Orange':
        return `relative unlocked bg-orange text-black shadow-xl hover:shadow-2xl`
      
      default:
        return `relative unlocked bg-blue text-black shadow-xl hover:shadow-2xl`
    }
  } else {
    return `relative locked bg-grey opacity-50 text-black shadow-xl hover:shadow-2xl`
  }
}

const Card = ({
  unlocked = true,
  label,
  image,
  text,
  color,
  slug,
  character,
  ...props
}: CardProps) => {
  
  return (
    <div className={[styles.card, getClassesFromColor(color, unlocked)].join(' ').trim()} {...props}>
      
        {character &&
          <div className="">
            <img src={explosion.src} alt='explosion' className={styles['splash'] + ' absolute top-0 right-0'}/>
            <img src={character.imageGif.src} alt={character.name} className={styles.character + ' absolute top-0 right-0'}></img>
          </div>}
      
      <Link href={'/recipes/' + slug}>
        <a>
          <img src={image.src} alt={text} className={styles["card-image"]} /> 
          <h1>{label}</h1>
        </a>
      </Link>
    </div>
  )
}

export default Card;
