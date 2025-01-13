import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as gobelinoGroupConstants } from '@/constants/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as moonComponentConstants } from '@/constants/hero/three/portrait/gobelino/sun_and_moon/moonComponentConstants.json'

export const moonComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(moonComponentConstants),
}

export function getMoonComponentAnimationsData(): TElementAnimationData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, moonComponentConstants),
    },
  }
}
