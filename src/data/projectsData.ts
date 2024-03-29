import { ProjectDataInterface } from '@/interfaces/projectsDataInterface'

import { FaReact } from 'react-icons/fa'
import { FaAngular } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'

export const projectsData: ProjectDataInterface[] = [
  {
    key: 'moco_xta',
    name: 'Moco.xta',
    url: 'https://lento.eu/en',
    descriptionsKey: {
      lastProject: 'PROJECTS.CARDS.DESCRIPTIONS.LENTO',
      project: 'CARDS.DESCRIPTIONS.LENTO',
    },
    picture: {
      deskstop: '/img/jpg/projects/1200x756/lento_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/lento_home_screenshot.jpg',
    },
    dates: {
      to: '2024-03-15',
      from: '2024-01-01',
    },
    roles: ['Real-time 3D', 'Full Stack'],
    tools: [FaReact, SiDjango],
  },
  {
    key: 'abwerkt',
    name: 'AB Werkt',
    url: 'https://www.ab-werkt.eu/home',
    descriptionsKey: {
      lastProject: 'PROJECTS.CARDS.DESCRIPTIONS.ABWERKT',
      project: 'CARDS.DESCRIPTIONS.ABWERKT',
    },
    picture: {
      deskstop: '/img/jpg/projects/1200x756/abwerkt_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/abwerkt_home_screenshot.jpg',
    },
    dates: {
      to: '2023-11-31',
      from: '2023-03-01',
    },
    roles: ['Front End'],
    tools: [FaReact, FaAngular, SiDjango],
  },
  {
    key: 'lento',
    name: 'Lento.eu',
    url: 'https://lento.eu/en',
    descriptionsKey: {
      lastProject: 'PROJECTS.CARDS.DESCRIPTIONS.ABWERKT',
      project: 'CARDS.DESCRIPTIONS.ABWERKT',
    },
    picture: {
      deskstop: '/img/jpg/projects/1200x756/lento_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/lento_home_screenshot.jpg',
    },
    dates: {
      to: '2023-02-28',
      from: '2019-04-17',
    },
    roles: ['Front End'],
    tools: [FaReact, SiDjango],
  },
  {
    key: 'abwerkt',
    name: 'AB Werkt',
    url: 'https://www.ab-werkt.eu/home',
    descriptionsKey: {
      lastProject: 'PROJECTS.CARDS.DESCRIPTIONS.ABWERKT',
      project: 'CARDS.DESCRIPTIONS.ABWERKT',
    },
    picture: {
      deskstop: '/img/jpg/projects/1200x756/abwerkt_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/abwerkt_home_screenshot.jpg',
    },
    dates: {
      to: '2019-04-16',
      from: '2018-03-01',
    },
    roles: ['Front End'],
    tools: [FaReact, FaAngular, SiDjango],
  },
]
