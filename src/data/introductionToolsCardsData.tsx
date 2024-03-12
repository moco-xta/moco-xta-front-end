import { IntroductionCardDataInterface } from '@/interfaces/data/introductionCardDataInterface'

import { LogoReactThreeDrei } from '@/components/r3f/models/logos/LogoReactThreeDrei'
import { LogoNextjs } from '@/components/r3f/models/logos/LogoNextjs'
import { LogoAngular } from '@/components/r3f/models/logos/LogoAngular'

import { default as IntroductionConstants } from '@/constants/introductionConstants.json'

export const introductionToolsCardsData: IntroductionCardDataInterface[] = [
  {
    name: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.NAME,
    logo: {
      component: LogoReactThreeDrei,
      position: {
        x: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.LOGO.POSITION.X,
        y: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.LOGO.POSITION.Y,
        z: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.LOGO.POSITION.Z,
      },
      scale: {
        x: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.LOGO.SCALE.X,
        y: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.LOGO.SCALE.Y,
        z: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.LOGO.SCALE.Z,
      },
    },
    description: {
      key: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.DESCRIPTION.KEY,
      position: {
        x: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.DESCRIPTION
          .POSITION.X,
        y: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.DESCRIPTION
          .POSITION.Y,
        z: IntroductionConstants.CARDS.TOOLS.REACT_THREE_DREI.DESCRIPTION
          .POSITION.Z,
      },
    },
  },
  {
    name: IntroductionConstants.CARDS.TOOLS.NEXT_JS.NAME,
    logo: {
      component: LogoNextjs,
      position: {
        x: IntroductionConstants.CARDS.TOOLS.NEXT_JS.LOGO.POSITION.X,
        y: IntroductionConstants.CARDS.TOOLS.NEXT_JS.LOGO.POSITION.Y,
        z: IntroductionConstants.CARDS.TOOLS.NEXT_JS.LOGO.POSITION.Z,
      },
      scale: {
        x: IntroductionConstants.CARDS.TOOLS.NEXT_JS.LOGO.SCALE.X,
        y: IntroductionConstants.CARDS.TOOLS.NEXT_JS.LOGO.SCALE.Y,
        z: IntroductionConstants.CARDS.TOOLS.NEXT_JS.LOGO.SCALE.Z,
      },
    },
    description: {
      key: IntroductionConstants.CARDS.TOOLS.NEXT_JS.DESCRIPTION.KEY,
      position: {
        x: IntroductionConstants.CARDS.TOOLS.NEXT_JS.DESCRIPTION.POSITION.X,
        y: IntroductionConstants.CARDS.TOOLS.NEXT_JS.DESCRIPTION.POSITION.Y,
        z: IntroductionConstants.CARDS.TOOLS.NEXT_JS.DESCRIPTION.POSITION.Z,
      },
    },
  },
  {
    name: IntroductionConstants.CARDS.TOOLS.ANGULAR.NAME,
    logo: {
      component: LogoAngular,
      position: {
        x: IntroductionConstants.CARDS.TOOLS.ANGULAR.LOGO.POSITION.X,
        y: IntroductionConstants.CARDS.TOOLS.ANGULAR.LOGO.POSITION.Y,
        z: IntroductionConstants.CARDS.TOOLS.ANGULAR.LOGO.POSITION.Z,
      },
      scale: {
        x: IntroductionConstants.CARDS.TOOLS.ANGULAR.LOGO.SCALE.X,
        y: IntroductionConstants.CARDS.TOOLS.ANGULAR.LOGO.SCALE.Y,
        z: IntroductionConstants.CARDS.TOOLS.ANGULAR.LOGO.SCALE.Z,
      },
    },
    description: {
      key: IntroductionConstants.CARDS.TOOLS.ANGULAR.DESCRIPTION.KEY,
      position: {
        x: IntroductionConstants.CARDS.TOOLS.ANGULAR.DESCRIPTION.POSITION.X,
        y: IntroductionConstants.CARDS.TOOLS.ANGULAR.DESCRIPTION.POSITION.Y,
        z: IntroductionConstants.CARDS.TOOLS.ANGULAR.DESCRIPTION.POSITION.Z,
      },
    },
  },
]
