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
          <div className='absolute inline-flex flex-col -top-16 gap-4 min-h-min'>
            <div className='border-t-4 border-l-4 border-r-8 border-b-4 border-black -top-5 relative h-16 w-72 text-3xl bottom-10 bg-primary flex justify-center items-center text-white uppercase transform rotate-6 z-10 p-2 left-16'>
              Everyday Food
            </div>
            <div className=' border-t-4 border-l-4 border-r-8 border-b-4 border-black -top-10 relative h-16 w-72 text-3xl bg-orange flex justify-center items-center text-white uppercase transform -rotate-6 p-2'>
              {character.name}
            </div>
          </div>
          <div className='p-12 text-right  w-128'>
            <h1 className='leading-8 font-bold text-2xl'>ABOUT</h1>
            <p className='text-lg font-sans'>{character.about}</p>
            <h1 className='leading-8 font-bold text-2xl'>LIKES...</h1>
            <p className='text-lg font-sans'>{character.everydayLikes}</p>
            <h1 className='leading-8 font-bold text-2xl'>RECIPE</h1>
            <p className='text-lg font-sans'>{character.recipes}</p>
          </div>
        </>
      ) : (
        <>
          <div className='absolute inline-flex flex-col -top-16 gap-4'>
            <div className='border-t-4 border-l-4 border-r-8 border-b-4 border-black top-0 relative h-16 w-72 text-3xl bottom-10 bg-primary flex justify-center items-center text-white uppercase transform rotate-6 z-10 p-2 left-16'>
              Superhero Food
            </div>
            <div className=' border-t-4 border-l-4 border-r-8 border-b-4 border-black -top-4 relative h-16 w-72 text-3xl bg-orange flex justify-center items-center text-white uppercase transform -rotate-6 p-2'>
              {character.aliasName}
            </div>
          </div>
          <div className='p-16 pt-20 text-right'>
            <h1 className='leading-8 font-bold text-2xl'>SUPERPOWERS</h1>
            <p className='text-lg font-sans'>{character.superpowers}</p>
            <h1 className='leading-8 font-bold text-2xl'>USE</h1>
            <p className='text-lg font-sans'>{character.heroUse}</p>
            <h1 className='leading-8 font-bold text-2xl'>LIKES...</h1>
            <p className='text-lg font-sans'>{character.heroLikes}</p>
          </div>
        </>
      )}
    </>
  )
}

export default ProfileItem
