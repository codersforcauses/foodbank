import React, { useState, useEffect } from 'react'
import Draggable from '@components/FoodGroups/Draggable'
import { State_, StateDispatch } from '../types'

import { FoodGroupCharacterImage,FoodGroupCharacterImageDynamic } from './types'
import { FOOD_GROUPS, GROUPS } from '@components/FoodGroups/groups'
import { ORIGIN_VECTOR2, Vector2, cloneVector2 } from '@components/FoodGroups/Draggable/boundingbox'
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
  if(character_data === undefined) throw new Error('Undefined character_data data')

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

  let positions_ = CHARACTER_POSITIONS.map(e=>cloneVector2(e))
  // let positions_ = CHARACTER_POSITIONS.slice()
  let positions:Vector2[] = []
  for (let i = positions_.length-1; i >=0; i--) {
    const idx = Math.floor(Math.random() * i)
    positions.push(positions_[idx])
    console.log("positions",positions)
    positions_.splice(idx,1)
    console.log("positions_",positions_);
    
  }

  // shuffleArray(positions)

  // console.log('Character positions:', positions)  

  // Need to clone characterSet object
  characters.forEach((characterTypeSet, i) => {

    // TODO: Clean up
    const test: FoodGroupCharacterImageDynamic = {
      start_pos: {x:0,y:0},
      ...characterTypeSet[Math.floor(Math.random() * characterTypeSet.length)]
    }


    characterSet.push(test)
    characterSet[i].start_pos = positions[i]
  })
  console.log('CharacterSet:', characterSet.map(e=>{return [e.start_pos,e.type]}))//, "character_data", character_data.filter(e=>e.start_pos.x!==0).map(e=>{return [e.start_pos,e.type]}))
  return characterSet
}


interface Props {
  endDragFunc: Function
  startDragFunc: [StateDispatch<Vector2>, StateDispatch<GROUPS>]
  AbsPositionSetState: StateDispatch<Vector2>
  draggablePositions_1: State_<Vector2>[]
  draggablePositions_2: State_<Vector2>[]
  draggableZone: State_<DOMRect | undefined>
  currentCharSet: FoodGroupCharacterImage[]
  nextCharSet: FoodGroupCharacterImage[]
  switchSetFlag: boolean
  ref: any

  notion_character_data : FoodGroupCharacterImage[]
}



const CharacterSpawner: React.FC<Props> = (props: Props) => {

  useEffect(()=> {
    // console.log(props.endDragFunc)
  }, [])

  const generateSetElements = (charSet:FoodGroupCharacterImage[], positions:State_<Vector2>[], viewable:boolean) =>
    charSet.map((character, index) => {
      // console.log(character)
      return (
        <Draggable
          key={index}
          onEndDrag={
            updatedFunction(() => props.endDragFunc(index,character.type))
          }
          onStartDrag={() => {
            props.startDragFunc[0](ORIGIN_VECTOR2)
            props.startDragFunc[1](character.type)
          }} 
          screenPosition={positions[index][0]}
          setScreenPosition={positions[index][1]}
          setAbsPosition={props.AbsPositionSetState}
          hidden={viewable}
          draggableZone={props.draggableZone[0]}
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




export { generateCharacterSet , CharacterSpawner }