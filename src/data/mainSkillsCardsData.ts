import { IntroductionCardDataInterface } from '@/interfaces/dataInterfaces'

import LogoReactThreeDrei from '@/components/r3f/models/logos/LogoReactThreeDrei'
import LogoNextjs from '@/components/r3f/models/logos/LogoNextjs'
import LogoAngular from '@/components/r3f/models/logos/LogoAngular'

import { default as IntroductionConstants } from '@/constants/introductionConstants.json'
import { Nextjs } from '@/components/r3f/models/introduction/Nextjs'
import { Angular } from '@/components/r3f/models/introduction/Angular'
import { Spring } from '@/components/r3f/models/introduction/Spring'

export const mainSkillsCardsData: IntroductionCardDataInterface[] = [
  {
    name: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.NAME,
    logo: {
      component: Nextjs,
      scale: 2.5,
    },
    rate: {
      value: 90,
      position: {
        x: 0.8,
        y: 0,
        z: 1,
      },
    },
    category: {
      text: ['Nextjs'],
      position: [
        {
          x: -2,
          y: 0,
          z: 0,
        },
      ]
    }
  },
  {
    name: IntroductionConstants.CARDS.TOOLS.NEXT_JS.NAME,
    logo: {
      component: Angular,
      scale: 2.5,
    },
    rate: {
      value: 80,
      position: {
        x: 0.8,
        y: -0.4,
        z: 1,
      },
    },
    category: {
      text: ['Angular'],
      position: [
        {
          x: -2,
          y: 0,
          z: 0,
        },
      ]
    }
  },
  {
    name: IntroductionConstants.CARDS.TOOLS.ANGULAR.NAME,
    logo: {
      component: Spring,
      scale: 2.5,
    },
    rate: {
      value: 70,
      position: {
        x: 0.8,
        y: -0.8,
        z: 1,
      },
    },
    category: {
      text: ['Spring'],
      position: [
        {
          x: -2,
          y: 0,
          z: 0,
        },
      ]
    }
  },
]
