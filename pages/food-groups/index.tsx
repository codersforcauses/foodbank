import React, { useCallback, useEffect, useState } from 'react'
import FoodGroups from 'components/FoodGroups'
import Draggable from '@components/FoodGroups/Draggable'
import { FoodGroupCharacterImage } from '@components/FoodGroups/Draggable/types'
import {
  ORIGIN_VECTOR2,
  Vector2
} from '@components/FoodGroups/Draggable/boundingbox'
import { State_ } from '@components/FoodGroups/types'
import { Button, Modal } from '@components/Custom'
import { useRef } from 'react'

import { Client } from '@notionhq/client/build/src'
import {
  getCharacterData,
  getFormatData
} from '@components/FoodGroups/API/getData'
import { FOOD_GROUPS, GROUPS } from '@components/FoodGroups/groups'
import { ACHIEVEMENT, useFirebase } from '@components/FirebaseContext'
import Auth from '@components/Auth'

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

const CHARACTER_POSITIONS: Vector2[] = [
  { x: 72, y: 16 },
  { x: 60, y: 34 },
  { x: 85, y: 35 },
  { x: 65, y: 63 },
  { x: 81, y: 62 }
]

const shuffle = <E,>(a: Array<E>) => {
  const array = [...a]
  let currentIndex: number = array.length

  while (currentIndex > 0) {
    console.log(currentIndex, array)

    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    const test = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = test
  }

  console.log('calling shuffle')
  return array
}

function generateCharacterSet(character_data: FoodGroupCharacterImage[]) {
  const characterSet: FoodGroupCharacterImage[] = []

  const filterFunction = (type: string) =>
    character_data.filter(character => character.type === type)

  const characters = FOOD_GROUPS.map(group => filterFunction(group))

  let positions = shuffle(CHARACTER_POSITIONS)

  console.log('Character positions:', positions)

  characters.forEach((characterTypeSet, i) => {
    characterSet.push(
      characterTypeSet[Math.floor(Math.random() * characterTypeSet.length)]
    )
    characterSet[i].start_pos = positions[i]
  })

  return characterSet
}

interface Props {
  notion_character_data: FoodGroupCharacterImage[]
}

// const test = (test: FoodGroupCharacterImage[]) => {
//   console.log('wtf')

//   return generateCharacterSet(test)
// }

const FoodGroupsPage: React.FC<Props> = ({ notion_character_data }: Props) => {
  const { achievements, updateAchievementsDocument, user } = useFirebase()
  const getChars = useCallback(() => {
    return generateCharacterSet(notion_character_data)
  }, [notion_character_data])
  const [modalState, setModalState] = useState(false)
  const [selectedDraggableType, setSelectedDraggableType] = useState(
    GROUPS.NONE
  )

  // GAME STATE
  const [hoverType, setHoverType] = useState(GROUPS.DEFAULT)
  const [roundCounter, setRoundCounter] = useState(0)

  // This keeps the number of wins while signed out so when the user logs in it gets added to their score
  const [roundCounterSignedOut, setRoundCounterSignedOut] = useState(0)

  const [correctDraggables, setCorrectDraggables] = useState(newArray(false))
  const [wheelEnabled, setWheelEnabled] = useState(true)
  const [currentCharSet, setCharSet] = useState<FoodGroupCharacterImage[]>(
    getChars()
  )
  const [nextCharSet, setNextCharSet] = useState<FoodGroupCharacterImage[]>(
    // getChars()
    []
  )
  const [overridePosition, setOverridePosition] = useState(ORIGIN_VECTOR2)
  const [switchCharSet, setSwitchCharSet] = useState(true)

  const draggableZoneRef = useRef<any>(undefined)
  const [draggableZone, setDraggableZone] = useState<DOMRect | undefined>()
  // SIGN IN FORM
  const [openSignInForm, setOpenSignInForm] = useState(false)

  const toggleOpenSignInForm = useCallback(() => {
    setOpenSignInForm(prev => !prev)
  }, [])

  const draggablePositions: State_<Vector2>[] = []
  const draggablePositions_2: State_<Vector2>[] = []
  for (let i = 0; i < N_DRAGGABLE; i++) {
    draggablePositions[i] = useState<Vector2>(ORIGIN_VECTOR2)
    draggablePositions_2[i] = useState<Vector2>(ORIGIN_VECTOR2)
  }
  var draggables: JSX.Element[] = []
  var draggables_2: JSX.Element[] = []

  useEffect(() => {
    if (!draggableZoneRef.current)
      throw new Error(
        'reference to parent div containing foodgroup and draggables didnt return .current'
      )
    setDraggableZone(draggableZoneRef.current.getBoundingClientRect())
    window.addEventListener('resize', () => {
      if (!draggableZoneRef.current)
        throw new Error(
          'reference to parent div containing foodgroup and draggables didnt return .current'
        )
      setDraggableZone(draggableZoneRef.current.getBoundingClientRect())
    })
  }, [])

  const endDragF = (index: number) => {
    if (hoverType === selectedDraggableType) {
      correctDraggables[index] = true // CORRECT ANSWER
    } else if (hoverType !== GROUPS.NONE) {
      correctDraggables[index] = false // WRONG ANSWER
      // RESET POSITION
      draggablePositions[index][1](draggables[index].props.start_pos)
      draggablePositions_2[index][1](draggables_2[index].props.start_pos)
    }

    // CHECK FOR END OF ROUND
    if (correctDraggables.every((v: boolean) => v)) {
      // END OF ROUND
      setRoundCounter(roundCounter + 1)
      if (!user) {
        setRoundCounterSignedOut(roundCounterSignedOut + 1)
      }
      updateAchievementsDocument?.({
        // If achievements based on the number of wins should be implemented in the future.
        [ACHIEVEMENT.DRAG_DROP_WIN_COUNT]:
          achievements[ACHIEVEMENT.DRAG_DROP_WIN_COUNT] + 1,
        // For now, achivements is just the amount of game wins
        [ACHIEVEMENT.ACHIEVEMENT_COUNT]:
          achievements[ACHIEVEMENT.ACHIEVEMENT_COUNT] + 1
      })
      setWheelEnabled(false)
      setModalState(true)
    }
    setOverridePosition(ORIGIN_VECTOR2)
    setHoverType(GROUPS.NONE)
    setSelectedDraggableType(GROUPS.NONE)
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
    draggablePositions_2.forEach((state, i) =>
      state[1](draggables_2[i].props.start_pos)
    )
    // setCharSet(nextCharSet)
    // setNextCharSet(generateCharacterSet(notion_character_data))

    if (switchCharSet) {
      console.log('trigger1')
      setCharSet(generateCharacterSet(notion_character_data))
    } else {
      console.log('trigger2')
      setNextCharSet(generateCharacterSet(notion_character_data))
    }
    setSwitchCharSet(!switchCharSet)
    // console.log(switchCharSet, setCharSet, nextCharSet)
  }

  currentCharSet.map((character, index) => {
    draggablePositions[index] = useState<Vector2>(character.start_pos)
    draggables[index] = (
      <Draggable
        key={index}
        onEndDrag={updatedFunction(() => {
          endDragF(index)
        })}
        onStartDrag={() => {
          setOverridePosition(ORIGIN_VECTOR2)
          setSelectedDraggableType(character.type)
        }}
        screenPosition={draggablePositions[index][0]}
        setScreenPosition={draggablePositions[index][1]}
        setAbsPosition={setOverridePosition}
        hidden={!switchCharSet}
        draggableZone={draggableZone}
        {...character}
      />
    )
  })

  nextCharSet.map((character, index) => {
    draggablePositions_2[index] = useState<Vector2>(character.start_pos)
    draggables_2[index] = (
      <Draggable
        key={index}
        onEndDrag={updatedFunction(() => {
          endDragF(index)
        })}
        onStartDrag={() => {
          setSelectedDraggableType(character.type)
        }}
        screenPosition={draggablePositions_2[index][0]}
        setScreenPosition={draggablePositions_2[index][1]}
        setAbsPosition={setOverridePosition}
        hidden={switchCharSet}
        draggableZone={draggableZone}
        {...character}
      />
    )
  })

  useEffect(() => {
    if (user && roundCounterSignedOut > 0) {
      updateAchievementsDocument?.({
        [ACHIEVEMENT.DRAG_DROP_WIN_COUNT]:
          achievements[ACHIEVEMENT.DRAG_DROP_WIN_COUNT] + roundCounterSignedOut,
        // For now, achivements is just the amount of game wins
        [ACHIEVEMENT.ACHIEVEMENT_COUNT]:
          achievements[ACHIEVEMENT.ACHIEVEMENT_COUNT] + roundCounterSignedOut
      })
      setRoundCounterSignedOut(0) // Reset count so it doesn't get 'double added' if a person relogs
    }
  }, [roundCounterSignedOut, achievements]) // Do not include user - user triggers update BEFORE achievements is updated with online data

  return (
    <>
      {modalState && (
        <Modal heading={'You won!'} open={true} onClose={resetGame} size='lg'>
          <div className='flex items-center flex-col'>
            <h1>
              You have completed {roundCounter} rounds in this game
              {user !== null ? ' - you have earned a new trophy!' : ''}
            </h1>
            <h2>
              {user !== null
                ? `You have won ${
                    achievements[ACHIEVEMENT.DRAG_DROP_WIN_COUNT]
                  } rounds in total!`
                : 'Sign into your account to save your progress!'}
            </h2>
            <br />
            {user === null ? (
              <button className='animate-bounce' onClick={toggleOpenSignInForm}>
                Sign-in
              </button>
            ) : (
              ''
            )}
            <Button className='flex items-center uppercase' onClick={resetGame}>
              next round
            </Button>
          </div>
        </Modal>
      )}

      <Auth open={openSignInForm && !user} onClose={toggleOpenSignInForm} />
      <div className='text-center text-6xl pt-[2%] pb-[1%]'>SORT THE FOOD</div>
      {/* <div className='flex self-center ' draggable={false}> */}
      <div
        className='flex justify-between ml-[10%] w-[80%] relative'
        ref={draggableZoneRef}
      >
        <FoodGroups
          overrideMouse={selectedDraggableType !== GROUPS.NONE}
          overrideMousePosition={overridePosition}
          setHoverType={setHoverType}
          enabled={wheelEnabled}
        />
        <div className='grid grid-cols-1'>
          {draggables}
          {draggables_2}
        </div>
        <div className='pr-[10%] pt-[5%] text-2xl'>
          Drag these foods into the correct category
        </div>
      </div>

      {/* </div> */}
      {/* <div className='grid grid-cols-1 w-3/4 h-[45rem] bg-blue' ref={draggableZoneRef}>
        {draggables}
      </div> */}
    </>
  )
}
export const getServerSideProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY
  })

  const { data } = await getCharacterData()

  const notion_character_data: FoodGroupCharacterImage[] = getFormatData(data)

  return {
    props: {
      notion_character_data
    }
  }
}

export default FoodGroupsPage
