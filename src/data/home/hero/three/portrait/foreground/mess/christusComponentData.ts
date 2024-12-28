import type { TDefaultValuesData, TElementData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as christusComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/christusComponentConstants.json'

export const christusComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(christusComponentConstants),
}

export function getChristusComponentAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, christusComponentConstants),
    },
  }
}
