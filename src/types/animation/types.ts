// CONTEXT

import { GroupProps } from '@react-three/fiber'

// ANIMATIONS

/* export type TAnimations<T extends THREE.Group | THREE.Mesh> = {
  timeline: GSAPTimeline
  ref: T
  index?: number
} */

export type TAnimations = {
  timeline: GSAPTimeline
  ref: THREE.Group | THREE.Mesh
  index?: number
}

// COMPONENTS DATA

/* export type TDefaultValues<T> = Partial<Omit<T, 'material'>> & {
  material?: MaterialProps
} */

export type TDefaultValues<T> = T

// ANIMATIONS DATA

export type TAnimationsData<T> =
  | Partial<Record<keyof T, TKeyframesAnimation>>
  | {
      label?: string
      stagger?: number
    }

// KEYFRAME

export type TKeyframesAnimation = {
  // keyframes?: gsap.TweenVars
  keyframes?: TKeyframes
  duration?: number
}

type TKeyframes =
  | Record<string, Record<string, string | number>>
  | {
      easeEach?: string
    }
