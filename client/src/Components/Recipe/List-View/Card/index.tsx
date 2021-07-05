/* eslint-disable react/prop-types */
import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {Character} from '../../../../lib/types'
import explosion from '../../../../lib/Extra/explosion.png'

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
    const fontColor = color === 'Primary' ? 'white' : 'black';
    return `relative unlocked bg-${color.toLowerCase()} text-${fontColor} shadow-xl hover:shadow-2xl`
  } else {
    return `relative locked bg-grey opacity-50 text-black shadow-xl hover:shadow-2xl`
  }
}

export const Card: React.FC<CardProps> = ({
                                            unlocked = true,
                                            label,
                                            image,
                                            text,
                                            color,
                                            slug,
                                            character,
                                            ...props
                                          }) => {
  return (
    <div className={['card', getClassesFromColor(color, unlocked)].join(' ')} {...props}>
      <div >
        {character ?
          <div>
            <img src={explosion} alt='explosion' className='absolute splash top-0 right-0'></img>
            <img src={character.imageGif} alt={character.name} className='character absolute top-0 right-0 z-21'></img>
          </div> : null}
      </div>
      <Link to={'/recipe/' + slug + '/overview'}>
        <img src={image} alt={text} className='card-image'></img>
        <h1>{label}</h1>
      </Link>
    </div>
  )
}
