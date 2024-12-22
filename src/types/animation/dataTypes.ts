import { TGroup, TMesh } from './three/componentsTypes'

// DEFAULT VALUES

/* export type TDefaultValues<T> = Partial<Omit<T, 'material'>> & {
  keySuffix: string
  material?: THREE.Material
} */

// ANIMATED COMPONENT

/* export type TAnimatedComponentData<T extends TGroup | TMesh> = {
  label?: string
  duration: number
  animations?: TAnimationsData<T>
} */

/* export type TAnimationsData<T> = Record<keyof T, TAnimation> */

/* type TAnimation = {
  keyframes: TKeyframesData
} */

/* export type TKeyframesData =
  | Record<string, Record<string, string | number>>
  | {
      easeEach?: string
    } */

// TIMELINE

export type TTimelineData = {
  timeScale?: number
  delay?: number
  labels?: TLabel[]
}

type TLabel = {
  name: string
  position: number | string
}

// DEFAULT VALUES

export type TDefaultValues<T extends TGroup | TMesh> = {
  keySuffix?: string
} & Omit<Partial<T>, 'material'> & {
    material?: Partial<THREE.Material>
  }

// ANIMATION

export type TAnimationsData<T extends TGroup | TMesh> = {
  label?: string
  duration: string | number
  animations: Partial<Record<keyof T, TKeyframesData>>
}

export type TKeyframesData = {
  keyframes: Record<string, string | Record<string, string | number>> & {
    easeEach?: string
  }
}

/* export type TDefaultValues = {
  keySuffix?: string
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
  material?: Partial<THREE.Material>
} */

/* export type TGetLabelSignature = {
  label: string
  index: number
  stagger: number
} */

/* export type TAnimatedElementData<T extends TGroup | TMesh> = {
  label: string
} */
