import { TCoordinatesData } from '../data/three/types'

// APP STATE

export type TAppState = {
  menuIsOpen: boolean
  localeSwitcherIsOpen: boolean
}

// PLAYER STATE

export type TPlayerPageStateSlice = {
  showInstructions: boolean
  pointerLockControlsSelector: string
  dopTargetPosition: TCoordinatesData
  debug: boolean
}
