import { RoutesInterface } from '@/interfaces/routes/routesInterface'

export const Routes: RoutesInterface[] = [
  {
    display_in_nav_bar: false,
    key: 'HOME',
    path: '/',
  },
  {
    index: 4,
    display_in_nav_bar: true,
    key: 'ABOUT',
    path: '/about',
    width: {
      en: '76px',
      es: '98px',
      fr: '74px',
    },
  },
  {
    display_in_nav_bar: false,
    key: 'ADD_REVIEW',
    path: '/add_review',
  },
  {
    index: 3,
    display_in_nav_bar: true,
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
    display_in_nav_bar: true,
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
    display_in_nav_bar: true,
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
    display_in_nav_bar: true,
    key: 'PROJECTS',
    path: '/projects',
    width: {
      en: '86px',
      es: '86px',
      fr: '56px',
    },
  },
  {
    display_in_nav_bar: false,
    key: 'REVIEWS',
    path: '/reviews',
  },
  {
    index: 0,
    display_in_nav_bar: true,
    key: 'SKILLS',
    path: '/skills',
    width: {
      en: '80px',
      es: '124px',
      fr: '142px',
    },
  },
]
