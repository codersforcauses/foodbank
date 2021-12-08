import React from 'react'

type StateDispatch<T> = React.Dispatch<React.SetStateAction<T>>
type State<T> = { styles: T; setStyles: StateDispatch<T> }
type WidthState = { id: string; initialWidth: number }

interface FoodGroupResizeArguments {
  previousWidth: WidthState[]
  coordinates: number[][]
  previousFlexHeight: number
  setPreviousWidth: StateDispatch<WidthState[]>
  setCoordinates: StateDispatch<number[][]>
  setFlexHeight: StateDispatch<number>
}

interface FoodGroupStates {
  [index: string]: State<string[]>
}

interface FoodGroupImage {
  div_id: string
  img_styles: string
  img_src: string
  img_id: string
  map_name: string
}

interface FoodGroupProps {
  open: boolean
  onClose: () => void
}

export type {
  FoodGroupResizeArguments,
  FoodGroupImage,
  FoodGroupProps,
  FoodGroupStates,
  StateDispatch,
  WidthState
}
