import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react'
import FoodGroups from 'components/FoodGroups'
import styles from 'components/FoodGroups/foodgroups.module.css'
import Draggable from '@components/FoodGroups/Draggable'
import { foodGroupsCharacterImages } from '@components/FoodGroups/Draggable/characterimages'
import { Vector2 } from '@components/FoodGroups/Draggable/boundingbox'
import { State_ } from '@components/FoodGroups/types'
import { Button, Modal } from '@components/Custom'

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

const N_DRAGGABLE = 5

const newArray = (v: any) => Array(N_DRAGGABLE).fill(v)

const FoodGroupsPage: React.FC = () => {
  const [modalState, setModalState] = useState(false)

  const [selectedDraggable, setSelectedDraggable] = useState(0)
  const [selectedDraggableType, setSelectedDraggableType] = useState<
    string | undefined
  >(undefined)

  // GAME STATE
  const [hoverType, setHoverType] = useState('')
  const [roundCounter, setRoundCounter] = useState(0)
  const [correctDraggables, setCorrectDraggables] = useState(newArray(false))
  const [wheelEnabled, setWheelEnabled] = useState(true)

  const [overridePosition, setOverridePosition] = useState({ x: 0, y: 0 })

  const draggablePositions: State_<Vector2>[] = []

  const endDragF = (index: number) => {
    console.log(
      `Dropped on '${hoverType}', Type of draggable is '${selectedDraggableType}' ${index}`
    )

    if (hoverType === selectedDraggableType) {
      correctDraggables[index] = true // CORRECT ANSWER
    } else if (hoverType !== '') {
      correctDraggables[index] = false // WRONG ANSWER
      // RESET POSITION
      draggablePositions[index][1](draggables[index].props.start_pos)
    }
    // CHECK FOR END OF ROUND
    if (correctDraggables.every((v: boolean) => v)) {
      setRoundCounter(roundCounter + 1)
      setWheelEnabled(false)
      setModalState(true)
    }
    setCorrectDraggables(correctDraggables)
  }

  // ON THE END OF A ROUND, PERFORM THESE ACTIONS
  const resetGame = () => {
    if (roundCounter === 0) return
    // alert(`Round complete!${roundCounter}`)
    setModalState(false)
    setWheelEnabled(true)
    setCorrectDraggables(correctDraggables.fill(false))
    draggablePositions.forEach((state, i) =>
      state[1](draggables[i].props.start_pos)
    )
  }

  var draggables: JSX.Element[] = []
  for (let i = 0; i < N_DRAGGABLE; i++) {
    const character =
      foodGroupsCharacterImages[i % foodGroupsCharacterImages.length]
    draggablePositions[i] = useState<Vector2>(character.start_pos)
    draggables[i] = (
      <Draggable
        key={i}
        onEndDrag={updatedFunction(() => {
          endDragF(i)
          setSelectedDraggableType(undefined)
        })}
        onStartDrag={() => {
          setSelectedDraggable(i)
          setSelectedDraggableType(character.type)
        }}
        screenPosition={draggablePositions[i][0]}
        setScreenPosition={draggablePositions[i][1]}
        setAbsPosition={setOverridePosition}
        {...character}
      />
    )
  }
  // refactor-firebase-authentication branch for achievement logic.

  useEffect(() => {
    console.log(draggablePositions[selectedDraggable][0])
  }, [draggablePositions[selectedDraggable][0]])

  return (
    <>
      {modalState && (
        <Modal
          heading={'Round complete!'}
          open={true}
          onClose={resetGame}
          size='lg'
        >
          <div className='flex items-center flex-col'>
            <h1>You have completed {roundCounter} rounds so far.</h1>
            <br />
            <Button className='flex items-center uppercase' onClick={resetGame}>
              next round
            </Button>
          </div>
        </Modal>
      )}
      <div
        className='flex justify-start'
        style={{ maxWidth: '100vh' }}
        draggable={false}
      >
        <div
          className='grid grid-cols-1	'
          style={{
            // display: 'grid',
            // gridTemplateColumns: '1fr',
            width: '90vh'
          }}
          draggable={false}
        >
          <FoodGroups
            overrideMouse={selectedDraggableType !== undefined} // FIXME: Override not working!
            overrideMousePosition={overridePosition} // FIXME: Override not working!
            setHoverType={setHoverType}
            enabled={wheelEnabled}
          />
          {/* WILL BE REPLACED WITH OBJECT SPAWNER */}
          {draggables}
          {/* END OF OBJECT SPAWNER */}
        </div>
        {/* <p className='select-none'>
          {hoverType}
          <br />
          {roundCounter}
        </p> */}
      </div>
    </>
  )
}

export default FoodGroupsPage
