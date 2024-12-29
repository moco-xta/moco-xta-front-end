import type { TLabel } from '../three/types'

export type TGSAPTimelineContext = {
  timeline: GSAPTimeline
}

export type TGSAPTimelineProvider = {
  delay?: number
  timeScale?: number
  labels?: TLabel[]
  children: JSX.Element
}
