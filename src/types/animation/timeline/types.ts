import type { TCoordinatesRange, TLabel } from '../three/types'

export type TTimelineData = {
  timeScale?: number
  delay?: number
  labels?: TLabel[]
}

export type TKeyframes = {
  keyframes: Record<
    TKeyframeKey,
    string | Record<string, string | number | boolean | TCoordinatesRange>
  >
}

export type TKeyframesData = {
  keyframes:
    | Record<TKeyframeKey, Record<string, string | number>>
    | {
        easeEach?: string
      }
}

export type TKeyframeKey = `step_${string}` | `${string}%` | 'easeEach'
