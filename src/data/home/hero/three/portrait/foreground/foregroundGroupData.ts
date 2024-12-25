import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'

export const getForegroundDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(foregroundGroupConstants),
}

export function getForegroundGroupAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
  }
}
