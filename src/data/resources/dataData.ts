import type { TResourcesSectionData } from '@/types/data/components/layout/types'

export const dataData: TResourcesSectionData = {
  key: 'data',
  translationKey: 'DATA',
  paragraphs: [
    {
      key: 'redux',
      translationKey: 'REDUX',
      categories: {
        key: 'redux',
        translationKey: 'REDUX',
        youtubePlaylistLink: {
          url: 'https://www.youtube.com/watch?v=Yokjzp91A4o&list=PLbEvIQDy5AOUIabt62KvkZIsda9gIQ0wv&pp=gAQB',
        },
        documentation: [
          {
            key: 'redux',
            translationKey: 'REDUX',
            urlName: 'Redux',
            url: 'https://redux.js.org/introduction/getting-started',
            languages: ['en'],
          },
          {
            key: 'redux_toolkit',
            translationKey: 'REDUX_TOOLKIT',
            urlName: 'Redux toolkit',
            url: 'https://redux-toolkit.js.org/introduction/getting-started',
            languages: ['en'],
          },
        ],
      },
    },
  ],
}
