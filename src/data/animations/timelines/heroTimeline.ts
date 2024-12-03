import { SceneInterface } from '@/helpers/animationHelpers'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export const heroTimeline: SceneInterface[] = [
  {
    sceneName: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.NAME,
    steps:
      heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.STEPS -
      heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.OFFSET,
  },
  {
    sceneName: heroAnimationsConstants.SCENES.FEDERICO.NAME,
    steps:
      heroAnimationsConstants.SCENES.FEDERICO.STEPS -
      heroAnimationsConstants.SCENES.FEDERICO.OFFSET,
  },
  {
    sceneName: heroAnimationsConstants.SCENES.AKA_MOCO.KEYFRAME_NAME,
    steps:
      heroAnimationsConstants.SCENES.AKA_MOCO
        .STEPS /* - heroAnimationsConstants.SCENES.AKA_MOCO.OFFSET */,
  },
]
