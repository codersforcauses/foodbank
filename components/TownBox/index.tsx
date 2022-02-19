import Link from 'next/link'

import Button from '../Custom/Button'

import styles from './index.module.css'

interface TownboxProps {
  headerColor?: 'primary' | 'orange'
  headerText?: string
  captionText?: string
  showButton?: boolean
  close: () => void
  linksrc: string | undefined
}

const Townbox = ({
  headerText,
  captionText,
  headerColor,
  showButton,
  close,
  linksrc
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
        <p className='relative z-10 pt-3 pb-2 mt-4 mb-0 font-sans font-bold leading-5 break-words skew-x-12 border-solid sm:font-normal md:text-xl'>
          {captionText}
        </p>

        <button
          onClick={close}
          className='absolute scale-110 skew-x-12 right-5 top-2'
        >
          &#10006;
        </button>

        {showButton && (
          <Link href={`town/${linksrc}`} passHref>
            <Button className='skew-x-12' color='primary'>
              Visit
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
export default Townbox
