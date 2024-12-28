import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as sunAndmoonGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/sun_and_moon/sunAndmoonGroupConstants.json'

export const sunAndMoonGroupDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(sunAndmoonGroupConstants),
}

export function getSunAndMoonGroupAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, sunAndmoonGroupConstants),
    },
  }
}
