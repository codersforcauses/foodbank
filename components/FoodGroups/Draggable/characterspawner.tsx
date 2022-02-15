import React, { useState, useEffect } from 'react'
import Draggable, { DRAGGING_STATE } from '@components/FoodGroups/Draggable'
import { State_, StateDispatch } from '../types'

import {
  FoodGroupCharacterImage,
  FoodGroupCharacterImageDynamic
} from './types'
import { FOOD_GROUPS, GROUPS } from '@components/FoodGroups/groups'
import {
  ORIGIN_VECTOR2,
  Vector2,
  cloneVector2
} from '@components/FoodGroups/Draggable/boundingbox'
import { forwardRef } from 'react'

import { Client } from '@notionhq/client/build/src'
import {
  getCharacterData,
  getFormatData
} from '@components/FoodGroups/API/getData'

const N_DRAGGABLES = 5

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

  console.log('calling shuffle', array)
  return array
}

// TODO: make clientside (it's clientside rn)
function generateCharacterSet(character_data: FoodGroupCharacterImage[]) {
  if (character_data === undefined)
    throw new Error('Undefined character_data data')

  const characterSet: FoodGroupCharacterImageDynamic[] = []
  // console.log('generated character set!', character_data)
  const filterFunction = (type: string) =>
    character_data.filter(character => character.type === type)

  const characters = FOOD_GROUPS.map(group => filterFunction(group))

  const CHARACTER_POSITIONS: Vector2[] = [
    { x: 72, y: 16 },
    { x: 60, y: 34 },
    { x: 85, y: 35 },
    { x: 65, y: 63 },
    { x: 81, y: 62 }
  ]

  let positions_ = CHARACTER_POSITIONS.map(e => cloneVector2(e))
  // let positions_ = CHARACTER_POSITIONS.slice()
  let positions: Vector2[] = []
  for (let i = positions_.length - 1; i >= 0; i--) {
    const idx = Math.floor(Math.random() * i)
    positions.push(positions_[idx])
    // console.log('positions', positions)
    positions_.splice(idx, 1)
    // console.log('positions_', positions_)
  }

  console.log(positions)

  characters.forEach((characterTypeSet, i) => {
    // TODO: Clean up
    const test: FoodGroupCharacterImageDynamic = {
      start_pos: positions[i],
      ...characterTypeSet[Math.floor(Math.random() * characterTypeSet.length)]
    }
    characterSet.push(test)
  })
  // console.log(
  //   'CharacterSet:',
  //   characterSet.map(e => {
  //     return [e.start_pos, e.type, e.name]
  //   })
  // ) //, "character_data", character_data.filter(e=>e.start_pos.x!==0).map(e=>{return [e.start_pos,e.type]}))
  return characterSet
}

const randomiseZoneWheelPositions = () => {
  const CHARACTER_POSITIONS_MOBILE: Vector2[] = [
    { x: 0, y: 0 },
    { x: 20, y: 40},
    { x: 75, y: 40 },
    { x: 35, y: 65 },
    { x: 55, y: 65 }
  ]

  let positions_ = CHARACTER_POSITIONS_MOBILE.map(e => cloneVector2(e))
  // let positions_ = CHARACTER_POSITIONS.slice()
  let positions: Vector2[] = []
  for (let i = positions_.length - 1; i >= 0; i--) {
    const idx = Math.floor(Math.random() * i)
    positions.push(positions_[idx])
    // console.log('positions', positions)
    positions_.splice(idx, 1)
    // console.log('positions_', positions_)
  }
  return positions
}

const calculateDraggableZoneTotalPosition = (draggableZone:DOMRect | undefined, redZone:DOMRect | undefined, positions: Vector2[]) => {
  if (!draggableZone || !redZone ) throw new Error('one of the draggableZones are undefined')
  const newPositions:Vector2[] = []
  // console.log(positions)
  const blueZoneHeight = draggableZone.height - redZone.height
  positions.map((position, index) => {
    const newX = position.x
    // const newX = (((position.x/100) * redZone.width + draggableZone.width) / (draggableZone.width)) * 100
    const newY = (((position.y/100) * redZone.height + blueZoneHeight) / (draggableZone.height)) * 100
    console.log('newX', newX, 'newY', newY)
    newPositions.push({x:newX, y:newY})
  })
  console.log('redZone.width', redZone.width,  'redZone.height', redZone.height, 'draggableZone.width', draggableZone.width, 'draggableZone.height', draggableZone.height)
  console.log('1', newPositions)
  return newPositions
}


interface Props {
  endDragFunc: Function
  startDragFunc: [StateDispatch<Vector2>, StateDispatch<GROUPS>]
  AbsPositionSetState: StateDispatch<Vector2>
  draggablePositions_1: State_<Vector2>[]
  draggablePositions_2: State_<Vector2>[]
  draggingStates: State_<DRAGGING_STATE[]>
  draggableZone: State_<DOMRect | undefined>
  draggableZoneWheel: State_<DOMRect | undefined>
  currentCharSet: FoodGroupCharacterImage[]
  nextCharSet: FoodGroupCharacterImage[]
  switchSetFlag: boolean
  ref: any

  notion_character_data: FoodGroupCharacterImage[]
}

const CharacterSpawner: React.FC<Props> = (props: Props) => {
  // useEffect(() => {
  //   console.log('current')
  //   props.currentCharSet.forEach(e => {
  //     console.log(e.name)
  //   })
  // }, [props.currentCharSet])

  // useEffect(() => {
  //   console.log('next')
  //   props.nextCharSet.forEach(e => {
  //     console.log(e.name)
  //   })
  // }, [props.nextCharSet])

  // First Attempt to responsive position spawning
  // useEffect(() => {
  //   // console.log('hi mum', props.draggableZone[0].width, props.draggablePositions_1)
  //   if (!props.draggableZone[0]) return
  //   if(props.draggableZone[0].width <= 425){
  //     props.currentCharSet.map((character:any, index) => {
  //       // console.log('1', props.currentCharSet[index].start_pos)
  //       props.currentCharSet[index].start_pos = {x:character.start_pos.y, y:character.start_pos.x}
  //       // console.log('2', props.currentCharSet[index].start_pos)
  //     })
  //   }
  // }, [props.draggableZone])


  const generateSetElements = (
    charSet: FoodGroupCharacterImage[],
    positions: State_<Vector2>[],
    viewable: boolean
    ) =>
    charSet.map((character, index) => {
      // if((props.draggableZone[0]) && (props.draggableZone[0].width <= 425)){
      //   let positions = randomiseZoneWheelPositions()
      //   positions = calculateDraggableZoneTotalPosition(props.draggableZone[0], props.draggableZoneWheel[0], positions)
      //   props.currentCharSet[index].start_pos = positions[index]
      // }
      const endDragF = updatedFunction(() => props.endDragFunc(index, character.type))
        
      return (
        <Draggable
          key={index}
          index={index}
          draggingStates={props.draggingStates}
          onEndDrag={endDragF}
          onStartDrag={() => {
            props.startDragFunc[0](ORIGIN_VECTOR2)
            props.startDragFunc[1](character.type)
          }}
          screenPosition={positions[index][0]}
          setScreenPosition={positions[index][1]}
          setAbsPosition={props.AbsPositionSetState}
          hidden={viewable}
          draggableZone={props.draggableZone[0]}
          // draggableZoneWheel={props.draggableZoneWheel[0]}
          {...character}
        />
      )
    })

  return (
    <div className='grid grid-cols-1'>
    {generateSetElements(props.currentCharSet,props.draggablePositions_1,!props.switchSetFlag)}
    {generateSetElements(props.nextCharSet,props.draggablePositions_2,props.switchSetFlag)}
    </div>
  )
}

export { generateCharacterSet, CharacterSpawner, randomiseZoneWheelPositions, calculateDraggableZoneTotalPosition }
