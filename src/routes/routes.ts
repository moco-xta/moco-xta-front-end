import { RoutesInterface } from '@/interfaces/routes/routesInterface'

export const Routes: RoutesInterface[] = [
  {
    key: 'HOME',
    path: '/',
    display_in_nav_bar: false
  },
  {
    key: 'ABOUT',
    path: '/about',
    display_in_nav_bar: true,
    width: {
      en: '76px',
      es: '98px',
      fr: '74px',
    },
  },
  {
    key: 'ADD_REVIEW',
    path: '/add_review',
    display_in_nav_bar: false
  },
  {
    key: 'BLOG',
    path: '/blog',
    display_in_nav_bar: true,
    width: {
      en: '70px',
      es: '70px',
      fr: '70px',
    },
  },
  {
    key: 'CONTACT',
    path: '/contact',
    display_in_nav_bar: true,
    width: {
      en: '86px',
      es: '76px',
      fr: '64px',
    },
  },
  {
    key: 'PHOTOGRAPHY',
    path: '/photography',
    display_in_nav_bar: true,
    width: {
      en: '136px',
      es: '114px',
      fr: '136px',
    },
  },
  {
    key: 'PROJECTS',
    path: '/projects',
    display_in_nav_bar: true,
    width: {
      en: '86px',
      es: '86px',
      fr: '56px',
    },
  },
  {
    key: 'SKILLS',
    path: '/skills',
    display_in_nav_bar: true,
    width: {
      en: '80px',
      es: '124px',
      fr: '142px',
    },
  },
]
