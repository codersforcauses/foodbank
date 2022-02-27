import React, { useCallback, useEffect, useState } from 'react'
import { useRef } from 'react'
import FoodGroups from 'components/FoodGroups/Wheel'

import Auth from '@components/Auth'
import { Button, Modal } from '@components/Custom'
import { useFirebase } from '@components/FirebaseContext/context'
import { DRAGGING_STATE } from '@components/FoodGroups/Draggable'
import { ORIGIN_VECTOR2, Vector2 } from '@components/FoodGroups/vector'
import {
  CHARACTER_POSITIONS,
  CharacterSpawner,
  generateCharacterSet
} from '@components/FoodGroups/Draggable/characterspawner'
import {
  FoodGroupCharacterImage,
  FoodGroupCharacterImageDynamic
} from '@components/FoodGroups/Draggable/types'
import { GROUPS } from '@components/FoodGroups/groups'
import {
  draggableZoneStyle,
  startZoneStyle
} from '@components/FoodGroups/styles'
import { State_ } from '@components/FoodGroups/types'
import {
  getCharacterData,
  getFormatData
} from '@components/NotionAPI/getCharacterData'
import { N_DRAGGABLE } from '@components/FoodGroups/constants'
import { MAX_TROPHIES } from '@components/TrophyRoom/TrophyCabinet'

const newArray = (v: any) => Array(N_DRAGGABLE).fill(v)

interface Props {
  notion_character_data: FoodGroupCharacterImage[]
}

const FoodGroupsPage: React.FC<Props> = ({ notion_character_data }: Props) => {
  const { user, addAchievementsCount, achievementsCount } = useFirebase()
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
  const [newTrophy, setNewTrophy] = useState(false)

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
  draggablePositions_1[0] = useState<Vector2>(() => ORIGIN_VECTOR2)
  draggablePositions_2[0] = useState<Vector2>(() => ORIGIN_VECTOR2)
  draggablePositions_1[1] = useState<Vector2>(() => ORIGIN_VECTOR2)
  draggablePositions_2[1] = useState<Vector2>(() => ORIGIN_VECTOR2)
  draggablePositions_1[2] = useState<Vector2>(() => ORIGIN_VECTOR2)
  draggablePositions_2[2] = useState<Vector2>(() => ORIGIN_VECTOR2)
  draggablePositions_1[3] = useState<Vector2>(() => ORIGIN_VECTOR2)
  draggablePositions_2[3] = useState<Vector2>(() => ORIGIN_VECTOR2)
  draggablePositions_1[4] = useState<Vector2>(() => ORIGIN_VECTOR2)
  draggablePositions_2[4] = useState<Vector2>(() => ORIGIN_VECTOR2)

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

  // Login logic - add offline trophies to account.
  useEffect(() => {
    if (user && roundCounterSignedOut > 0) {
      const achievementsToAdd = Math.min(MAX_TROPHIES, roundCounterSignedOut)
      addAchievementsCount?.(achievementsToAdd)
      setRoundCounterSignedOut(0) // Reset count so it doesn't get 'double added' if a person relogs
    }
  }, [achievementsCount.count]) // Do not include user - user triggers update BEFORE achievements is updated with online data

  const endDragFuncRef = useRef<Function>((index: number) => {})

  useEffect(() => {
    endDragFuncRef.current = (index: number) => {
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
        if (switchSetFlag && draggablePositions_1[index])
          draggablePositions_1[index][1](
            CHARACTER_POSITIONS[currentCharSet[index].start_index]
          )
        else if (draggablePositions_2[index])
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
        if (achievementsCount.count < MAX_TROPHIES) {
          setNewTrophy(true)
          addAchievementsCount?.(1) // ADD 1 ACHIEVEMENT
        } else {
          setNewTrophy(false)
        }

        setWheelEnabled(false)
        setModalState(true)
      }
      setOverridePosition(ORIGIN_VECTOR2)
      setHoverType(GROUPS.NONE)
      setSelectedDraggableType(GROUPS.NONE)
      setCorrectDraggables(correctDraggables)
    }
  }, [hoverType])

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
          <div className='flex flex-col items-center'>
            <h1>
              You have completed {roundCounter} rounds in this game
              {newTrophy
                ? user !== null
                  ? ' - you have earned a new trophy!'
                  : ' - Sign into your account to earn trophies!'
                : ' - you have all of the trophies!'}
            </h1>
            <br />
            {user === null ? (
              <>
                <Button
                  className='flex items-center uppercase'
                  onClick={() => {
                    resetGame()
                    toggleOpenSignInForm()
                  }}
                >
                  Sign-in
                </Button>
                <br />
              </>
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
      <br />
      <div className='relative z-10 font-serif text-6xl xl:text-7xl text-center pt-10 hidden md:block'>
        FUN FOOD SORT
      </div>
      <div className={draggableZoneStyle} ref={draggableZoneRef}>
        <FoodGroups
          overrideMouse={selectedDraggableType !== GROUPS.NONE}
          overrideMousePosition={overridePosition}
          hoverType={[hoverType, setHoverType]}
          enabled={wheelEnabled}
        />
        <CharacterSpawner
          notion_character_data={notion_character_data}
          endDragFuncRef={endDragFuncRef}
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
