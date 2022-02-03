import Button from '../Custom/Button'

import './index.module.css'

// component not completed
interface TownboxProps {
  headerColor?: 'primary' | 'orange'
  headerText?: string
  captionText?: string
  showButton?: boolean
}

const Townbox = ({
  headerText = 'headerText',
  captionText = 'captionText',
  headerColor = 'orange',
  showButton = false
}: TownboxProps) => {
  return (
    <div className='flex w-tb1 md:w-tb2 lg:w-tb3 xl:w-tb4'>
      <h2
        className={[
          'font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 text-2xl md:text-3xl',
          headerColor === 'primary' ? 'bg-primary' : 'bg-orange'
        ]
          .join(' ')
          .trim()}
      >
        {headerText}
      </h2>
      <div className='absolute h-64 mt-12 captionboxborder w-tb1 md:w-tb2 lg:w-tb3 xl:w-tb4'></div>
      <div className='relative flex flex-col items-center justify-center w-full h-64 p-8 pt-2 pb-2 mt-12 border-black captionbox place-self-center'>
        <p className='relative z-10 pb-2 mt-4 mb-0 font-sans text-base leading-5 break-words border-solid md:text-xl'>
          {captionText}
        </p>
        {showButton && <Button color={headerColor}>Visit</Button>}
      </div>
    </div>
  )
}
export default Townbox
