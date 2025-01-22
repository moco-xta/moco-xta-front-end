import { createContext, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import type { TGSAPTimelineContext, TGSAPTimelineProvider } from '@/types/contexts/types'

export const GSAPTimelineContext = createContext<TGSAPTimelineContext>(null!)

export const GSAPTimelineProvider = ({
  // delay = 0,
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

  function playTimeline() {
    timeline.current.play()
  }
  function pauseTimeline() {
    if (!timeline.current.paused()) timeline.current.pause()
  }

  useEffect(() => {
    // timeline.current.delay(delay) // TODO: Delay for timeline is not working
    labels?.forEach((label) => {
      timeline.current.addLabel(label.name, label.position)
    })
  }, [labels, timeline])

  return (
    <GSAPTimelineContext.Provider
      value={{
        timeline: timeline.current,
        playTimeline: playTimeline,
        pauseTimeline: pauseTimeline,
      }}
    >
      {children}
    </GSAPTimelineContext.Provider>
  )
}
