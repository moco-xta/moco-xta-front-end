import type { TCoordinatesData } from "../components/three/types"

// PLAYER STATE

export type TPlayerPageStateSlice = {
  showInstructions: boolean
  pointerLockControlsSelector: string
  dopTargetPosition: TCoordinatesData
  debug: boolean
}