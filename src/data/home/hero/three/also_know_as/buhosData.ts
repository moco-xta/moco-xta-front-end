import type { TDefaultValuesData, TElementData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as alsoKnowAsGroupConstants } from '@/constants/home/hero/three/also_know_as/alsoKnowAsGroupConstants.json'
import { default as buhosConstants } from '@/constants/home/hero/three/also_know_as/buhosConstants.json'

export const getBuhosDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(buhosConstants),
}

export function getBuhosAnimationsData(): TElementData {
  return {
    label: alsoKnowAsGroupConstants.label,
    duration: alsoKnowAsGroupConstants.duration,
    animations: {
      ...getAnimationsData(alsoKnowAsGroupConstants.duration, buhosConstants),
    },
  }
}
