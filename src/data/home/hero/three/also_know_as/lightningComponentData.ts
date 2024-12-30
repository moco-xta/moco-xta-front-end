import type { TDefaultValuesData, TElementData } from '@/types/animation/three/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as alsoKnowAsGroupConstants } from '@/constants/home/hero/three/also_know_as/alsoKnowAsGroupConstants.json'
import { default as lightningComponentConstants } from '@/constants/home/hero/three/also_know_as/lightningComponentConstants.json'

export const getLightningComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(lightningComponentConstants),
}

export function getLightningComponentAnimationsData(): TElementData {
  return {
    label: alsoKnowAsGroupConstants.label,
    duration: alsoKnowAsGroupConstants.duration,
    animations: {
      ...getAnimationsData(alsoKnowAsGroupConstants.duration, lightningComponentConstants),
    },
  }
}
