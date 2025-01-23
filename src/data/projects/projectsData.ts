import moment from 'moment'

import { TProjectData } from '@/types/data/components/layout/types'

// import { ProjectDataInterface } from '@/interfaces/dataInterfaces'

export const projectsData: TProjectData[] = [
  {
    key: 'moco_xta',
    name: 'Moco.xta',
    url: 'https://lento.eu/en',
    image: '/img/png/projects/home_pages/moco_xta.png',
    descriptionsKey: 'DESCRIPTIONS.LENTO',
    dates: {
      to: moment(new Date()).format('YYYY-MM-DD'),
      from: '2024-01-01',
    },
    roles: ['Real-time 3D', 'Full Stack'],
    logos: {
      project: { name: 'LogoMoco' },
      tools: [
        { name: 'LogoNextjs' },
        { name: 'LogoFormik' },
        { name: 'LogoNextIntl' },
        { name: 'LogoGsap' },
        { name: 'LogoSpring' },
        { name: 'LogoPostgresql' },
        { name: 'LogoDocker' },
        { name: 'LogoHostinger' },
        { name: 'LogoGoogleAnalytics' },
        { name: 'LogoReactThreeDrei' },
        { name: 'LogoBlender' },
      ],
    },
  },
  {
    key: 'abwerkt',
    name: 'AB Werkt',
    url: 'https://www.ab-werkt.eu/home',
    image: '/img/png/projects/home_pages/abwerkt.png',
    descriptionsKey: 'DESCRIPTIONS.ABWERKT',
    dates: {
      to: '2023-11-31',
      from: '2023-03-01',
    },
    roles: ['Front End'],
    logos: {
      project: { name: 'LogoAbwerkt' },
      tools: [
        { name: 'LogoReact' },
        { name: 'LogoAngular' },
        { name: 'LogoRedux' },
        { name: 'LogoFormik' },
        { name: 'LogoNextIntl' },
        { name: 'LogoDjango' },
        { name: 'LogoPostgresql' },
        { name: 'LogoFigma' },
      ],
    },
    /* tools: [
      '/img/png/projects/home_pages/logo_react-three-drei.png',
      '/img/png/projects/home_pages/logo_nextjs.png',
      '/img/png/projects/home_pages/logo_spring.png',
      '/img/png/projects/home_pages/logo_postgresql.png',
    ], */
  },
  {
    key: 'lento',
    name: 'Lento.eu',
    url: 'https://lento.eu/en',
    image: '/img/png/projects/home_pages/lento.png',
    descriptionsKey: 'DESCRIPTIONS.ABWERKT',
    dates: {
      to: '2023-02-28',
      from: '2021-11-01',
    },
    roles: ['Front End'],
    logos: {
      project: { name: 'LogoLento' },
      tools: [
        { name: 'LogoReact' },
        { name: 'LogoGoogleMaps' },
        { name: 'LogoFormik' },
        { name: 'LogoMui' },
        { name: 'LogoNextIntl' },
        { name: 'LogoDjango' },
        { name: 'LogoPostgresql' },
        { name: 'LogoFigma' },
        // { name: 'LogoAuth0' },
      ],
    },
    /* tools: [
      '/img/png/projects/home_pages/logo_react-three-drei.png',
      '/img/png/projects/home_pages/logo_nextjs.png',
      '/img/png/projects/home_pages/logo_spring.png',
    ], */
  },
  {
    key: 'hundred_hands',
    name: '100 Hands',
    url: 'https://www.100hands.nl/',
    image: '/img/png/projects/home_pages/hundred_hands.png',
    descriptionsKey: 'DESCRIPTIONS.HUNDRED_HANDS',
    dates: {
      to: '2021-10-31',
      from: '2021-09-01',
    },
    roles: ['Front End'],
    logos: {
      project: { name: 'LogoLento' },
      tools: [
        { name: 'LogoReact' },
        { name: 'LogoReactThreeDrei' },
        { name: 'LogoThreejs' },
        { name: 'LogoWebgl' },
        { name: 'LogoAws' },
        // { name: 'LogoSubstance' },
      ],
    },
  },
  {
    key: 'wpme',
    name: 'WPME',
    url: 'https://wpme.group/',
    image: '/img/png/projects/home_pages/wpme.png',
    descriptionsKey: 'DESCRIPTIONS.WPME',
    dates: {
      to: '2021-08-30',
      from: '2021-05-17',
    },
    roles: ['Front End'],
    logos: {
      project: { name: 'LogoLento' },
      tools: [
        { name: 'LogoReact' },
        { name: 'LogoReactThreeDrei' },
        { name: 'LogoThreejs' },
        { name: 'LogoWebgl' },
        { name: 'LogoAws' },
        // { name: 'LogoSubstance' },
      ],
    },
  },
  {
    key: 'openclassrooms',
    name: 'Openclassrooms',
    url: 'https://openclassrooms.com/en/',
    image: '/img/png/projects/home_pages/openclassrooms.png',
    descriptionsKey: 'DESCRIPTIONS.OPENCLASSROOMS',
    dates: {
      to: '2021-05-17',
      from: '2019-09-01',
    },
    roles: ['Back End'],
    logos: {
      project: { name: 'LogoOpenclassrooms' },
      tools: [
        { name: 'LogoAngular' },
        { name: 'LogoSpring' },
        { name: 'LogoPostgresql' },
        { name: 'LogoMysql' },
        // { name: 'LogoSubstance' },
      ],
    },
  },
]
