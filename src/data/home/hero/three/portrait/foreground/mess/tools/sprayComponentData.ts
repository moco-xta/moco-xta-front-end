import type { TDefaultValuesData, TElementData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as sprayComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/tools/sprayComponentConstants.json'

export const getSprayComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(sprayComponentConstants),
}

export function getSprayComponentAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, sprayComponentConstants),
    },
  }
}
