import { SceneInterface } from '@/helpers/animationHelpers'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export const heroTimeline: SceneInterface[] = [
  {
    sceneName: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.NAME,
    steps:
      heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.DURATION -
      heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.OFFSET,
  },
  {
    sceneName: heroAnimationsConstants.SCENES.FEDERICO.NAME,
    steps:
      heroAnimationsConstants.SCENES.FEDERICO.DURATION -
      heroAnimationsConstants.SCENES.FEDERICO.OFFSET,
  },
  {
    sceneName: heroAnimationsConstants.SCENES.AKA_MOCO.KEYFRAME_NAME,
    steps:
      heroAnimationsConstants.SCENES.AKA_MOCO
        .DURATION /* - heroAnimationsConstants.SCENES.AKA_MOCO.OFFSET */,
  },
]
