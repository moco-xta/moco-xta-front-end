import { RoutesInterface } from '@/interfaces/routes/routesInterface'

export const Routes: RoutesInterface[] = [
  {
    key: 'HOME',
    path: '/',
  },
  {
    index: 4,
    key: 'ABOUT',
    path: '/about',
    width: {
      en: '76px',
      es: '98px',
      fr: '74px',
    },
  },
  {
    key: 'ADD_REVIEW',
    path: '/add_review',
  },
  {
    index: 3,
    key: 'BLOG',
    path: '/blog',
    width: {
      en: '70px',
      es: '70px',
      fr: '70px',
    },
  },
  {
    index: 5,
    key: 'CONTACT',
    path: '/contact',
    width: {
      en: '86px',
      es: '76px',
      fr: '64px',
    },
  },
  {
    index: 2,
    key: 'PHOTOGRAPHY',
    path: '/photography',
    width: {
      en: '136px',
      es: '114px',
      fr: '136px',
    },
  },
  {
    index: 1,
    key: 'PROJECTS',
    path: '/projects',
    width: {
      en: '86px',
      es: '86px',
      fr: '56px',
    },
  },
  {
    key: 'REVIEWS',
    path: '/reviews',
  },
  {
    index: 0,
    key: 'SKILLS',
    path: '/skills',
    width: {
      en: '80px',
      es: '124px',
      fr: '142px',
    },
  },
]
