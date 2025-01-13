import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as foregroundGroupConstants } from '@/constants/hero/three/portrait/foreground/foregroundGroupConstants.json'

export const foregroundGroupDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(foregroundGroupConstants),
}

export function getForegroundGroupAnimationsData(): TElementAnimationData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, foregroundGroupConstants),
    },
  }
}
