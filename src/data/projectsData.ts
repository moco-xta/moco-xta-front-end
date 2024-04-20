import {
  LogoAngular,
  LogoDjango,
  LogoIonic,
  LogoNextjs,
  LogoReact,
  LogoReactThreeDrei,
  LogoSpring,
} from '@/components/r3f/models/logos'
import LogoABWerkt from '@/components/r3f/models/logos/LogoABWerkt'
import LogoLento from '@/components/r3f/models/logos/LogoLento'
import LogoMoco from '@/components/r3f/models/logos/LogoMoco'
import { ProjectDataInterface } from '@/interfaces/dataInterfaces'

import { FaReact } from 'react-icons/fa'
import { FaAngular } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'

export const projectsData: ProjectDataInterface[] = [
  {
    key: 'moco_xta',
    name: 'Moco.xta',
    url: 'https://moco-xta.com',
    descriptionsKey: {
      lastProject: 'LAST_PROJECTS.CARDS.DESCRIPTIONS.MOCO_XTA',
      project: 'PROJECTS.CARDS.DESCRIPTIONS.MOCO_XTA',
    },
    dates: {
      to: '2024-04-21',
      from: '2023-11-01',
    },
    logos: {
      main: {
        component: LogoMoco,
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        scale: 1.111,
      },
      tools: [
        {
          component: LogoReactThreeDrei,
          position: {
            x: 1.5,
            y: 0.9,
            z: 0.17,
          },
          scale: 0.1,
        },
        {
          component: LogoNextjs,
          position: {
            x: 1.5,
            y: 0.5,
            z: 0.17,
          },
          scale: 0.1,
        },
        {
          component: LogoSpring,
          position: {
            x: 1.5,
            y: 0.1,
            z: 0.17,
          },
          scale: 0.15,
        },
      ],
    },
  },
  {
    key: 'ab_werkt',
    name: 'AB Werkt',
    url: 'https://www.ab-werkt.eu/home',
    descriptionsKey: {
      lastProject: 'LAST_PROJECTS.CARDS.DESCRIPTIONS.ABWERKT',
      project: 'PROJECTS.CARDS.DESCRIPTIONS.ABWERKT',
    },
    dates: {
      to: '2023-10-31',
      from: '2023-02-01',
    },
    logos: {
      main: {
        component: LogoABWerkt,
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        scale: 1.111,
      },
      tools: [
        {
          component: LogoReact,
          position: {
            x: 1.4,
            y: 0.85,
            z: 0.17,
          },
          scale: 0.15,
        },
        {
          component: LogoAngular,
          position: {
            x: 1.4,
            y: 0.5,
            z: 0.17,
          },
          scale: 0.15,
        },
        {
          component: LogoIonic,
          position: {
            x: 1.4,
            y: 0.1,
            z: 0.15,
          },
          scale: 0.15,
        },
        {
          component: LogoDjango,
          position: {
            x: 1.4,
            y: -0.25,
            z: 0.15,
          },
          scale: 0.1,
        },
      ],
    },
  },
  {
    key: 'lento_eu',
    name: 'Lento.eu',
    url: 'https://lento.eu/en',
    descriptionsKey: {
      lastProject: 'LAST_PROJECTS.CARDS.DESCRIPTIONS.LENTO_EU',
      project: 'PROJECTS.CARDS.DESCRIPTIONS.LENTO_EU',
    },
    dates: {
      to: '2023-01-31',
      from: '2021-09-01',
    },
    logos: {
      main: {
        component: LogoLento,
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        scale: 1.111,
      },
      tools: [
        {
          component: LogoReact,
          position: {
            x: 1.4,
            y: 0.85,
            z: 0.17,
          },
          scale: 0.15,
        },
        {
          component: LogoDjango,
          position: {
            x: 1.4,
            y: 0.5,
            z: 0.17,
          },
          scale: 0.15,
        },
      ],
    },
  },

  /* {
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
  }, */
]
