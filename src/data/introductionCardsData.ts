import { IntroductionCardDataInterface } from '@/interfaces/dataInterfaces'

import DoughnutChartSeventyFivePercent from '@/components/r3f/models/charts/DoughnutChartSeventyFivePercent'
import RoundedDoughnutChartNinetyPercent from '@/components/r3f/models/charts/RoundedDoughnutChartNinetyPercent'

import { default as IntroductionConstants } from '@/constants/introductionConstants.json'
import { HeartThreeD } from '@/components/r3f/models/introduction/HeartThreeD'
import { ComputerFrontEnd } from '@/components/r3f/models/introduction/ComputerFrontEnd'
import { ServerBackEnd } from '@/components/r3f/models/introduction/ServerBackEnd'

export const introductionCardsData: IntroductionCardDataInterface[] = [
  {
    name: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.NAMES.THREE_D,
    logo: {
      component: HeartThreeD,
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
      text: ['3D'],
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
    name: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.NAMES.FRONT_END,
    logo: {
      component: ComputerFrontEnd,
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
      text: ['Front', 'End'],
      position: [
        {
          x: -2,
          y: 0,
          z: 0,
        },
        {
          x: -2,
          y: -1,
          z: 0,
        },
      ]
    }
  },
  {
    name: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.NAMES.BACK_END,
    logo: {
      component: ServerBackEnd,
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
      text: ['Back', 'End'],
      position: [
        {
          x: -2,
          y: 0,
          z: 0,
        },
        {
          x: -2,
          y: -1,
          z: 0,
        },
      ]
    }
  },
]
