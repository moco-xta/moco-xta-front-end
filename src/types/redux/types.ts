import { TCoordinatesData } from '../data/components/three/types'

// AppState

export type TAppState = {
  menuIsOpen: boolean
  localeSwitcherIsOpen: boolean
}

// PlayerState

export type TPlayerPageStateSlice = {
  showInstructions: boolean
  pointerLockControlsSelector: string
  dopTargetPosition: TCoordinatesData
  debug: boolean
}

// Rubik's cube

export type TRubiksCubeStateSlice = {
  isActive: boolean
}
