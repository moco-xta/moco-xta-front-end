import * as THREE from 'three'

import type {
  TRgbColorData,
  TCoordinatesData,
  TDimensionsData,
  TMaterialData,
} from '../../components/three/types'
import type { TKeyframesData } from '../types'

// PROPERTIES

export type TProperties =
  | 'name'
  | 'visible'
  | 'position'
  | 'rotation'
  | 'scale'
  | 'dimensions'
  | 'material'
  | 'color'

export type TPropertyTypes =
  | THREE.Vector3
  | THREE.Vector3[]
  | THREE.Euler
  | THREE.Euler[]
  | TDimensionsData
  | TMaterialData

// CONSTANTS

export type TConstants = {
  label?: string
  duration?: number
  defaultValues: TDefaultValuesConstants
  animations?: TAnimationsConstants
}

export type TDefaultValuesConstants = {
  name: string
  visible: boolean
  position?: TCoordinatesData | TCoordinatesData[]
  rotation?: TCoordinatesData | TCoordinatesData[]
  scale?: number | number[] | TCoordinatesData | TCoordinatesData[]
  dimensions?: TDimensionsData | TDimensionsData[]
  material?: TMaterialData
  color?: TRgbColorData
}

export type TAnimationsConstants = Partial<Record<TProperties, TKeyframesData>>

// DATA

export type TElementDefaultValues = {
  name: string
  visible: boolean
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
  dimensions?: TDimensionsData
  material?: TMaterialData
  color?: TRgbColorData
}
