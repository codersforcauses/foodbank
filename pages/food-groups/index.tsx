import React, { useCallback, useEffect, useState } from 'react'
import FoodGroups from 'components/FoodGroups'
import { DRAGGING_STATE } from '@components/FoodGroups/Draggable'
import {
  FoodGroupCharacterImage,
  FoodGroupCharacterImageDynamic
} from '@components/FoodGroups/Draggable/types'
import {
  ORIGIN_VECTOR2,
  Vector2
} from '@components/FoodGroups/Draggable/boundingbox'
import { State_ } from '@components/FoodGroups/types'
import { Button, Modal } from '@components/Custom'
import { useRef } from 'react'

import { GROUPS } from '@components/FoodGroups/groups'
import { ACHIEVEMENT, useFirebase } from '@components/FirebaseContext'
import Auth from '@components/Auth'

import {
  generateCharacterSet,
  CharacterSpawner,
  CHARACTER_POSITIONS
} from '@components/FoodGroups/Draggable/characterspawner'

import {
  getCharacterData,
  getFormatData
} from '@components/FoodGroups/API/getData'
import {
  draggableZoneStyle,
  startZoneStyle
} from '@components/FoodGroups/styles'

const N_DRAGGABLE = 5
const newArray = (v: any) => Array(N_DRAGGABLE).fill(v)

interface Props {
  notion_character_data: FoodGroupCharacterImage[]
}

const FoodGroupsPage: React.FC<Props> = ({ notion_character_data }: Props) => {
  const { achievements, updateAchievementsDocument, user } = useFirebase()
  // SIGN IN FORM
  const [openSignInForm, setOpenSignInForm] = useState(false)
  const toggleOpenSignInForm = useCallback(() => {
    setOpenSignInForm(prev => !prev)
  }, [])

  const [modalState, setModalState] = useState(false)
  const [selectedDraggableType, setSelectedDraggableType] = useState(
    GROUPS.NONE
  )

  // GAME STATE
  const [hoverType, setHoverType] = useState(GROUPS.DEFAULT)
  const [roundCounter, setRoundCounter] = useState(0)
  const [correctDraggables, setCorrectDraggables] = useState(() =>
    newArray(false)
  )
  const [wheelEnabled, setWheelEnabled] = useState(true)

  // This keeps the number of wins while signed out so when the user logs in it gets added to their score
  const [roundCounterSignedOut, setRoundCounterSignedOut] = useState(0)

  // Draggable Logic
  const [overridePosition, setOverridePosition] = useState(ORIGIN_VECTOR2)

  const [currentCharSet, setCharSet] = useState<
    FoodGroupCharacterImageDynamic[]
  >(() => generateCharacterSet(notion_character_data))
  const [nextCharSet, setNextCharSet] = useState<
    FoodGroupCharacterImageDynamic[]
  >(() => generateCharacterSet(notion_character_data))

  const draggablePositions_1: State_<Vector2>[] = []
  const draggablePositions_2: State_<Vector2>[] = []
  for (let i = 0; i < 5; i++) {
    draggablePositions_1[i] = useState<Vector2>(() => ORIGIN_VECTOR2)
    draggablePositions_2[i] = useState<Vector2>(() => ORIGIN_VECTOR2)
  }

  const [draggingStates, setDraggingStates] = useState<DRAGGING_STATE[]>(() =>
    newArray(DRAGGING_STATE.START)
  )

  const [switchSetFlag, setswitchSetFlag] = useState(true)

  const draggableZoneRef = useRef<any>(undefined)
  const draggableZoneWheelRef = useRef<any>(undefined)
  const [draggableZone, setDraggableZone] = useState<DOMRect | undefined>()

  useEffect(() => {
    // Checking if the draggable parent element's rect got initialised
    if (!draggableZoneRef.current)
      throw new Error(
        'reference to parent div containing foodgroup and draggables didnt return .current'
      )
    if (!draggableZoneWheelRef.current)
      throw new Error('Wheel Ref did not return current')
    setDraggableZone(draggableZoneRef.current.getBoundingClientRect())

    window.addEventListener('resize', () => {
      if (!draggableZoneRef.current)
        throw new Error(
          'reference to parent div containing foodgroup and draggables didnt return .current'
        )
      setDraggableZone(draggableZoneRef.current.getBoundingClientRect())
    })

    window.addEventListener('resize', () => {
      if (!draggableZoneWheelRef.current)
        throw new Error('draggableZoneWheelRef not initialised?')
    })
  }, [])

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

  const endDragF = (index: number) => {
    if (hoverType === selectedDraggableType && hoverType != GROUPS.DEFAULT) {
      const draggingStates_ = [...draggingStates]
      draggingStates_[index] = DRAGGING_STATE.WHEEL
      setDraggingStates(draggingStates_)
      correctDraggables[index] = true // CORRECT ANSWER
    } else {
      //if (hoverType !== GROUPS.NONE) { // Dropping on 'nothing' makes it return now.
      const draggingStates_ = [...draggingStates]
      draggingStates_[index] = DRAGGING_STATE.START
      setDraggingStates(draggingStates_)
      correctDraggables[index] = false // WRONG ANSWER
      // RESET POSITION
      if (switchSetFlag)
        draggablePositions_1[index][1](
          CHARACTER_POSITIONS[currentCharSet[index].start_index]
        )
      else
        draggablePositions_2[index][1](
          CHARACTER_POSITIONS[nextCharSet[index].start_index]
        )
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
    setModalState(false)
    setWheelEnabled(true)
    setCorrectDraggables(correctDraggables.fill(false))
    setDraggingStates(newArray(DRAGGING_STATE.START))
    if (switchSetFlag) {
      nextCharSet.map((character, index) => {
        draggablePositions_2[index][1](
          CHARACTER_POSITIONS[character.start_index]
        )
      })
      setCharSet(generateCharacterSet(notion_character_data))
    } else {
      currentCharSet.map((character, index) => {
        draggablePositions_1[index][1](
          CHARACTER_POSITIONS[character.start_index]
        )
      })
      setNextCharSet(generateCharacterSet(notion_character_data))
    }
    setswitchSetFlag(!switchSetFlag)
  }

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
      <div className='text-center text-6xl pt-[2%] pb-[1%] hidden md:block'>
        SORT THE FOOD
      </div>
      <div className={draggableZoneStyle} ref={draggableZoneRef}>
        <FoodGroups
          overrideMouse={selectedDraggableType !== GROUPS.NONE}
          overrideMousePosition={overridePosition}
          setHoverType={setHoverType}
          enabled={wheelEnabled}
        />
        <CharacterSpawner
          notion_character_data={notion_character_data}
          endDragFunc={endDragF}
          startDragFunc={[setOverridePosition, setSelectedDraggableType]}
          absPositionSetState={setOverridePosition}
          currentCharSet={currentCharSet}
          nextCharSet={nextCharSet}
          switchSetFlag={switchSetFlag}
          draggingStates={[draggingStates, setDraggingStates]}
          draggablePositions_1={draggablePositions_1}
          draggablePositions_2={draggablePositions_2}
          draggableZone={[draggableZone, setDraggableZone]}
          startZoneE={'start_zone'}
        />
        <div
          className={startZoneStyle}
          id='start_zone'
          ref={draggableZoneWheelRef}
        >
          Drag these foods into the correct category
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await getCharacterData()

  const notion_character_data: FoodGroupCharacterImage[] = getFormatData(data)

  return {
    props: {
      notion_character_data
    }
  }
}

export default FoodGroupsPage
