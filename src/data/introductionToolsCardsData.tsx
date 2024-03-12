import { IntroductionCardDataInterface } from '@/interfaces/data/introductionCardDataInterface'

import { LogoReactThreeDrei } from '@/components/r3f/models/logos/LogoReactThreeDrei'
import { LogoNextjs } from '@/components/r3f/models/logos/LogoNextjs'
import { LogoAngular } from '@/components/r3f/models/logos/LogoAngular'

import { default as IntroductionConstants } from '@/constants/introductionConstants.json'

export const introductionToolsCardsData: IntroductionCardDataInterface[] = [
  {
    name: IntroductionConstants.TOOLS.REACT_THREE_DREI.NAME,
    logo: LogoReactThreeDrei,
    descriptionKey: IntroductionConstants.TOOLS.REACT_THREE_DREI.DESCRIPTION_KEY,
    position: {
      x: IntroductionConstants.TOOLS.REACT_THREE_DREI.POSITION.X,
      y: IntroductionConstants.TOOLS.REACT_THREE_DREI.POSITION.Y,
      z: IntroductionConstants.TOOLS.REACT_THREE_DREI.POSITION.Z,
    },
    scale: {
      x: IntroductionConstants.TOOLS.REACT_THREE_DREI.SCALE.X,
      y: IntroductionConstants.TOOLS.REACT_THREE_DREI.SCALE.Y,
      z: IntroductionConstants.TOOLS.REACT_THREE_DREI.SCALE.Z,
    }
  },
  {
    name: IntroductionConstants.TOOLS.NEXT_JS.NAME,
    logo: LogoNextjs,
    descriptionKey: IntroductionConstants.TOOLS.REACT_THREE_DREI.DESCRIPTION_KEY,
    position: {
      x: IntroductionConstants.TOOLS.NEXT_JS.POSITION.X,
      y: IntroductionConstants.TOOLS.NEXT_JS.POSITION.Y,
      z: IntroductionConstants.TOOLS.NEXT_JS.POSITION.Z,
    },
    scale: {
      x: IntroductionConstants.TOOLS.NEXT_JS.SCALE.X,
      y: IntroductionConstants.TOOLS.NEXT_JS.SCALE.Y,
      z: IntroductionConstants.TOOLS.NEXT_JS.SCALE.Z,
    }
  },
  {
    name: IntroductionConstants.TOOLS.ANGULAR.NAME,
    logo: LogoAngular,
    descriptionKey: IntroductionConstants.TOOLS.REACT_THREE_DREI.DESCRIPTION_KEY,
    position: {
      x: IntroductionConstants.TOOLS.ANGULAR.POSITION.X,
      y: IntroductionConstants.TOOLS.ANGULAR.POSITION.Y,
      z: IntroductionConstants.TOOLS.ANGULAR.POSITION.Z,
    },
    scale: {
      x: IntroductionConstants.TOOLS.ANGULAR.SCALE.X,
      y: IntroductionConstants.TOOLS.ANGULAR.SCALE.Y,
      z: IntroductionConstants.TOOLS.ANGULAR.SCALE.Z,
    }
  },
]
