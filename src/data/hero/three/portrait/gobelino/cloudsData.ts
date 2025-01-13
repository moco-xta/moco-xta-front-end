import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValuesArray } from '@/helpers/animationHelpers'

import { default as gobelinoGroupConstants } from '@/constants/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as cloudsConstants } from '@/constants/hero/three/portrait/gobelino/cloudsConstants.json'

export const cloudsDefaultValues: TElementDefaultValues[] = getDefaultValuesArray(cloudsConstants)

export function getCloudsAnimationsData(): TElementAnimationData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, cloudsConstants),
    },
  }
}
