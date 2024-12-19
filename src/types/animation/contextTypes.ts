export type TGSAPTimelineContext = {
  timeline: GSAPTimeline
}

export type TGSAPTimelineProvider = {
  delay?: number
  timeScale?: number
  labels?: TLabel[]
  children: JSX.Element
}

type TLabel = {
  name: string
  position: number | string
}
