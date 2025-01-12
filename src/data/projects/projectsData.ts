import moment from 'moment'

import { ProjectDataInterface } from '@/interfaces/dataInterfaces'

export const projectsData: ProjectDataInterface[] = [
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
    tools: [
      '/img/png/projects/home_pages/logo_blender.png',
      '/img/png/projects/home_pages/logo_react_three_drei.png',
      '/img/png/projects/home_pages/logo_nextjs.png',
      '/img/png/projects/home_pages/logo_spring.png',
      '/img/png/projects/home_pages/logo_postgresql.png',
      '/img/png/projects/home_pages/logo_docker.png',
      '/img/png/projects/home_pages/logo_hostinger.png',
    ],
    backgroundColor: {
      page: '#fc799d',
      card: '#5b9ff6',
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
    tools: [
      '/img/png/projects/home_pages/logo_react-three-drei.png',
      '/img/png/projects/home_pages/logo_nextjs.png',
      '/img/png/projects/home_pages/logo_spring.png',
      '/img/png/projects/home_pages/logo_postgresql.png',
    ],
    backgroundColor: {
      page: '#aec700',
      card: '#076865',
    },
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
    tools: [
      '/img/png/projects/home_pages/logo_react-three-drei.png',
      '/img/png/projects/home_pages/logo_nextjs.png',
      '/img/png/projects/home_pages/logo_spring.png',
    ],
    backgroundColor: {
      page: '#5397d4',
      card: '#ecbaa2',
    },
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
    tools: [
      '/img/png/projects/home_pages/logo_react-three-drei.png',
      '/img/png/projects/home_pages/logo_nextjs.png',
      '/img/png/projects/home_pages/logo_spring.png',
    ],
    backgroundColor: {
      page: '#ffffff',
      card: '#000000',
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
    tools: [
      '/img/png/projects/home_pages/logo_react-three-drei.png',
      '/img/png/projects/home_pages/logo_nextjs.png',
      '/img/png/projects/home_pages/logo_spring.png',
    ],
    backgroundColor: {
      page: '#000000',
      card: '#f32730',
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
    tools: [
      '/img/png/projects/home_pages/logo_spring.png',
      '/img/png/projects/home_pages/logo_postgresql.png',
    ],
    backgroundColor: {
      page: '#ffffff',
      card: '#7450eb',
    },
  },
]
