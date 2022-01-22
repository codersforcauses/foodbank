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
import { foodGroupsCharacterImages, notion_food_dict } from '@components/FoodGroups/Draggable/characterimages'
import CharacterSpawner from '@components/FoodGroups/Draggable/characterspawner'
import { FoodGroupCharacterImage } from '@components/FoodGroups/Draggable/types'
import { Vector2 } from '@components/FoodGroups/Draggable/boundingbox'
import { State_ } from '@components/FoodGroups/types'
import { Button, Modal } from '@components/Custom'

import { Client } from '@notionhq/client/build/src'
import { getCharacterData, getFormatData } from '@components/FoodGroups/API/getData'
// import { getServerSideProps } from '@components/FoodGroups/API/getData'

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

function generateCharacterSet(character_data:FoodGroupCharacterImage[]) {
  const characterSet: FoodGroupCharacterImage[] = []
  // Is there a dynamic way to do this? (answer is yes but what is the most efficient way to do it?)
  const meatCharacters = character_data.filter(character => character.type === 'meat')
  const dairyCharacters = character_data.filter(character => character.type === 'dairy')
  const vegetableCharacters = character_data.filter(character => character.type === 'vegetables')
  const fruitCharacters = character_data.filter(character => character.type === 'fruit')
  const grainCharacters = character_data.filter(character => character.type === 'grains')

  characterSet.push(meatCharacters[Math.floor(Math.random()*meatCharacters.length)])
  characterSet.push(dairyCharacters[Math.floor(Math.random()*dairyCharacters.length)])
  characterSet.push(vegetableCharacters[Math.floor(Math.random()*vegetableCharacters.length)])
  characterSet.push(fruitCharacters[Math.floor(Math.random()*fruitCharacters.length)])
  characterSet.push(grainCharacters[Math.floor(Math.random()*grainCharacters.length)])

  return characterSet
}



const FoodGroupsPage: React.FC = ({ notion_character_data}:FoodGroupCharacterImage[] ) => {
  const [modalState, setModalState] = useState(false)
  const [selectedDraggable, setSelectedDraggable] = useState(0)
  const [selectedDraggableType, setSelectedDraggableType] = useState<string | undefined>(undefined)

  // GAME STATE
  const [hoverType, setHoverType] = useState('')
  const [roundCounter, setRoundCounter] = useState(0)
  const [correctDraggables, setCorrectDraggables] = useState(newArray(false))
  const [wheelEnabled, setWheelEnabled] = useState(true)
  const [currentCharSet, setCharSet] = useState<FoodGroupCharacterImage[]>(generateCharacterSet(notion_character_data))
  const [overridePosition, setOverridePosition] = useState({ x: 0, y: 0 })

  const draggablePositions: State_<Vector2>[] = []
  var draggables: JSX.Element[] = []

  // console.log(notion_character_data)

  
  function randomizeDraggables() {
    
  }

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

    // setUnsortedCount(unsortedCount - 1)
    // if (unsortedCount - 1 === 0) {
    //   // RESET GAME
    //   alert(`Score ${score}/5`)
    //   setCorrectCount(0)
    //   setUnsortedCount(5)
    //   setResetGame(!resetGame) // a bit hacky...
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
    setCharSet(generateCharacterSet(notion_character_data))
  }

  currentCharSet.map((character, index) => {
    draggablePositions[index] = useState<Vector2>(character.start_pos)
    draggables[index] = (
      <Draggable
        key={index}
        onEndDrag={updatedFunction(() => {
          endDragF(index)
          setSelectedDraggableType(undefined)
        })}
        onStartDrag={() => {
          setSelectedDraggable(index)
          setSelectedDraggableType(character.type)
        }}
        screenPosition={draggablePositions[index][0]}
        setScreenPosition={draggablePositions[index][1]}
        setAbsPosition={setOverridePosition}
        {...character}
      />
    )
  })

  // refactor-firebase-authentication branch for achievement logic.

  // useEffect(() => {
  //   console.log(draggablePositions[selectedDraggable][0])
  // }, [draggablePositions[selectedDraggable][0]])

  // const startDragF = ((type : string) => {
  //   setSelectedDraggable(type)
  //   // console.log(character)
  // })


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
export const getServerSideProps = async () => {

  const notion = new Client({
    auth: process.env.NOTION_API_KEY
  });

  
  const { data } = await getCharacterData()

  const notion_character_data:FoodGroupCharacterImage[] = getFormatData(data)
  
  return {
    props: {
      notion_character_data,
    }
  }
}


export default FoodGroupsPage


