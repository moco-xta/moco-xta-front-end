import type { TLabelData } from '../data/animation/types'

// PAGE CONTEXT

export type TPageContext = {
  currentPosition: string
  handleSetCurrentPosition: (newPosition: string) => void
  isScrolling: boolean
  handleSetIsScrolling: (newState: boolean) => void
}

export type TPageProvider = {
  defaultPosition: string
  children: JSX.Element
}

// GSAP TIMELINE CONTEXT

export type TGSAPTimelineContext = {
  timeline: GSAPTimeline
  playTimeline: () => void
  pauseTimeline: () => void
}

export type TGSAPTimelineProvider = {
  delay?: number
  timeScale?: number
  labels?: TLabelData[]
  children: JSX.Element
}
