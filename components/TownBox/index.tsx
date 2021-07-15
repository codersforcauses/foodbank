/* eslint-disable react/prop-types */
import React from 'react'
import './index.module.css'
// import Button from '../Button'
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

  maxWidth?: string

  maxHeight?: string

  close: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Townbox: React.FC<TownboxProps> = ({
  headerText = 'headerText',
  captionText = 'captionText',
  headerColor = 'orange',
  showButton = false,
  maxWidth = 'none',
  maxHeight = 'none',
  close = undefined
}) => {
  const bgColour: 'bg-primary' | 'bg-orange' = headerColor === 'primary' ? 'bg-primary' : 'bg-orange'
  return (
    <div className='flex w-tb1 md:w-tb2 lg:w-tb3 xl:w-tb4'>
      <h2
        className={`font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 text-2xl md:text-3xl ${bgColour}`}
      >
        {' '}{headerText}{' '}
      </h2>
      <div
        className='captionboxborder h-64 absolute mt-12 w-tb1 md:w-tb2 lg:w-tb3 xl:w-tb4'
        style={{'maxWidth' : maxWidth, 'maxHeight' : maxHeight}}
      ></div>
      <div
        className='captionbox place-self-center p-8 mt-12 border-black flex relative flex-col items-center justify-center w-full h-64 pb-2 pt-2'
        style={{'maxWidth' : maxWidth, 'maxHeight' : maxHeight, position:"relative"}}
      >
        <p className='font-sans border-solid pb-2 mb-0 z-10 text-base leading-5 relative mt-4 break-words md:text-xl pt-3'>
          {captionText}
        </p>
        <button onClick={close} style={{position:"absolute", right:20, top:10, transform:"scale(1.2)", cursor:"pointer"}}>&#10006;</button>
        {/* {showButton && (
          <Button
            bgColor={ bgColour }
          >
            Visit
          </Button>
        )} */}
      </div>
    </div>
  )
}

export default Townbox;