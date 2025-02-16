import type { TResourcesSectionData } from '@/types/data/components/layout/types'

export const animationData: TResourcesSectionData = {
  key: 'animation',
  translationKey: 'ANIMATION',
  paragraphs: [
    {
      key: 'gsap',
      translationKey: 'GSAP',
      categories: {
        key: 'gsap',
        translationKey: 'GSAP',
        youtubePlaylistLink: {
          url: 'https://www.youtube.com/watch?v=wlrHmiWm4vQ&list=PLbEvIQDy5AOVGBZBbDGSiMuB5IgycdgZQ&pp=gAQB',
        },
        documentation: [
          {
            key: 'gsap',
            translationKey: 'GSAP',
            urlName: 'GSAP',
            url: 'https://gsap.com/docs/v3/',
            languages: ['en'],
          },
        ],
        channels: [
          {
            key: 'gsap_learning',
            translationKey: 'GSAP_LEARNING',
            urlName: 'GSAP learning',
            url: 'https://www.youtube.com/@GreenSockLearning',
            languages: ['en'],
          },
        ],
      },
    },
  ],
}
