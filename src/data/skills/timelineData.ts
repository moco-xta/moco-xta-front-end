import type { TTimelineData } from '@/types/data/animations/types'

export const timelineDefaultValues: TTimelineData = {
  timeScale: 1,
  delay: 2,
  labels: [
    {
      name: 'load',
      position: 0,
    },
    {
      name: 'mix',
      position: 4,
    },
    {
      name: 'play',
      position: 20,
    },
    {
      name: 'quit',
      position: 30,
    },
  ],
}
