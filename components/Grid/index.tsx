import React from 'react';
import Image from 'next/image'
import chars from '@components/Character/characters.json';

// seems to be a problem here with using map
// https://sentry.io/answers/unique-key-prop/

const Grid = () => (
  <div className="grid">
    {chars.superhero.map(char => 
      <div className="grid-cell" key={char.name}>
        <div className="grid-name">
          {char.aliasName}
        </div>
        <Image 
          className="grid-image"
          src={char.baseImage}
          width="100px"
          height="100px"/>
      </div>)}
  </div>
  
  )

export default Grid;

