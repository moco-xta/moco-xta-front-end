import type { TDefaultValuesData, TElementData } from '@/types/animation/three/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as ganeshComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/ganeshComponentConstants.json'

export const getGaneshComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(ganeshComponentConstants),
}

export function getGaneshComponentAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, ganeshComponentConstants),
    },
  }
}
