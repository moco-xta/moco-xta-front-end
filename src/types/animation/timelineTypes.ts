import { TAnimationsData } from './dataTypes'

export type TTimelineData = {
  timeScale?: number
  delay?: number
  labels?: TLabel[]
}

type TLabel = {
  name: string
  position: number | string
}

// SHOW/HIDE

export type TShowHideAnimation<T> = {
  timeline: GSAPTimeline
  ref: T
  duration: number
  label: string
}

// ANIMATE

export type TAnimate<T> = {
  timeline: GSAPTimeline
  ref: T
  index?: number
  animations: TAnimationsData<T>
  duration: number
  label: string
}
