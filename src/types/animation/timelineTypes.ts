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
  animations: TAnimations<T>
  duration: number
  label: string
}

export type TAnimations<T> = Partial<Record<keyof T, TAnimation>>

type TAnimation = {
  keyframes: TKeyframes
}

export type TKeyframes =
  | Record<string, Record<string, string | number>>
  | {
      easeEach?: string
    }
