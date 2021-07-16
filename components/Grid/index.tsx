import React from 'react'
import Image from 'next/image'
import Character from '@components/Character/index'
import chars from '@components/Character/characters.json'

function CharInfo(props: any) {
  const ChosenChar = props.char
  return Character(ChosenChar)
}

const Grid = () => (
  <div className='grid'>
    <h1 className='grid-title'>THE SUPERHEROS</h1>
    <div className='grid-super'>
      {chars.superhero.map(char => (
        <button
          className='grid-cell'
          key={char.name}
          onClick={e => CharInfo(char)}
        >
          <Image
            className='grid-image'
            src={char.baseImage}
            alt={char.name}
            width='200px'
            height='200px'
          />
        </button>
      ))}
    </div>
  </div>
)

export default Grid
