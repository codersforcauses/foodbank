/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import styles from './Card.module.css'
import {Character} from '../../../../lib/types'
import explosion from '../../../../lib/Extra/explosion.png'
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
  console.log(color);
  return (
    <div className={[styles.card, getClassesFromColor(color, unlocked)].join(' ').trim()} {...props}>
      <div className='absolute top-0 right-0'>
        {character &&
          <div className='z-10 relative h-24 w-24 transform translate-x-4 -translate-y-4'>
          <Image layout="fill" src={explosion} alt='explosion' />
          <div className="h-3/4 w-3/4 relative m-4">
            <Image layout="fill" src={character.imageGif} alt={character.name} />
          </div>
          </div>}
      </div>
      <Link href={'/recipes/' + slug + '/overview'}>
        <a>
          <Image src={image} alt={text} className={styles["card-image"]} /> 
          <h1>{label}</h1>
        </a>
      </Link>
    </div>
  )
}

export default Card;