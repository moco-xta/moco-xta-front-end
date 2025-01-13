import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValuesArray } from '@/helpers/animationHelpers'

import { default as alsoKnowAsGroupConstants } from '@/constants/hero/three/also_know_as/alsoKnowAsGroupConstants.json'
import { default as buhosConstants } from '@/constants/hero/three/also_know_as/buhosConstants.json'

export const buhosDefaultValues: TElementDefaultValues[] = getDefaultValuesArray(buhosConstants)

export function getBuhosAnimationsData(): TElementAnimationData {
  return {
    label: alsoKnowAsGroupConstants.label,
    duration: alsoKnowAsGroupConstants.duration,
    animations: {
      ...getAnimationsData(alsoKnowAsGroupConstants.duration, buhosConstants),
    },
  }
}
