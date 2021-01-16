/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'
import {Button} from '../Button'

export interface TownboxProps {
  /**
   * Header colour: enter either orange/primary
   */
  headerColor?: 'primary' | 'orange'

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
  headerText = 'headerText',
  captionText = 'captionText',
  headerColor = 'orange',
  showButton = false,
  widthSize = 550
}) => {
  const bgColour = `bg-${headerColor}`
  return (
    <div className = "flex" style={{width: widthSize}}>
      
      <h2 className = {`font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 bg-${headerColor}`}
      > {headerText} </h2>
      
      <div className = "captionboxborder h-64 absolute mt-12" style={{width: widthSize}}></div> 
        
      <div className = "captionbox place-self-center p-2 mt-12 border-black flex relative flex-col items-center justify-center w-full h-64">
        <p className = "font-sans border-solid pb-2 mb-0 z-10 text-2xl relative mt-4 break-words leading-8" style={{width: widthSize - 100}}>
          {captionText}
        </p>
            
        {/* visit button is optional*/}
        {showButton && <Button label="Visit" size="small" backgroundColor={headerColor==='orange' ? headerColor : '#671e75'} primary={false}/>} 
      </div>
    </div>
  )
}
