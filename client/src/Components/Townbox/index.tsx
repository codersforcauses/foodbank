/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'

export interface TownboxProps {
  /**
   * What background color to use
   */

  /**
   * Heading contents
   */
  heading?: string

  /**
   * Textbox contents
   */
  boxcaption?: string
}

/**
 * Primary UI component for user interaction
 */
export const Townbox: React.FC<TownboxProps> = ({
  heading,
  boxcaption
}) => {

  return (
    <div className = "townbox w-96">
        <h2 className = "font-serif text-white bg-orange"> 
          {heading}
        </h2>
        <div className = "captionbox place-self-center">
          
          <div className = "svgElement">
            <svg className = "w-96">
              <polygon points="30, 0 380, 0 350, 200 0, 200"/>
              <p className = "boxcaption font-sans border-solid m-0">
                {boxcaption}
              </p>
            </svg>
          </div>
          
        </div>
    </div>
  )
}
