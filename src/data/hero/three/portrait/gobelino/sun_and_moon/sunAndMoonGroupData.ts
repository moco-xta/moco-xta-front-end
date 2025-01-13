import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as gobelinoGroupConstants } from '@/constants/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as sunAndmoonGroupConstants } from '@/constants/hero/three/portrait/gobelino/sun_and_moon/sunAndmoonGroupConstants.json'

export const sunAndMoonGroupDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(sunAndmoonGroupConstants),
}

export function getSunAndMoonGroupAnimationsData(): TElementAnimationData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, sunAndmoonGroupConstants),
    },
  }
}
