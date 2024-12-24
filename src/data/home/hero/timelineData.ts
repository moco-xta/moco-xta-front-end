import { TTimelineData } from '@/types/animation/dataTypes'

import { default as timelineConstants } from '@/constants/home/hero/timelineConstants.json'

export const timelineDefaultValues: TTimelineData = {
  timeScale: timelineConstants.timeScale,
  // timeScale: 0.5,
  delay: timelineConstants.delay,
  labels: timelineConstants.labels,
}
