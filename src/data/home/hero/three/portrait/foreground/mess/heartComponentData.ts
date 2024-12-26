import type { TDefaultValuesData, TElementData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as heartComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/heartComponentConstants.json'

export const getHeartComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(heartComponentConstants),
}

export function getHeartComponentAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, heartComponentConstants),
    },
  }
}
