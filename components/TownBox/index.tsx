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
        className={`${styles.captionbox} flex relative flex-col items-center justify-center p-8 mt-16 border-4 border-black w-full h-auto pb-2 pt-2`}
      >
        <p className='font-sans border-solid pb-2 mb-0 z-10 text-base leading-5 relative mt-4 break-words md:text-xl pt-3'>
          {captionText}
        </p>

        <button onClick={close} className='absolute right-5 top-2 scale-110'>
          &#10006;
        </button>

        {showButton && (
          <Button className='' bgColor={bgColour}>
            Visit
          </Button>
        )}
      </div>
    </div>
  )
}
export default Townbox
