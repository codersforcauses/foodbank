/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'
import { Button } from '../Button'

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
  const bgColour = `bg-${headerColor}`
  return (
<<<<<<< Updated upstream
    <div className='flex'>
      <h2
        className={`font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 bg-${headerColor}`}
=======
    <div className='flex w-tb1 md:w-tb2 lg:w-tb3 xl:w-tb4'>
      <h2
        className={`font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 text-2xl md:text-3xl ${bgColour}`}
>>>>>>> Stashed changes
      >
        {' '}
        {headerText}{' '}
      </h2>
<<<<<<< Updated upstream
      <div className='captionParent'>
        <div className='captionBox p-2 mt-12 flex relative flex-col items-center justify-center w-64 sm:w-96 h-56 sm:h-64'>
          <p className='captionText font-sans border-solid pb-2 mb-0 z-10 text-2xl relative mt-4 break-words leading-8'>
            {captionText}
          </p>

          {/* visit button is optional*/}
          {showButton && (
            <Button
              label='Visit'
              size='small'
              backgroundColor={
                headerColor === 'orange' ? headerColor : '#671e75'
              }
              primary={false}
            />
          )}
        </div>
=======

      <div className='captionboxborder h-64 absolute mt-12 w-tb1 md:w-tb2 lg:w-tb3 xl:w-tb4'></div>

      <div className='captionbox place-self-center p-8 mt-12 border-black flex relative flex-col items-center justify-center w-full h-64 pb-2 pt-2'>
        <p className='font-sans border-solid pb-2 mb-0 z-10 text-base leading-5 relative mt-4 break-words md:text-xl'>
          {captionText}
        </p>

        {/* visit button is optional*/}
        {showButton && (
          <Button
            label='Visit'
            size='small'
            backgroundColor={headerColor === 'orange' ? headerColor : 'primary'}
            primary={false}
          />
        )}
>>>>>>> Stashed changes
      </div>
    </div>
  )
}
