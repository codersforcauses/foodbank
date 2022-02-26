import { useEffect, useState } from 'react'

import Draggable, { DRAGGING_STATE } from '@components/FoodGroups/Draggable'
import { ORIGIN_VECTOR2, Vector2 } from '@components/FoodGroups/vector'
import { FOOD_GROUPS, GROUPS } from '@components/FoodGroups/groups'

import {
  FoodGroupCharacterImage,
  FoodGroupCharacterImageDynamic
} from './types'
import { State_, StateDispatch } from '../types'
import { N_DRAGGABLE } from '@components/FoodGroups/constants'

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

export const CHARACTER_END: Record<string, Vector2[]> = {
  // TODO: Add positions for the second set of characters if a game with 10 charcters is used.
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
}

function generateCharacterSet(character_data: FoodGroupCharacterImage[]) {
  if (character_data === undefined)
    throw new Error('Undefined character_data data')

  const characterSet: FoodGroupCharacterImageDynamic[] = []

  const filterFunction = (type: string) =>
    character_data.filter(character => character.type === type)

  const characters = FOOD_GROUPS.map(group => filterFunction(group))

  let positionsTmp = Array.from(Array(N_DRAGGABLE).keys()) // [0,1,2,...,N_DRAGGABLES-1]
  let positions: number[] = []
  for (let i = positionsTmp.length - 1; i >= 0; i--) {
    const idx = Math.floor(Math.random() * i)
    positions.push(positionsTmp[idx])
    positionsTmp.splice(idx, 1)
  }

  const TYPE_COUNT: { [K in GROUPS]: number } = {
    [GROUPS.DAIRY]: 0,
    [GROUPS.FRUIT]: 0,
    [GROUPS.GRAINS]: 0,
    [GROUPS.VEGETABLES]: 0,
    [GROUPS.MEAT]: 0,
    // Others for type safety
    [GROUPS.NONE]: 0,
    [GROUPS.DEFAULT]: 0,
    [GROUPS.TUCKER]: 0
  }

  characters.forEach((characterTypeSet, i) => {
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

  return characterSet
}

interface Props {
  endDragFunc: Function
  startDragFunc: [StateDispatch<Vector2>, StateDispatch<GROUPS>]
  absPositionSetState: StateDispatch<Vector2>
  draggablePositions_1: State_<Vector2>[]
  draggablePositions_2: State_<Vector2>[]
  draggingStates: State_<DRAGGING_STATE[]>
  draggableZone: State_<DOMRect | undefined>
  currentCharSet: FoodGroupCharacterImageDynamic[]
  nextCharSet: FoodGroupCharacterImageDynamic[]
  switchSetFlag: boolean
  startZoneE: string

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

        setResizeCharacterPositions(updatedStartPositions)

        // RESIZE FOR END POSITIONS
        if (endZone === undefined) return
        var updatedEndPositions: Record<string, Vector2[]> = {}
        // BASICALLY DEEPCOPY AND SCALE OF CHARACTER_END
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
          setAbsPosition={props.absPositionSetState}
          hidden={viewable}
          draggableZone={props.draggableZone[0]}
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

export { CharacterSpawner, generateCharacterSet }
