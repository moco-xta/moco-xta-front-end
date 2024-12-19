export type TShowHideAnimation<T> = {
  timeline: GSAPTimeline
  ref: T
  duration: number
  label: string
}

export type TAnimate<T> = {
  timeline: GSAPTimeline
  ref: T
}

export type TKeyframes =
  | Record<string, Record<string, string | number>>
  | {
      easeEach?: string
    }
