import { TCoordinatesData } from '../data/three/types'

// APP STATE

export type TAppState = {
  menuIsOpen: boolean
  localeSwitcher: {
    isOpen: boolean
    contentPosition: {
      width: number | null
      top: number | null
      left: number | null
    }
  }
}

// PLAYER STATE

export type TPlayerPageStateSlice = {
  showInstructions: boolean
  pointerLockControlsSelector: string
  dopTargetPosition: TCoordinatesData
  debug: boolean
}

// RUBIKS CUBE

export type TRubiksCubeStateSlice = {
  // status: TRubiksCubeStatus
  rubiksCubeIsLocked: boolean
  rubiksCubeIsMixed: boolean
  rubiksCubeIsRotating: boolean
}

export type TRubiksCubeStatus = 'off' | 'mixing' | 'playing'
