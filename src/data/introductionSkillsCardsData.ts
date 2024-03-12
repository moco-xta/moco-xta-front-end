import { IntroductionCardDataInterface } from '@/interfaces/data/introductionCardDataInterface'

import { DoughnutChartSeventyFivePercent } from '@/components/r3f/models/charts/DoughnutChartSeventyFivePercent'
import { DoughnutChartNinetyPercent } from '@/components/r3f/models/charts/DoughnutChartNinetyPercent'

import { default as IntroductionConstants } from '@/constants/introductionConstants.json'

export const introductionSkillsCardsData: IntroductionCardDataInterface[] = [
  {
    name: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.NAMES.THREE_D,
    logo: {
      component: DoughnutChartNinetyPercent,
      position: {
        x: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.POSITION.X,
        y: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.POSITION.Y,
        z: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.POSITION.Z,
      },
      scale: {
        x: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.SCALE.X,
        y: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.SCALE.Y,
        z: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.SCALE.Z,
      },
    },
    description: {
      key: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.DESCRIPTION_KEYS.THREE_D,
      position: {
        x: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.TEXTS.POSITION.X,
        y: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.TEXTS.POSITION.Y,
        z: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.TEXTS.POSITION.Z,
      },
    },
  },
  {
    name: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.NAMES.FRONT_END,
    logo: {
      component: DoughnutChartNinetyPercent,
      position: {
        x: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.POSITION.X,
        y: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.POSITION.Y,
        z: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.POSITION.Z,
      },
      scale: {
        x: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.SCALE.X,
        y: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.SCALE.Y,
        z: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.SCALE.Z,
      },
    },
    description: {
      key: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.DESCRIPTION_KEYS
        .FRONT_END,
      position: {
        x: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.TEXTS.POSITION.X,
        y: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.TEXTS.POSITION.Y,
        z: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.TEXTS.POSITION.Z,
      },
    },
  },
  {
    name: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.NAMES.BACK_END,
    logo: {
      component: DoughnutChartSeventyFivePercent,
      position: {
        x: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.POSITION.X,
        y: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.POSITION.Y,
        z: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.POSITION.Z,
      },
      scale: {
        x: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.SCALE.X,
        y: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.SCALE.Y,
        z: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.SCALE.Z,
      },
    },
    description: {
      key: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.DESCRIPTION_KEYS
        .BACK_END,
      position: {
        x: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.TEXTS.POSITION.X,
        y: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.TEXTS.POSITION.Y,
        z: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.TEXTS.POSITION.Z,
      },
    },
  },
]
