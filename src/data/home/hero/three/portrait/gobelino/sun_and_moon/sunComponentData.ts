import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as sunComponentConstants } from '@/constants/home/hero/three/portrait/gobelino/sun_and_moon/sunComponentConstants.json'

export const sunComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(sunComponentConstants),
}

export function getSunComponentAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, sunComponentConstants),
    },
  }
}
