import React from 'react'
import BlueBoy from './Dairy/BlueBoy.jpg'
import YoBoy from './Dairy/YoBoy.jpg'

const imgTransforms = [
  {
    before: BlueBoy,
    after: YoBoy,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  }
]

const Characters: React.FC = () => {
  return (
    <div>
      Characters:
      {imgTransforms.map(img => (
        <>
          <img src={img.before} alt='' width={500} />
          <p>{img.text}</p>
        </>
      ))}
    </div>
  )
}

export default Characters
