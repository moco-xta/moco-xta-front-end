import { IntroductionCardDataInterface } from '@/interfaces/dataInterfaces'

import DoughnutChartSeventyFivePercent from '@/components/r3f/models/charts/DoughnutChartSeventyFivePercent'
import RoundedDoughnutChartNinetyPercent from '@/components/r3f/models/charts/RoundedDoughnutChartNinetyPercent'

import { default as IntroductionConstants } from '@/constants/introductionConstants.json'

export const introductionCardsData: IntroductionCardDataInterface[] = [
  {
    name: IntroductionConstants.CARDS.DOUGHNUT_CHARTS.NAMES.THREE_D,
    logo: {
      component: RoundedDoughnutChartNinetyPercent,
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
      component: RoundedDoughnutChartNinetyPercent,
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
