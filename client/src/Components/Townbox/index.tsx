/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'
import Button from '../Button'
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
  showButton = false
}) => {
  const bgColour: 'bg-primary' | 'bg-orange' =
    headerColor === 'primary' ? 'bg-primary' : 'bg-orange'
  return (
    <div className='flex w-tb1 md:w-tb2 lg:w-tb3 xl:w-tb4'>
      <h2
        className={`font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 text-2xl md:text-3xl ${bgColour}`}
      >
        {' '}
        {headerText}{' '}
      </h2>
      <div className='captionboxborder h-64 absolute mt-12 w-tb1 md:w-tb2 lg:w-tb3 xl:w-tb4'></div>
      <div className='captionbox townboxBackground place-self-center p-8 mt-12 border-black flex relative flex-col items-center justify-center w-full h-64 pb-2 pt-2'>
        <p className='font-sans border-solid pb-2 mb-0 z-10 text-base leading-5 relative mt-4 break-words md:text-xl'>
          {captionText}
        </p>
        {showButton && <Button bgColor={bgColour}>Visit</Button>}
      </div>
    </div>
  )
}
