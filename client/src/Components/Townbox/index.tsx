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

  /**
   * specify width in terms of px
   */
  widthSize?: number
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
  return (
    <div className='flex'>
      <h2
        className={`font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 bg-${headerColor}`}
      >
        {' '}
        {headerText}{' '}
      </h2>
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
      </div>
    </div>
  )
}
