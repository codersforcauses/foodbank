import React, { useState } from 'react'
import BlueBoy from './Dairy/BlueBoy.jpg'
import YoBoy from './Dairy/YoBoy.jpg'
import MightyMilk from './Dairy/MightyMilk.jpg'
import MilkMaid from './Dairy/MilkMaid.jpg'

interface Character {
  before: string
  after: string
  text: string
}

const imgTransforms: Array<Character> = [
  {
    before: BlueBoy,

    after: YoBoy,

    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },

  {
    before: MilkMaid,
    after: MightyMilk,
    text: 'I am Milk!'
  }
]

const CharacterImg = ({ character }: { character: Character }) => {
  const [image, setImage] = useState(character.before)
  const changeImage = () => {
    setImage(character.after)
  }

  return (
    <span>
      <img
        src={image}
        alt=''
        width={500}
        onClick={changeImage}
        onKeyPress={changeImage}
        role='presentation'
      />
      <p>{character.text}</p>
    </span>
  )
}

const Characters: React.FC = () => {
  return (
    <div>
      Characters:
      {imgTransforms.map((img, index) => (
        <CharacterImg key={index} character={img} />
      ))}
    </div>
  )
}

export default Characters
