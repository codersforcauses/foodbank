import React, { createContext, useContext, useEffect, useState } from 'react'
import FoodGroups from 'components/FoodGroups'
import styles from 'components/FoodGroups/foodgroups.module.css'
import Draggable from '@components/FoodGroups/Draggable'
import { foodGroupsCharacterImages } from '@components/FoodGroups/Draggable/characterimages'
import CharacterSpawner from '@components/FoodGroups/Draggable/characterspawner'
import { FoodGroupCharacterImage } from '@components/FoodGroups/Draggable/types'

/**
 */

// FIXME: Hack to ensure function uses updated state variables
const updatedFunction = (f: Function) => {
  const [rerender, setRerender] = useState(0)
  useEffect(() => {
    f()
  }, [rerender])
  return () => setRerender(rerender + 1)
}

const FoodGroupsPage: React.FC = () => {
  const [hoverType, setHoverType] = useState('')
  const [selectedDraggable, setSelectedDraggable] = useState('')
  const [unsortedCount, setUnsortedCount] = useState(5)
  const [correctCount, setCorrectCount] = useState(0)
  const [resetGame, setResetGame] = useState(false)

  const endDragF = updatedFunction(() => {
    console.log(
      `Dropped on '${hoverType}', Type of draggable is '${selectedDraggable}'`
    )

    let score = correctCount
    // TODO: REPLACE WITH ENUM
    if (hoverType === '') return
    if (hoverType === selectedDraggable) {
      score++
      setCorrectCount(score)
      console.log(score)

      // alert('Yay correct answer')
    } else {
      // alert('wrong answer')
    }

    setUnsortedCount(unsortedCount - 1)
    if (unsortedCount - 1 === 0) {
      // RESET GAME
      alert(`Score ${score}/5`)
      setCorrectCount(0)
      setUnsortedCount(5)
      setResetGame(!resetGame) // a bit hacky...
    }
  })

  const startDragF = ((type : string) => {
    setSelectedDraggable(type)
    // console.log(character)
  })


  return (
    <>
      <div
        className='flex justify-start'
        style={{ maxWidth: '100vh' }}
        draggable={false}
      >
        <div
          // className='flex flex-col'
          // style={{ flexShrink: 0, position: 'relative' }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            width: '90vh'
          }}
          draggable={false}
        >
          <FoodGroups setHoverType={setHoverType} />
          {/* {foodGroupsCharacterImages.map((character, index) => (
            <Draggable
              key={index}
              onEndDrag={endDragF}
              onStartDrag={() => setSelectedDraggable(character.type)}
              {...character}
            />
          ))} */}
          <CharacterSpawner
            onEndDrag={endDragF}
            onStartDrag={startDragF}
            resetlogic={resetGame}
          />
          {/* <div>
            Hi
          </div> */}
        </div>
        <p>{hoverType}</p>
      </div>
    </>
  )
}

export default FoodGroupsPage
