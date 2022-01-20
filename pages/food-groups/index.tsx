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
import CharacterSpawner from '@components/FoodGroups/Draggable/characterspawner'
import { FoodGroupCharacterImage } from '@components/FoodGroups/Draggable/types'
import { Vector2 } from '@components/FoodGroups/Draggable/boundingbox'
import { State_ } from '@components/FoodGroups/types'
import { Button, Modal } from '@components/Custom'

import { Client } from '@notionhq/client/build/src'
import { getCharacterImages } from '@components/FoodGroups/API/getData'
import { getServerSideProps } from '@components/FoodGroups/API/getData'

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

function generateCharacterSet() {
  const characterSet: FoodGroupCharacterImage[] = []
  // Is there a dynamic way to do this? (answer is yes but what is the most efficient way to do it?)
  const meatCharacters = foodGroupsCharacterImages.filter(character => character.type === 'meat')
  const dairyCharacters = foodGroupsCharacterImages.filter(character => character.type === 'dairy')
  const vegetableCharacters = foodGroupsCharacterImages.filter(character => character.type === 'vegetables')
  const fruitCharacters = foodGroupsCharacterImages.filter(character => character.type === 'fruit')
  const grainCharacters = foodGroupsCharacterImages.filter(character => character.type === 'grains')

  characterSet.push(meatCharacters[Math.floor(Math.random()*meatCharacters.length)])
  characterSet.push(dairyCharacters[Math.floor(Math.random()*dairyCharacters.length)])
  characterSet.push(vegetableCharacters[Math.floor(Math.random()*vegetableCharacters.length)])
  characterSet.push(fruitCharacters[Math.floor(Math.random()*fruitCharacters.length)])
  characterSet.push(grainCharacters[Math.floor(Math.random()*grainCharacters.length)])

  return characterSet
}



const FoodGroupsPage: React.FC = () => {
  const [modalState, setModalState] = useState(false)
  const [selectedDraggable, setSelectedDraggable] = useState(0)
  const [selectedDraggableType, setSelectedDraggableType] = useState<string | undefined>(undefined)

  // GAME STATE
  const [hoverType, setHoverType] = useState('')
  const [roundCounter, setRoundCounter] = useState(0)
  const [correctDraggables, setCorrectDraggables] = useState(newArray(false))
  const [wheelEnabled, setWheelEnabled] = useState(true)
  const [currentCharSet, setCharSet] = useState<FoodGroupCharacterImage[]>(generateCharacterSet())
  const [overridePosition, setOverridePosition] = useState({ x: 0, y: 0 })

  const draggablePositions: State_<Vector2>[] = []
  var draggables: JSX.Element[] = []

  
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
    setCharSet(generateCharacterSet)
  }
  
  // useEffect(() => {
  //   set = generateCharacterSet()
  // }, [])

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

  const notion = new Client({
    auth: process.env.NOTION_API_KEY
  });

  const getSomeInfo = async () => {
    let data = await notion.databases.query({
      database_id: process.env.NOTION_CHARACTERS_DB_ID ?? ''
    })
    return data
  }

  useEffect(() => {
    

    console.log(notion)

    

  }, [])

    
  
  

  // for (let i = 0; i < N_DRAGGABLE; i++) {
  //   const character =
  //     foodGroupsCharacterImages[i % foodGroupsCharacterImages.length]
  //   draggablePositions[i] = useState<Vector2>(character.start_pos)
  //   draggables[i] = (
  //     <Draggable
  //       key={i}
  //       onEndDrag={updatedFunction(() => {
  //         endDragF(i)
  //         setSelectedDraggableType(undefined)
  //       })}
  //       onStartDrag={() => {
  //         setSelectedDraggable(i)
  //         setSelectedDraggableType(character.type)
  //       }}
  //       screenPosition={draggablePositions[i][0]}
  //       setScreenPosition={draggablePositions[i][1]}
  //       setAbsPosition={setOverridePosition}
  //       {...character}
  //     />
  //   )
  // }
  


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
          {/* <FoodGroups setHoverType={setHoverType} /> */}
          {/* {foodGroupsCharacterImages.map((character, index) => (
            <Draggable
              key={index}
              onEndDrag={endDragF}
              onStartDrag={() => setSelectedDraggable(character.type)}
              {...character}
            />
          ))} */}
          {/* <CharacterSpawner
            onEndDrag={endDragF}
            onStartDrag={startDragF}
            resetlogic={resetGame}
          /> */}
          {/* <div>
            Hi
          </div> */}
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
