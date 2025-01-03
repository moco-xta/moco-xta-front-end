import type { TElementData, TDefaultValuesData } from '@/types/animation/three/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'

export const foregroundGroupDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(foregroundGroupConstants),
}

export function getForegroundGroupAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, foregroundGroupConstants),
    },
  }
}
