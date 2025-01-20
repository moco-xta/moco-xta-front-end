import type { TTimelineData } from '@/types/data/animation/types'

import { default as timelineConstants } from '@/constants/rubiks_cube/timelineConstants.json'

export const timelineDefaultValues: TTimelineData = {
  timeScale: timelineConstants.timeScale,
  delay: timelineConstants.delay,
  labels: timelineConstants.labels,
}
