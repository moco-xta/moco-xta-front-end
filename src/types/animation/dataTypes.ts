// COMPONENT

import { TAnimations } from './timelineTypes'

export type TAnimatedComponentData<T> = {
  label?: string
  duration: number
  defaultValues?: Partial<T>
  animations: TAnimations<T>
}

// GROUP

/* export type TAnimatedGroupData = {
  label?: string
  duration: number
  defaultValues?: TDefaultValues
  // animations: TAnimationsData
} */

// MESH

/* type TAnimatedMeshData = {
  label?: string
  duration: number
  defaultValues?: TMeshDefaultValues
  // animations: TAnimationsData
} */

// DEFAULT VALUES

export type TDefaultValues = {
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
}

/* export type TMeshDefaultValues = TDefaultValues & {
  material?: TMaterial
} */

/* type TMaterial = {
  opacity?: number
} */

// ANIMATIONS

/* export type TAnimatedProperties = 'position' | 'rotation' | 'scale' | 'material' */

/* type TAnimationsData =
  | Partial<Record<TAnimatedProperties, TKeyframesData>>
  | {
      stagger?: number
    } */

// KEYFRAMES

/* type TKeyframesData = {
  keyframes: Record<string, string | Record<string, string | number>>
} */
