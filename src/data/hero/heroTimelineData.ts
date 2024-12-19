import type { TTimelineData } from '@/types/animation/timelineTypes'

export const heroTimelineData: TTimelineData = {
  // timeScale: 1.25,
  timeScale: 0.5,
  delay: 1,
  labels: [
    {
      name: 'greeting',
      position: 0,
    },
    {
      name: 'portrait',
      position: 4,
    },
    {
      name: 'also_know_as',
      position: 8,
    },
    {
      name: 'developer',
      position: 10,
    },
  ],
}
