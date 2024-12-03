import { SceneInterface } from '@/helpers/animationHelpers'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export const heroTimeline: SceneInterface[] = [
  {
    sceneName: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.NAME,
    steps: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.STEPS,
  },
  {
    sceneName: heroAnimationsConstants.SCENES.FEDERICO.KEYFRAME_NAME,
    steps: heroAnimationsConstants.SCENES.FEDERICO.STEPS,
  },
  {
    sceneName: heroAnimationsConstants.SCENES.AKA_MOCO.KEYFRAME_NAME,
    steps: heroAnimationsConstants.SCENES.AKA_MOCO.STEPS,
  },
]
