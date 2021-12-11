import React from 'react'
import Button from '../Custom/Button'
import styles from './index.module.css'

// component not completed
interface TownboxProps {
  headerColor?: 'primary' | 'orange'
  headerText?: string
  captionText?: string
  showButton?: boolean
  close: () => void
}

const Townbox = ({
  headerText = 'headerText',
  captionText = 'captionText',
  headerColor = 'orange',
  showButton = false,
  close = undefined
}: TownboxProps) => {
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

      <div
        className={`${styles.captionboxborder} h-64 absolute mt-12 w-tb1 md:w-tb2 lg:w-tb3 xl:w-tb4`}
      ></div>

      <div
        className={`${styles.captionbox} place-self-center p-8 mt-12 border-black flex relative flex-col items-center justify-center w-full h-64 pb-2 pt-2`}
      >
        <p className='font-sans border-solid pb-2 mb-0 z-10 text-base leading-5 relative mt-4 break-words md:text-xl pt-3'>
          {captionText}
        </p>

        <button
          onClick={close}
          style={{
            position: 'absolute',
            right: 20,
            top: 10,
            transform: 'scale(1.2)',
            cursor: 'pointer'
          }}
        >
          &#10006;
        </button>

        {showButton && <Button bgColor={bgColour}>Visit</Button>}
      </div>
    </div>
  )
}
export default Townbox
