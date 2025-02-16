import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
import { getAnimationsData } from '@/helpers/animationHelpers'

import { default as basedInGroupConstants } from '@/constants/contact/three/based_in/basedInGroupConstants.json'

export function getBasedInGroupDefaultValues(): TElementDefaultValues {
  return getDefaultValues(basedInGroupConstants)
}

export function getBasedInGroupAnimationsData(): TElementAnimationData {
  return {
    label: basedInGroupConstants.label,
    duration: basedInGroupConstants.duration,
    animations: {
      ...getAnimationsData(basedInGroupConstants.duration, basedInGroupConstants),
    },
  }
}
