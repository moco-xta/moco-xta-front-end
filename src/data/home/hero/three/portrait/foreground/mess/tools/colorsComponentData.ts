import type { TDefaultValuesData, TElementData } from '@/types/animation/three/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as colorsComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/tools/colorsComponentConstants.json'

export const colorsComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(colorsComponentConstants),
}

export function getColorsComponentAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, colorsComponentConstants),
    },
  }
}
