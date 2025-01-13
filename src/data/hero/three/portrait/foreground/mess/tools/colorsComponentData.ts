import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as foregroundGroupConstants } from '@/constants/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as colorsComponentConstants } from '@/constants/hero/three/portrait/foreground/mess/tools/colorsComponentConstants.json'

export const colorsComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(colorsComponentConstants),
}

export function getColorsComponentAnimationsData(): TElementAnimationData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, colorsComponentConstants),
    },
  }
}
