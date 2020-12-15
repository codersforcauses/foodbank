/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'
import {Button} from '../Button'

export interface TownboxProps {
  /**
   * Header colour: enter either bg-orange or bg-primary
   */
  headerColor?: string

  /**
   * Heading contents
   */
  headerText?: string

  /**
   * Textbox contents
   */
  captionText?: string

  /**
   * Show visited button?
   */
  showButton?: boolean

}

/**
 * Primary UI component for user interaction
 */
export const Townbox: React.FC<TownboxProps> = ({
  headerText,
  captionText,
  headerColor,
  showButton
}) => {
  return (
    <div className = "w-96 flex">
      
      <h2 className = {['font-serif','text-white', 'p-2', 'border-black', 'border-2', 'rounded-md', 'ml-10', 'mt-6', 'absolute', 'z-10', headerColor].join(
        ' '
      )}> {headerText} </h2>
      
      <div className = "captionbox place-self-center p-2 mt-12 border-black flex relative flex-col items-center w-full">

        <p className = "w-4/5 font-sans border-solid pb-2 mb-0 z-10 text-base relative mt-6 break-words">
          {captionText}
        </p>
            
        {/* visit button is optional*/}
        {showButton && <Button label="visited" size="small" backgroundColor='#00acd0' primary={false}/>} 
        </div>
        
      </div>
  )
}
