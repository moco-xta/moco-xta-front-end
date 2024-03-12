import { LastProjectsDataInterface } from '@/interfaces/data/lastProjectsDataInterface'

import { FaReact } from 'react-icons/fa'
import { FaAngular } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'

export const lastProjectsData: LastProjectsDataInterface[] = [
  {
    key: 'lento',
    name: 'Lento',
    descriptionKey: 'LENTO_DESCRIPTION',
    picture: {
      deskstop: '/img/jpg/projects/1200x756/lento_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/lento_home_screenshot.jpg',
    },
    dates: {
      from: '01/07/2021',
      to: '28/02/2023',
    },
    tools: [FaReact, SiDjango],
  },
  {
    key: 'abwerkt',
    name: 'AB Werkt',
    descriptionKey: 'ABWERK_DESCRIPTION',
    picture: {
      deskstop: '/img/jpg/projects/1200x756/abwerkt_home_screenshot.jpg',
      mobile: '/img/jpg/projects/360x227/abwerkt_home_screenshot.jpg',
    },
    dates: {
      from: '01/03/2023',
      to: '31/10/2023',
    },
    tools: [FaReact, FaAngular, SiDjango],
  },
]
