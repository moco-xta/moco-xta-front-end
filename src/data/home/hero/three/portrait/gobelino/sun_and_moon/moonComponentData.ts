import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as moonComponentConstants } from '@/constants/home/hero/three/portrait/gobelino/sun_and_moon/moonComponentConstants.json'

export const moonComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(moonComponentConstants),
}

export function getMoonComponentAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, moonComponentConstants),
    },
  }
}
