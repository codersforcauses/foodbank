import React, { useState, useEffect } from 'react'
import Draggable from '@components/FoodGroups/Draggable'
import { State_, StateDispatch } from '../types'

import { FoodGroupCharacterImage } from './types'
import { FOOD_GROUPS, GROUPS } from '@components/FoodGroups/groups'
import { ORIGIN_VECTOR2, Vector2 } from '@components/FoodGroups/Draggable/boundingbox'


const CHARACTER_POSITIONS: Vector2[] = [
  { x: 72, y: 16 },
  { x: 60, y: 34 },
  { x: 85, y: 35 },
  { x: 65, y: 63 },
  { x: 81, y: 62 }
]

const updatedFunction = (f: Function) => {
  const [rerender, setRerender] = useState(0)
  useEffect(() => {
    f()
  }, [rerender])
  return () => setRerender(rerender + 1)
}

const shuffle = <E,>(a: Array<E>) => {
  const array = [...a]
  let currentIndex: number = array.length

  while (currentIndex > 0) {
    // console.log(currentIndex, array)

    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    const test = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = test
  }

  // console.log('calling shuffle')
  return array
}

function generateCharacterSet(character_data: FoodGroupCharacterImage[]) {
  const characterSet: FoodGroupCharacterImage[] = []
  console.log('generated character set!')
  const filterFunction = (type: string) =>
    character_data.filter(character => character.type === type)

  const characters = FOOD_GROUPS.map(group => filterFunction(group))

  let positions = shuffle(CHARACTER_POSITIONS)

  // console.log('Character positions:', positions)  

  characters.forEach((characterTypeSet, i) => {
    characterSet.push(
      characterTypeSet[Math.floor(Math.random() * characterTypeSet.length)]
    )
    characterSet[i].start_pos = positions[i]
  })
  // console.log('CharacterSet:', characterSet)
  return characterSet
}
interface Props {
  currCharSet: FoodGroupCharacterImage[]
  nextCharSet: FoodGroupCharacterImage[]
  endDragFunc: Function
  startDragFunc: [StateDispatch<Vector2>, StateDispatch<GROUPS>]
  screenPositions_set1: State_<Vector2>[]
  screenPositions_set2: State_<Vector2>[]
  AbsPositionSetState: StateDispatch<Vector2>
  switchCharSet: boolean
  draggableZone: State_<DOMRect | undefined>
}



const CharacterSpawner: React.FC<Props> = (props: Props) => {

  useEffect(() => {
    // console.log('props.draggableZone', props.draggableZone)
    console.log('characters:', props.currCharSet)
  }, [])

  return (
    <>
    {
      props.currCharSet.map((character, index) => {
        console.log(character)
        return (
          <Draggable
            key={index}
            onEndDrag={updatedFunction(() => {
              props.endDragFunc
            })}
            onStartDrag={() => {
              props.startDragFunc[0](ORIGIN_VECTOR2)
              props.startDragFunc[1](character.type)
            }} 
            screenPosition={props.screenPositions_set1[index][0]}
            setScreenPosition={props.screenPositions_set1[index][1]}
            setAbsPosition={props.AbsPositionSetState}
            hidden={!props.switchCharSet}
            draggableZone={props.draggableZone[0]}
            {...character}
          />
        )
      })
    }
    {
      props.currCharSet.map((character, index) => {
        return (
          <Draggable
            key={index}
            onEndDrag={updatedFunction(() => {
              props.endDragFunc
            })}
            onStartDrag={() => {
              props.startDragFunc[0](ORIGIN_VECTOR2)
            }} 
            screenPosition={props.screenPositions_set2[index][0]}
            setScreenPosition={props.screenPositions_set2[index][1]}
            setAbsPosition={props.AbsPositionSetState}
            hidden={props.switchCharSet}
            draggableZone={props.draggableZone[0]}
            {...character}
          />
        )
      })
    }
    </>
  )
}

export { generateCharacterSet , CharacterSpawner }