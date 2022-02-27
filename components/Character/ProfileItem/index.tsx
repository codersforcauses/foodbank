import type { Character } from 'lib/types'
interface Props {
  character: Character
  showEverydayFood: boolean
}

const ProfileItem = ({ character, showEverydayFood }: Props) => {
  return (
    <>
      {showEverydayFood ? (
        <>
          <div className='absolute inline-flex flex-col -top-16 gap-4 min-h-min '>
            <div className='border-t-4 border-l-4 border-r-8 border-b-4 border-black lg:top-3 sm:-top-1 top-1 relative sm:h-12 lg:w-72 sm:w-56 lg:text-3xl sm:text-2xl  text-sm bottom-10 bg-primary flex justify-center items-center text-white uppercase transform rotate-6 z-10 p-2 left-10 sm:left-16'>
              Everyday Food
            </div>
            <div className=' border-t-4 border-l-4 border-r-8 border-b-4 border-black  lg:top-0 -top-5 relative sm:h-12 lg:w-72 md:w-56 md:h-12 md:-top-6  lg:text-3xl md:text-2xl text-sm bg-orange flex justify-center items-center text-white uppercase transform -rotate-6 p-2'>
              {character.name}
            </div>
          </div>
          <div className='p-4 lg:p-12 md:p-10 text-right '>
            <h1 className='leading-8 font-bold md:text-2xl'>ABOUT</h1>
            <p className='text-xs md:text-lg font-sans'>{character.about}</p>
            <h1 className='leading-8 font-bold md:text-2xl'>LIKES...</h1>
            <p className='text-xs md:text-lg font-sans'>
              {character.everydayLikes}
            </p>
            <h1 className='leading-8 font-bold md:text-2xl'>RECIPE</h1>
            <p className='text-xs md:text-lg font-sans'>{character.recipes}</p>
          </div>
        </>
      ) : (
        <>
          <div className='absolute inline-flex flex-col -top-16 gap-4'>
            <div className='border-t-4 border-l-4 border-r-8 border-b-4 border-black lg:top-3 sm:-top-1 top-1 relative sm:h-12 lg:w-72 sm:w-56 lg:text-3xl sm:text-2xl  text-sm bottom-10 bg-primary flex justify-center items-center text-white uppercase transform rotate-6 z-10 p-2 left-10 sm:left-16'>
              Superhero Food
            </div>
            <div className='border-t-4 border-l-4 border-r-8 border-b-4 border-black  lg:top-0 -top-5 relative sm:h-12 lg:w-72 md:w-56 md:h-12 md:-top-6  lg:text-3xl md:text-2xl text-sm bg-orange flex justify-center items-center text-white uppercase transform -rotate-6 p-2'>
              {character.aliasName}
            </div>
          </div>
          <div className='p-4 lg:p-12 md:p-10 text-right '>
            <h1 className='leading-8 font-bold lg:text-2xl'>SUPERPOWERS</h1>
            <p className='lg:text-lg md:text-base sm:text-sm font-sans'>
              {character.superpowers}
            </p>
            <h1 className='leading-8 font-bold lg:text-2xl'>USE</h1>
            <p className='text-lg md:text-base sm:text-sm font-sans'>
              {character.heroUse}
            </p>
            <h1 className='leading-8 font-bold lg:text-2xl'>LIKES...</h1>
            <p className='lg:text-lg md:text-base sm:text-sm font-sans'>
              {character.heroLikes}
            </p>
          </div>
        </>
      )}
    </>
  )
}

export default ProfileItem
