import type { TTimelineData } from '@/types/data/animation/types'

import { default as timelineConstants } from '@/constants/contact/timelineConstants.json'

export const timelineDefaultValues: TTimelineData = {
  timeScale: timelineConstants.timeScale,
  // timeScale: 0.25,
  delay: timelineConstants.delay,
  labels: timelineConstants.labels,
}
