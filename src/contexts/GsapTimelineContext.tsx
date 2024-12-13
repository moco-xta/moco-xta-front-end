import { createContext, ReactNode, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface GSAPTimelineContextInterface {
  timeline: GSAPTimeline
}

export const GSAPTimelineContext = createContext<GSAPTimelineContextInterface | undefined>(
  undefined,
)

interface LabelInterface {
  NAME: string
  POSITION: string | number
}

interface GSAPTimelineProviderInterface {
  delay: number
  timeScale: number
  labels: LabelInterface[]
  children: ReactNode
}

export const GSAPTimelineProvider = ({
  delay,
  timeScale,
  labels,
  children,
}: GSAPTimelineProviderInterface) => {
  const timeline = useRef<GSAPTimeline>(
    gsap
      .timeline({
        delay: delay,
      })
      .timeScale(timeScale),
  )

  useEffect(() => {
    labels.forEach((label) => {
      timeline.current.addLabel(label.NAME, label.POSITION)
    })
  }, [timeline])

  return (
    <GSAPTimelineContext.Provider value={{ timeline: timeline.current }}>
      {children}
    </GSAPTimelineContext.Provider>
  )
}
