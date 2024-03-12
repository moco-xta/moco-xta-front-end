import { IntroductionCardDataInterface } from '@/interfaces/data/introductionCardDataInterface'

import { DoughnutChartSeventyFivePercent } from '@/components/r3f/models/charts/DoughnutChartSeventyFivePercent'
import { DoughnutChartNinetyPercent } from '@/components/r3f/models/charts/DoughnutChartNinetyPercent'

import { default as IntroductionConstants } from '@/constants/introductionConstants.json'

export const introductionSkillsCardsData: IntroductionCardDataInterface[] = [
  {
    name: IntroductionConstants.DOUGHNUT_CHART.NAMES.THREE_D,
    logo: DoughnutChartNinetyPercent,
    descriptionKey: IntroductionConstants.DOUGHNUT_CHART.DESCRIPTION_KEY.THREE_D,
    position: {
      x: IntroductionConstants.DOUGHNUT_CHART.POSITION.X,
      y: IntroductionConstants.DOUGHNUT_CHART.POSITION.Y,
      z: IntroductionConstants.DOUGHNUT_CHART.POSITION.Z,
    },
    scale: {
      x: IntroductionConstants.DOUGHNUT_CHART.SCALE.X,
      y: IntroductionConstants.DOUGHNUT_CHART.SCALE.Y,
      z: IntroductionConstants.DOUGHNUT_CHART.SCALE.Z,
    }
  },
  {
    name: IntroductionConstants.DOUGHNUT_CHART.NAMES.FRONT_END,
    logo: DoughnutChartNinetyPercent,
    descriptionKey: IntroductionConstants.DOUGHNUT_CHART.DESCRIPTION_KEY.FRONT_END,
    position: {
      x: IntroductionConstants.DOUGHNUT_CHART.POSITION.X,
      y: IntroductionConstants.DOUGHNUT_CHART.POSITION.Y,
      z: IntroductionConstants.DOUGHNUT_CHART.POSITION.Z,
    },
    scale: {
      x: IntroductionConstants.DOUGHNUT_CHART.SCALE.X,
      y: IntroductionConstants.DOUGHNUT_CHART.SCALE.Y,
      z: IntroductionConstants.DOUGHNUT_CHART.SCALE.Z,
    }
  },
  {
    name: IntroductionConstants.DOUGHNUT_CHART.NAMES.BACK_END,
    logo: DoughnutChartSeventyFivePercent,
    descriptionKey: IntroductionConstants.DOUGHNUT_CHART.DESCRIPTION_KEY.BACK_END,
    position: {
      x: IntroductionConstants.DOUGHNUT_CHART.POSITION.X,
      y: IntroductionConstants.DOUGHNUT_CHART.POSITION.Y,
      z: IntroductionConstants.DOUGHNUT_CHART.POSITION.Z,
    },
    scale: {
      x: IntroductionConstants.DOUGHNUT_CHART.SCALE.X,
      y: IntroductionConstants.DOUGHNUT_CHART.SCALE.Y,
      z: IntroductionConstants.DOUGHNUT_CHART.SCALE.Z,
    }
  },
]
