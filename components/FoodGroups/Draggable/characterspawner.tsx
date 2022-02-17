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

const N_DRAGGABLES = 5

const updatedFunction = (f: Function) => {
  const [rerender, setRerender] = useState(0)
  useEffect(() => {
    f()
  }, [rerender])
  return () => setRerender(rerender + 1)
}

export const CHARACTER_POSITIONS: Vector2[] = [
  { x: 5, y: 25 },
  { x: 25, y: 5 },
  { x: 45, y: 25 },
  { x: 50 / 3, y: 50 },
  { x: 100 / 3, y: 50 }
]

// TODO: make clientside (it's clientside rn)
export const CHARACTER_END: Record<string, Vector2[]> = {
  [GROUPS.DAIRY]: [
    { x: 45, y: 70 },
    { x: 0, y: 0 }
  ],
  [GROUPS.FRUIT]: [
    { x: 60, y: 55 },
    { x: 0, y: 0 }
  ],
  [GROUPS.GRAINS]: [
    { x: 20, y: 20 },
    { x: 0, y: 0 }
  ],
  [GROUPS.VEGETABLES]: [
    { x: 60, y: 20 },
    { x: 0, y: 0 }
  ],
  [GROUPS.MEAT]: [
    { x: 25, y: 60 },
    { x: 0, y: 0 }
  ],
  [GROUPS.NONE]: [],
  [GROUPS.DEFAULT]: [],
  [GROUPS.TUCKER]: []
} // TODO: make clientside (it's clientside rn)
function generateCharacterSet(character_data: FoodGroupCharacterImage[]) {
  if (character_data === undefined)
    throw new Error('Undefined character_data data')

  const characterSet: FoodGroupCharacterImageDynamic[] = []
  // console.log('generated character set!', character_data)
  const filterFunction = (type: string) =>
    character_data.filter(character => character.type === type)

  const characters = FOOD_GROUPS.map(group => filterFunction(group))

  const CHARACTER_POSITIONS: number[] = [0, 1, 2, 3, 4]

  let positions_ = CHARACTER_POSITIONS.map(e => /*cloneVector2*/ e)
  // let positions_ = CHARACTER_POSITIONS.slice()
  let positions: number[] = []
  for (let i = positions_.length - 1; i >= 0; i--) {
    const idx = Math.floor(Math.random() * i)
    positions.push(positions_[idx])
    // console.log('positions', positions)
    positions_.splice(idx, 1)
    // console.log('positions_', positions_)
  }

  console.log(positions)

  const TYPE_COUNT: { [K in GROUPS]: number } = {
    [GROUPS.DAIRY]: 0,
    [GROUPS.FRUIT]: 0,
    [GROUPS.GRAINS]: 0,
    [GROUPS.VEGETABLES]: 0,
    [GROUPS.MEAT]: 0,
    // Others
    [GROUPS.NONE]: 0,
    [GROUPS.DEFAULT]: 0,
    [GROUPS.TUCKER]: 0
  }

  characters.forEach((characterTypeSet, i) => {
    // TODO: Clean up
    console.log(characterTypeSet)
    const character =
      characterTypeSet[Math.floor(Math.random() * characterTypeSet.length)]
    const test: FoodGroupCharacterImageDynamic = {
      start_index: positions[i],
      end_index: TYPE_COUNT[character.type],
      ...character
    }
    characterSet.push(test)
    TYPE_COUNT[character.type]++
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
    { x: 10, y: 10 },
    { x: 20, y: 40 },
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

const calculateDraggableZoneTotalPosition = (
  draggableZone: DOMRect | undefined,
  redZone: DOMRect | undefined,
  positions: Vector2[]
) => {
  if (!draggableZone || !redZone)
    throw new Error('one of the draggableZones are undefined')
  const newPositions: Vector2[] = []
  // console.log(positions)
  const blueZoneHeight = draggableZone.height - redZone.height
  positions.map((position, index) => {
    const newX = position.x
    // const newX = (((position.x/100) * redZone.width + draggableZone.width) / (draggableZone.width)) * 100
    const newY =
      (((position.y / 100) * redZone.height + blueZoneHeight) /
        draggableZone.height) *
      100
    console.log('newX', newX, 'newY', newY)
    newPositions.push({ x: newX, y: newY })
  })
  console.log(
    'redZone.width',
    redZone.width,
    'redZone.height',
    redZone.height,
    'draggableZone.width',
    draggableZone.width,
    'draggableZone.height',
    draggableZone.height
  )
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
  currentCharSet: FoodGroupCharacterImageDynamic[]
  nextCharSet: FoodGroupCharacterImageDynamic[]
  switchSetFlag: boolean
  startZoneE: string
  ref: any

  notion_character_data: FoodGroupCharacterImage[]
}

const CharacterSpawner: React.FC<Props> = (props: Props) => {
  const [resizeCharacterPositions, setResizeCharacterPositions] =
    useState(CHARACTER_POSITIONS)
  const [resizeEndPositions, setResizeEndPositions] =
    useState<Record<string, Vector2[]>>(CHARACTER_END)
  const [resizeF, setResizeF] = useState(() => () => {})

  if (typeof window !== 'undefined') {
    // const startZoneElem = document.getElementById(props.startZoneE)
    useEffect(() => {
      setResizeF(() => {
        const startZone = document
          .getElementById(props.startZoneE)
          ?.getBoundingClientRect()

        const endZone = document
          .getElementById('bluezone')
          ?.getBoundingClientRect()

        const draggableZone = props.draggableZone[0]

        // RESIZE FOR START POSITIONS
        if (startZone === undefined || draggableZone === undefined) return
        const updatedStartPositions = CHARACTER_POSITIONS.map(e => {
          return {
            x:
              (((e.x / 100) * startZone.width) / draggableZone.width) * 100 +
              ((startZone.left - draggableZone.left) / draggableZone.width) *
                100,
            y:
              (((e.y / 100) * startZone.height) / draggableZone.height) * 100 +
              ((startZone.top - draggableZone.top) / draggableZone.height) * 100
          }
        })
        // console.log('UPDATED', updatedStartPositions)

        setResizeCharacterPositions(updatedStartPositions)

        // RESIZE FOR END POSITIONS
        if (endZone === undefined) return
        var updatedEndPositions: Record<string, Vector2[]> = {}
        // BASICALLY DEEPCOPY OF CHARACTER_END
        Object.keys(CHARACTER_END).forEach(
          k =>
            (updatedEndPositions[k] = [
              ...CHARACTER_END[k].map(e => {
                return {
                  x:
                    (((e.x / 100) * endZone.width) / draggableZone.width) *
                      100 +
                    ((endZone.left - draggableZone.left) /
                      draggableZone.width) *
                      100,
                  y:
                    (((e.y / 100) * endZone.height) / draggableZone.height) *
                      100 +
                    ((endZone.top - draggableZone.top) / draggableZone.height) *
                      100
                }
              })
            ])
        )

        setResizeEndPositions(updatedEndPositions)
      })
      //   updatedEndPositions.map(e=>{
      //    return {
      //      x:
      //        (((e.x / 100) * endZone.width) / draggableZone.width) * 100 +
      //        ((endZone.left - draggableZone.left) / draggableZone.width) * 100,
      //      y:
      //        (((e.y / 100) * endZone.height) / draggableZone.height) * 100 +
      //        ((endZone.top - draggableZone.top) / draggableZone.height) * 100
      //    }}
      //  })
      window.addEventListener('resize', resizeF)

      return () => {
        window.removeEventListener('resize', resizeF)
      }
    }, [props.draggableZone[0]])
  }

  const generateSetElements = (
    charSet: FoodGroupCharacterImageDynamic[],
    positions: State_<Vector2>[],
    viewable: boolean
  ) =>
    charSet.map((character, index) => {
      // if((props.draggableZone[0]) && (props.draggableZone[0].width <= 425)){
      //   let positions = randomiseZoneWheelPositions()
      //   positions = calculateDraggableZoneTotalPosition(props.draggableZone[0], props.draggableZoneWheel[0], positions)
      //   props.currentCharSet[index].start_pos = positions[index]
      // }
      const endDragF = updatedFunction(() =>
        props.endDragFunc(index, character.type)
      )

      return (
        <Draggable
          key={index}
          index={index}
          startPosition={resizeCharacterPositions[character.start_index]}
          endPosition={resizeEndPositions[character.type][character.end_index]}
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
      {generateSetElements(
        props.currentCharSet,
        props.draggablePositions_1,
        !props.switchSetFlag
      )}
      {generateSetElements(
        props.nextCharSet,
        props.draggablePositions_2,
        props.switchSetFlag
      )}
    </div>
  )
}

export {
  generateCharacterSet,
  CharacterSpawner,
  randomiseZoneWheelPositions,
  calculateDraggableZoneTotalPosition
}
