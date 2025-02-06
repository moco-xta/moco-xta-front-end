import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'

import { default as basedInParisGroupConstants } from '@/constants/contact/three/based_in/basedInParisGroupConstants.json'

export function getBasedInParisGroupDefaultValues(): TElementDefaultValues {
  return getDefaultValues(basedInParisGroupConstants)
}

export function getBasedInParisGroupAnimationsData(): TElementAnimationData {
  return {
    label: basedInParisGroupConstants.label,
    duration: basedInParisGroupConstants.duration,
  }
}
