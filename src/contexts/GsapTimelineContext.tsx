import { createContext, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import type { TGSAPTimelineContext, TGSAPTimelineProvider } from '@/types/animation/context/type'

export const GSAPTimelineContext = createContext<TGSAPTimelineContext>(null!)

export const GSAPTimelineProvider = ({
  delay = 0,
  timeScale = 1,
  labels,
  children,
}: TGSAPTimelineProvider) => {
  const timeline = useRef<GSAPTimeline>(
    gsap
      .timeline()
      /* .timeline({
        delay: delay,
      }) */
      .timeScale(timeScale),
  )

  useEffect(() => {
    // timeline.current.delay(delay) // TODO: Delay for timeline is not working
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
