import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as alsoKnowAsGroupConstants } from '@/constants/hero/three/also_know_as/alsoKnowAsGroupConstants.json'

export const alsoKnowAsGroupDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(alsoKnowAsGroupConstants),
}

export function getAlsoKnowAsGroupAnimationsData(): TElementAnimationData {
  return {
    label: alsoKnowAsGroupConstants.label,
    duration: alsoKnowAsGroupConstants.duration,
  }
}
