import { projectsDataInterface } from '@/interfaces/data/projectsDataInterface'

import { FaReact } from 'react-icons/fa'
import { FaAngular } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'

export const projectsData: projectsDataInterface[] = [
  {
    key: 'abwerkt',
    name: 'AB Werkt',
    url: 'https://www.ab-werkt.eu/home',
    descriptionKey: 'ABWERK_DESCRIPTION',
    picture: {
      deskstop: '/img/jpg/projects/1200x756/abwerkt_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/abwerkt_home_screenshot.jpg',
    },
    dates: {
      from: '2023-03-01',
      to: '2023-10-31',
    },
    tools: [FaReact, FaAngular, SiDjango],
  },
  {
    key: 'lento',
    name: 'Lento',
    url: 'https://lento.eu/en',
    descriptionKey: 'LENTO_DESCRIPTION',
    picture: {
      deskstop: '/img/jpg/projects/1200x756/lento_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/lento_home_screenshot.jpg',
    },
    dates: {
      from: '2021-07-01',
      to: '2023-02-28',
    },
    tools: [FaReact, SiDjango],
  },
]
