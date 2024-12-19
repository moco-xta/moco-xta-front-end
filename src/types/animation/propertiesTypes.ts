import { TKeyframes } from './timelineTypes'

export type TProperties = {
  position?: THREE.Vector3 | TKeyframes
  rotation?: THREE.Euler | TKeyframes
  scale?: THREE.Vector3 | TKeyframes
}

export type TMeshProperties = TProperties & {
  material?: TMaterialProperties
}

export type TMaterialProperties = {
  opacity?: number
}
