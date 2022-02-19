import type { Character } from 'lib/types'
import { useState } from 'react'
interface Props {
  character: Character
  state: boolean
}

const ProfileItem = ({ character, state }: Props) => {

  if (state) {
    return (
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
          <h1 className='leading-8 font-bold'>ABOUT</h1>
          <p>
            {character.about}
          </p>
          <h1 className='leading-8 font-bold'>LIKES...</h1>
          <p>
            {character.everydayLikes}
          </p>
          <h1 className='leading-8 font-bold'>RECIPE</h1>
          <p>{character.recipes}</p>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='absolute inline-flex flex-col -top-16 gap-4'>
          <div className='border-t-4 border-l-4 border-r-8 border-b-4 border-black top-0 relative h-16 w-72 text-3xl bottom-10 bg-primary flex justify-center items-center text-white uppercase transform rotate-6 z-10 p-2 left-16'>
            Superhero Food
          </div>
          <div className=' border-t-4 border-l-4 border-r-8 border-b-4 border-black -top-4 relative h-16 w-72 text-3xl bg-orange flex justify-center items-center text-white uppercase transform -rotate-6 p-2'>
            {character.aliasName}
          </div>
        </div>
        <div className='p-16 text-right'>
          <h1 className='leading-8 font-bold'>SUPERPOWERS</h1>
          <p>
            {character.superPowers}
          </p>
          <h1 className='leading-8 font-bold'>USE</h1>
          <p>
            {character.heroUse}
          </p>
          <h1 className='leading-8 font-bold'>LIKES...</h1>
          <p>{character.heroLikes}</p>
        </div>
      </>)
  }
}

export default ProfileItem
