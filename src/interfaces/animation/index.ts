import { ReactNode } from 'react'

export interface TimelineInterface {
  timeline: AnimatedElementInterface[]
}

export interface AnimatedElementInterface {}

export interface TimelineDataInterface {
  timeScale?: number
  delay?: number
  labels?: LabelInterface[]
}

export interface AnimatedComponentInterface {
  readonly label?: string
  readonly duration: number
  readonly default?: DefaultInterface
  // readonly animations?: AnimationsInterface
}

interface DefaultInterface {
  visibility?: boolean
  position?: THREE.Vector3
  rotation?: THREE.Euler
}

interface VisibilityInterface {
  duration?: number
  label?: string
}

/* interface KeyframesInterface {
  [key: string]:
    | string
    | {
        [key: string]: string | number
      }
} */

type TKeyframes = Record<string, string | Record<string, string>>

interface LabelInterface {
  name: string
  position: number | string
}
