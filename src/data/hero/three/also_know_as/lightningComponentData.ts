import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as alsoKnowAsGroupConstants } from '@/constants/hero/three/also_know_as/alsoKnowAsGroupConstants.json'
import { default as lightningComponentConstants } from '@/constants/hero/three/also_know_as/lightningComponentConstants.json'

export const lightningComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(lightningComponentConstants),
}

export function getLightningComponentAnimationsData(): TElementAnimationData {
  return {
    label: alsoKnowAsGroupConstants.label,
    duration: alsoKnowAsGroupConstants.duration,
    animations: {
      ...getAnimationsData(alsoKnowAsGroupConstants.duration, lightningComponentConstants),
    },
  }
}
