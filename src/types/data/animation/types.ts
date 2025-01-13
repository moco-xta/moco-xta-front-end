import type { TProperties } from './three/types'

// TIMELINE

export type TTimelineData = {
  timeScale?: number
  delay?: number
  labels?: TLabelData[]
}

// ANIMATION

export type TAnimationsData = Partial<Record<TProperties, TKeyframesData>>

export type TElementAnimationData = {
  label?: string
  duration: string | number
  animations?: TAnimationsData
}

// LABEL

export type TLabelData = {
  name: string
  position: number | string
}

// KEYFRAMES

export type TKeyframesData = {
  keyframes:
    | Record<TKeyframeKey, Record<string, string | number>>
    | {
        easeEach?: string
      }
}

type TKeyframeKey = `step_${string}` | `${string}%` | 'easeEach'
