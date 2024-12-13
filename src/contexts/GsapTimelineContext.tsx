import { createContext, ReactNode, useRef } from 'react'
import { gsap } from 'gsap'

interface GSAPTimelineContextInterface {
  timeline: GSAPTimeline
}

export const GSAPTimelineContext = createContext<GSAPTimelineContextInterface | undefined>(
  undefined,
)

interface GSAPTimelineProviderInterface {
  delay: number
  speed: number
  children: ReactNode
}

export const GSAPTimelineProvider = ({ delay, speed, children }: GSAPTimelineProviderInterface) => {
  const timeline = useRef<GSAPTimeline>(
    gsap.timeline({
      delay: delay / speed,
    }),
  )

  return (
    <GSAPTimelineContext.Provider value={{ timeline: timeline.current }}>
      {children}
    </GSAPTimelineContext.Provider>
  )
}
