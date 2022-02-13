import { useState } from 'react'
import Button from '../Custom/Button'
import styles from './index.module.css'

interface TownboxProps {
  headerColor?: 'primary' | 'orange'
  headerText?: string
  captionText?: string
  showButton?: boolean
  close: () => void
}

const Townbox = ({
  headerText,
  captionText,
  headerColor,
  showButton,
  close
}: TownboxProps) => {
  const bgColour: 'bg-primary' | 'bg-orange' =
    headerColor === 'primary' ? 'bg-primary' : 'bg-orange'

  return (
    <div className='flex p-8'>
      <h2
        className={`font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 text-2xl md:text-3xl ${bgColour}`}
      >
        {' '}
        {headerText}{' '}
      </h2>

      <div
        className={`${styles.captionbox} -skew-x-12 flex relative flex-col items-center justify-center p-8 mt-16 border-4 border-black w-full h-auto pb-2 pt-2`}
      >
        <p className='skew-x-12 font-sans border-solid z-10 font-bold sm:font-normal md:text-xl break-words leading-5 relative mb-0 mt-4 pb-2 pt-3'>
          {captionText}
        </p>

        <button
          onClick={close}
          className='skew-x-12 absolute right-5 top-2 scale-110'
        >
          &#10006;
        </button>

        {showButton && (
          <Button className='skew-x-12' color='primary'>
            Visit
          </Button>
        )}
      </div>
    </div>
  )
}
export default Townbox
