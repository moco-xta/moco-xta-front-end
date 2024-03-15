import { ProjectDataInterface } from '@/interfaces/data/projectsDataInterface'

import { FaReact } from 'react-icons/fa'
import { FaAngular } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'

export const projectsData: ProjectDataInterface[] = [
  {
    key: 'moco_xta',
    name: 'Moco.xta',
    url: 'https://lento.eu/en',
    descriptionKey: 'PROJECTS.CARDS.DESCRIPTIONS.LENTO',
    picture: {
      deskstop: '/img/jpg/projects/1200x756/lento_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/lento_home_screenshot.jpg',
    },
    dates: {
      to: '2024-03-15',
      from: '2024-01-01',
    },
    role: 'Full Stack',
    tools: [FaReact, SiDjango],
  },
  {
    key: 'abwerkt',
    name: 'AB Werkt',
    url: 'https://www.ab-werkt.eu/home',
    descriptionKey: 'PROJECTS.CARDS.DESCRIPTIONS.ABWERKT',
    picture: {
      deskstop: '/img/jpg/projects/1200x756/abwerkt_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/abwerkt_home_screenshot.jpg',
    },
    dates: {
      to: '2023-11-31',
      from: '2023-03-01',
    },
    role: 'Front End',
    tools: [FaReact, FaAngular, SiDjango],
  },
  {
    key: 'lento',
    name: 'Lento.eu',
    url: 'https://lento.eu/en',
    descriptionKey: 'PROJECTS.CARDS.DESCRIPTIONS.LENTO',
    picture: {
      deskstop: '/img/jpg/projects/1200x756/lento_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/lento_home_screenshot.jpg',
    },
    dates: {
      to: '2023-02-28',
      from: '2021-07-01',
    },
    role: 'Front End',
    tools: [FaReact, SiDjango],
  },
  /* {
    key: 'lento',
    name: 'Lento',
    url: 'https://lento.eu/en',
    descriptionKey: 'PROJECTS.CARDS.DESCRIPTIONS.LENTO',
    picture: {
      deskstop: '/img/jpg/projects/1200x756/lento_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/lento_home_screenshot.jpg',
    },
    dates: {
      to: '2021-06-30',
      from: '2020-07-01',
    },
    role: 'Front End',
    tools: [FaReact, SiDjango],
  }, */
]
