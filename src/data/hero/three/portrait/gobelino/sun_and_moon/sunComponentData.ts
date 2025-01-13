import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as gobelinoGroupConstants } from '@/constants/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as sunComponentConstants } from '@/constants/hero/three/portrait/gobelino/sun_and_moon/sunComponentConstants.json'

export const sunComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(sunComponentConstants),
}

export function getSunComponentAnimationsData(): TElementAnimationData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, sunComponentConstants),
    },
  }
}
