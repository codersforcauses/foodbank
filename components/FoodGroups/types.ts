import { Vector2 } from './vector'

type StateDispatch<T> = React.Dispatch<React.SetStateAction<T>>
type State_<T> = [T, StateDispatch<T>]
type State<T> = { styles: T; setStyles: StateDispatch<T> }
type WidthState = { id: string; initialWidth: number }

interface FoodGroupResizeArguments {
  setRadius: StateDispatch<number>
  setCenter: StateDispatch<Vector2>
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
  FoodGroupImage,
  FoodGroupProps,
  FoodGroupResizeArguments,
  FoodGroupStates,
  State,
  State_,
  StateDispatch,
  WidthState
}
