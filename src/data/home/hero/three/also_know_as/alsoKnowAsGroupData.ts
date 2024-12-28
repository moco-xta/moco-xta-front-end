import type { TDefaultValuesData, TElementData } from '@/types/animation/types'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as alsoKnowAsGroupConstants } from '@/constants/home/hero/three/also_know_as/alsoKnowAsGroupConstants.json'

export const alsoKnowAsGroupDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(alsoKnowAsGroupConstants),
}

export function getAlsoKnowAsGroupAnimationsData(): TElementData {
  return {
    label: alsoKnowAsGroupConstants.label,
    duration: alsoKnowAsGroupConstants.duration,
  }
}
