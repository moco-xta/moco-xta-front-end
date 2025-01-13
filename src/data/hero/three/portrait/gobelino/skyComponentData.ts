import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as gobelinoGroupConstants } from '@/constants/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as skyComponentConstants } from '@/constants/hero/three/portrait/gobelino/skyComponentConstants.json'

export const skyComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(skyComponentConstants),
}

export function getSkyComponentAnimationsData(): TElementAnimationData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, skyComponentConstants),
    },
  }
}
