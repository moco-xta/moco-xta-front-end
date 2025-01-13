import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as mocoGroupConstants } from '@/constants/hero/three/moco/mocoGroupConstants.json'

export const mocoGroupDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(mocoGroupConstants),
}

export function getMocoGroupAnimationsData(): TElementAnimationData {
  return {
    label: mocoGroupConstants.label,
    duration: mocoGroupConstants.duration,
  }
}
