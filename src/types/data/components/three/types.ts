// LOGO

import { TLazyPad } from '@/types/components/three/types'

export type TLogoData = {
  name: string
}

// COORDINATES

export type TCoordinatesData = {
  x?: number
  y?: number
  z?: number
}

// RUBIKS CUBE

export type TLazyPadData = {
  componentName: string
  model: TLazyPad
}
