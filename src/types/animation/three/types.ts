import type { MutableRefObject } from 'react'
import type { TKeyframesData } from '../timeline/types'

// #################################
// ##  PROPERTIES  #################
// #################################

export type TPropertiesTypes =
  | 'name'
  | 'visible'
  | 'position'
  | 'rotation'
  | 'scale'
  | 'dimensions'
  | 'material'
  | 'color'

// #################################
// ##  CONSTANTS  ##################
// #################################

export type TConstants = {
  label?: string
  duration?: number
  defaultValues: TDefaultValuesConstants
  animations?: TAnimationsConstants
}

// DEFAULT VALUES [CONSTANTS]

export type TDefaultValuesConstants = {
  name: string
  visible: boolean
  position?: TCoordinatesData
  rotation?: TCoordinatesData
  scale?: number | number[] | TCoordinatesData
  dimensions?: TDimensions
  material?: TMaterial
  color?: TColor
}

// ANIMATIONS [CONSTANTS]

export type TAnimationsConstants = Partial<Record<TPropertiesTypes, TKeyframesData>>

// #################################
// ##  DATA  #######################
// #################################

// DEFAULT VALUES [DATA]

export type TDefaultValuesData = {
  name: string
  visible: boolean
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
  dimensions?: TDimensions
  material?: TMaterial
  color?: TColor
}

export type TPropertyValuesDataTypes =
  | THREE.Vector3
  | THREE.Vector3[]
  | THREE.Euler
  | THREE.Euler[]
  | TDimensions
  | TMaterial

// ELEMENT [DATA]

export type TElementData = {
  label?: string
  duration: string | number
  animations?: TAnimationsData
}

// ANIMATIONS [DATA]

export type TAnimationsData = Partial<Record<TPropertiesTypes, TKeyframesData>>

// ###############################
// ##  TEXT  #####################
// ###############################

export type TText3DData = {
  geometry: TTextGeometry
  material: TMaterial
}

export type TWord3DData = TTextGeometry & {
  name: string
  position?: THREE.Vector3
  splittedWord: string[]
  lengthRef?: MutableRefObject<number[]>
  children: JSX.Element
}

export type TLetter3DData = TTextGeometry & {
  name: string
  lengthRef?: MutableRefObject<number[]>
  letter: string
  index?: number
  children: JSX.Element
}

export type TLabel = {
  name: string
  position: number | string
}

export type TCoordinatesData = TCoordinates | TCoordinates[]

export type TCoordinates = {
  x?: number
  y?: number
  z?: number
}

export type TCoordinatesRange = {
  min: number
  max: number
  decimal?: number
}

export type TDimensions = {
  width?: number
  height?: number
  depth?: number
}

type TTextGeometry = {
  font: string
  size?: number
  depth?: number
  center?: boolean
  spaceWidth?: number
}

export type TMaterial = {
  color?: string | THREE.Color
  roughness?: number
  transparent?: boolean
  opacity?: number
  emissive?: string | THREE.Color
  emissive_intensity?: number
  wireframe?: boolean
  side?: THREE.Side
  needsUpdate?: boolean
}

export type TColor = {
  r: number
  g: number
  b: number
}

export type TUniforms = Record<string, TUniform>

type TUniform = {
  type: string
  value: number | THREE.Texture | THREE.Vector2 | THREE.Vector3
}
