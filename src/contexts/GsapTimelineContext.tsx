import { createContext, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// import type { TGSAPTimelineContext, TGSAPTimelineProvider } from '@/types/animation/types'
import { type TGSAPTimelineContext, type TGSAPTimelineProvider } from '@/types/animation/types'

export const GSAPTimelineContext = createContext<TGSAPTimelineContext>(null!)

export const GSAPTimelineProvider = ({
  delay,
  timeScale = 1,
  labels,
  children,
}: TGSAPTimelineProvider) => {
  const timeline = useRef<GSAPTimeline>(
    gsap
      .timeline({
        delay: delay,
      })
      .timeScale(timeScale),
  )

  useEffect(() => {
    labels?.forEach((label) => {
      timeline.current.addLabel(label.name, label.position)
    })
  }, [labels, timeline])

  return (
    <GSAPTimelineContext.Provider value={{ timeline: timeline.current }}>
      {children}
    </GSAPTimelineContext.Provider>
  )
}
